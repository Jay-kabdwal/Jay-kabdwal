import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Jay Kabdwal",
  description:
    "Portfolio of Jay Kabdwal - Software Engineer | Full Stack Developer | Computer Science Student",
  keywords: [
    "Jay Kabdwal",
    "Software Engineer Portfolio",
    "Computer Science Student",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Engineering Intern",
    "Student Developer Portfolio",
    "Open Source",
    "JavaScript",
    "Web Developer",
  ],
  authors: [{ name: "Jay Kabdwal" }],
  creator: "Jay Kabdwal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
