import Card from './Card'

function IntroCard() {
  return (
    <Card
      nav={
        <p className='border-l-4 border-solid border-black justify-center px-4 flex items-center'>
          INTRO
        </p>
      }
      id="intro"
      context={
        <h1 className='m-4 font-bold text-4xl'>CASS</h1>
      }
    >
      <p className='m-4'>application security / software development / web</p>
      <div className="px-4">
        <hr />
        </div>
      <ul className="flex p-4 flex-wrap justify-center align-center">
        <li className="px-3 underline hover:text-purple-400 hover:cursor-pointer"><a href="#education">EDUCATION</a></li>
        <li className="px-3 underline hover:text-purple-400"><a href="#about">ABOUT</a></li>
        <li className="px-3 underline hover:text-purple-400"><a href="#work">WORK HISTORY</a></li>
        <li className="px-3 underline hover:text-purple-400"><a href="#certs">CERTIFICATIONS</a></li>
        <li className="px-3 underline hover:text-purple-400"><a href="#skills">SKILLS</a></li>
        <li className="px-3 underline hover:text-purple-400"><a href="#volunteer">VOLUNTEERING</a></li>
        <li className="px-3 underline hover:text-purple-400"><a href="#pro">PROFESSIONAL PROJECTS</a></li>
        <li className="px-3 underline hover:text-purple-400"><a href="#pers">PERSONAL PROJECTS</a></li>
        <li className="px-3 underline hover:text-purple-400"><a href="#community">COMMUNITY</a></li>
      </ul>
    </Card>
  )
}

export default IntroCard
