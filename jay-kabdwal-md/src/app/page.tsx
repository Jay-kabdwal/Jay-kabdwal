
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ConnectSection from "./components/sections/ConnectSection";
import ToolsSection from "./components/sections/ToolsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import FAQSection from "./components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection/>
      <ToolsSection />
      <ConnectSection />
      <FAQSection />
    </>
  );
}
