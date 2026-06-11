import About from './components/AboutCard'
import Certifications from './components/Certifications';
import Community from './components/CommunityCard'
import Education from './components/EducationCard'
import Intro from './components/IntroCard'
import PersonalProjects from './components/PersonalProjectsCard'
import Projects from './components/ProjectsCard'
import Skills from './components/SkillsCard'
import Work from './components/WorkCard'
import Volunteering from './components/VolunteeringCard'

function App() {
  return (
    <>
      <main className='grid md:grid-cols-2 text-xl lg:mt-8 lg:mx-16 mt-4 relative z-50'>
        <div>
          <Intro />
          <section>
            <About />
            <Work />
            <Skills />
            <Community />
          </section>
        </div>

        <section className='lg:mx-4 lg:my-16 flex flex-col'>
          <Education />
          <Certifications />
          <Volunteering />
          <Projects />
          <PersonalProjects />
        </section>
      </main>

      <div className='bg-grid-pattern bg-[length:2.25rem_2.25rem] w-full h-[50%] fixed bottom-0 z-0' />
    </>
  )
}

export default App
