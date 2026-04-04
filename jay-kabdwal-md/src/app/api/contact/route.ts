import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RateBucket = {
    timestamps: number[];
};

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 3;

const rateLimitStore = new Map<string, RateBucket>();

function getClientIp(request: NextRequest): string {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) {
        return forwardedFor.split(",")[0].trim();
    }

    const realIp = request.headers.get("x-real-ip");
    if (realIp) {
        return realIp.trim();
    }

    return "unknown";
}

function isRateLimited(ip: string): { limited: boolean; retryAfterSec: number } {
    const now = Date.now();
    const bucket = rateLimitStore.get(ip) ?? { timestamps: [] };

    bucket.timestamps = bucket.timestamps.filter((ts) => now - ts < WINDOW_MS);

    if (bucket.timestamps.length >= MAX_REQUESTS) {
        const oldestInWindow = bucket.timestamps[0];
        const retryAfterMs = WINDOW_MS - (now - oldestInWindow);
        rateLimitStore.set(ip, bucket);
        return {
            limited: true,
            retryAfterSec: Math.max(1, Math.ceil(retryAfterMs / 1000)),
        };
    }

    bucket.timestamps.push(now);
    rateLimitStore.set(ip, bucket);

    return { limited: false, retryAfterSec: 0 };
}

export async function POST(request: NextRequest) {
    try {
        const ip = getClientIp(request);
        const rate = isRateLimited(ip);

        if (rate.limited) {
            return NextResponse.json(
                {
                    ok: false,
                    message: "Rate limit exceeded. Please try again later.",
                    retryAfterSec: rate.retryAfterSec,
                },
                {
                    status: 429,
                    headers: { "Retry-After": String(rate.retryAfterSec) },
                }
            );
        }

        const body = await request.json();
        const name = String(body?.name ?? "").trim();
        const email = String(body?.email ?? "").trim();
        const message = String(body?.message ?? "").trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                { ok: false, message: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = Number(process.env.SMTP_PORT ?? "587");
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const contactTo = process.env.CONTACT_TO_EMAIL;
        const fromEmail = process.env.FROM_EMAIL ?? smtpUser;

        if (!smtpHost || !smtpUser || !smtpPass || !contactTo || !fromEmail) {
            return NextResponse.json(
                {
                    ok: false,
                    message:
                        "Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, and FROM_EMAIL.",
                },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        await transporter.sendMail({
            from: fromEmail,
            to: contactTo,
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
        });

        return NextResponse.json({ ok: true, message: "Message sent successfully." });
    } catch (error) {
        console.error("Contact API error", error);
        return NextResponse.json(
            { ok: false, message: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
