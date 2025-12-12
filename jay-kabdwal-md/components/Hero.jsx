import { Mail, Github } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row gap-8 items-start w-full max-w-6xl mx-auto p-6 md:mt-8 cursor-default">
            {/* Right About Text */}
            <div className="space-y-4">
                <h3 className="text-3xl font-bold">About</h3>
                <div>
                    <p className="mb-2">
                        I'm Jay Kabdwal, a Software Engineer and Full Stack Developer. I am currently pursuing my degree in Computer Science, where I am honing my skills in building scalable and efficient web applications.
                    </p>
                    <p className="mb-2">
                        I also freelance and help brands build their online presence with conversion focussed websites. I love open source and often contribute to my favorite projects.
                    </p>
                </div>

            </div>
        </section>
    );
}
