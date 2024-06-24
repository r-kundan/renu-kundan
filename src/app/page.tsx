import Image from "next/image";
import HeroSection from "@/components/HeroSection"
import ProjectPage from "@/app/projects/page"
import SkillPage from "@/app/skills/page"
import EducationPAge from "@/app/education/page"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black/[0.96] flex flex-col items-center gap-20 antialiased bg-grid-white/[0.02]">

<HeroSection/>
<EducationPAge/>
<SkillPage/>
<ProjectPage/>
    </main>
  );
}
