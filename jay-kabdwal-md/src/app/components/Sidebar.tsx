import { FaDribbble, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {ArrowUpRight} from "lucide-react"
import Image from "next/image";
import Link from "next/link";


    type SocialItem = {
      label: string;
      href: string;
      icon: React.ComponentType<{ className?: string }>;
    };
    
    
const socialItems: SocialItem[] = [
  { label: "Instagram", href: "https://github.com", icon: FaInstagram },
  { label: "Twitter", href: "https://www.linkedin.com", icon: FaTwitter },
];

export default function SidebarCard() {
    const brandName = "Jay Kabdwal";
    const brandLine ="A Software Engineer who has developed countless innovative solutions.";

    
    return (
      <div className="w-[300px] bg-zinc-100 rounded-3xl p-6 flex flex-col items-center relative shadow-lg">
        {/* Profile Image */}
        <div className="w-full rounded-2xl overflow-hidden bg-orange-600">
          <Image
            width={120}
            height={120}
            src="/profile.jpg" // replace with your image
            alt="profile"
            className="w-full h-56 object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="lg:text-4xl font-extrabold mt-4">{brandName}</h2>

        {/* Description */}
        <p className="text-center text-gray-600 mt-4 text-md leading-relaxed">
          {brandLine}
        </p>

        {/* Social Icons */}
        <div className=" mt-6 flex items-center justify-center gap-4 text-orange-500 text-xl">
          {socialItems.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} target="_blank">
                <Icon className="hover:scale-110 size-7 transition cursor-pointer" />
              </a>
            );
          })}
        </div>
        {/* Button */}
        <button className="mt-6 flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full hover:bg-zinc-800 transition hover:scale-110">
          RESUME <ArrowUpRight size={20} />
        </button>
        <Link href={"/connect"}>
          <button className="mt-2 flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full hover:bg-zinc-800 transition hover:scale-110">
           CONTACT ME
          </button>
        </Link>
      </div>
    );
}
