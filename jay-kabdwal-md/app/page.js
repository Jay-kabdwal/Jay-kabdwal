import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import WorkExperience from "@/components/WorkExperience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
export default function Home() {
  return (
    <>
      <section className=" h-[calc(100vh)] overflow-y-auto hide-scrollbar">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <Sidebar />
        <div className="flex-1">
          <Hero />
          <WorkExperience />
          <TechStack />
          <Projects />
          {/* <OpenSource /> */}
          <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 cursor-default">
            © Jay Kabdwal 2024. All rights reserved.
          </footer>
        </div>
        </div>
      </section>


    </>
  );
}
