import About from "./components/AboutCard";
import Certifications from "./components/Certifications";
import Community from "./components/CommunityCard";
import Education from "./components/EducationCard";
import Intro from "./components/IntroCard";
import NavCard from "./components/NavCard";
import PersonalProjects from "./components/PersonalProjectsCard";
import Projects from "./components/ProjectsCard";
import Skills from "./components/SkillsCard";
import Work from "./components/WorkCard";
import Volunteering from "./components/VolunteeringCard";

function App() {
  return (
    <>
      <div className="lg:mx-16 text-xl">
        <NavCard />
      </div>
      <main className="grid md:grid-cols-2 text-xl lg:mx-16 relative z-50">
        <div>
          <Intro />
          <section>
            <Work />
            <Skills />
            <Projects />
          </section>
        </div>

        <section className="flex flex-col">
          <About />
          <Education />
          <Certifications />
          <PersonalProjects />
          <Volunteering />
          <Community />
        </section>
      </main>

      <div className="bg-grid-pattern bg-[length:2.25rem_2.25rem] w-full h-[50%] fixed bottom-0 z-0" />
    </>
  );
}

export default App;
