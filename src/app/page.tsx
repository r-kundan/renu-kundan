import Image from "next/image";
import HeroSection from "@/components/HeroSection"
import ProjectPage from "@/app/projects/page"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">

<HeroSection/>
<ProjectPage/>
    </main>
  );
}
