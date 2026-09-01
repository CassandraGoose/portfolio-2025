import Card from './Card'
import LinkButton from './LinkButton'

function NavCard() {
  return (
    <Card
      nav={
        <p className='border-l-4 border-solid border-black justify-center px-4 flex items-center'>
          HI!
        </p>
      }
      id="nav"
      context={
        <h1 className='m-4 font-bold text-xl'></h1>
      }
    >
      <div className="flex p-4 flex-wrap justify-center items-center gap-8 mb-4">
        <LinkButton href="#about">ABOUT</LinkButton>
        <LinkButton href="#certs">CERTIFICATIONS</LinkButton>
        <LinkButton href="#community">COMMUNITY</LinkButton>
        <LinkButton href="#education">EDUCATION</LinkButton>
        <LinkButton href="#pro">PROFESSIONAL APPLICATIONS</LinkButton>
        <LinkButton href="#pers">PERSONAL PROJECTS</LinkButton>
        <LinkButton href="#skills">SKILLS</LinkButton>
        <LinkButton href="#volunteer">VOLUNTEERING</LinkButton>
        <LinkButton href="#work">WORK EXPERIENCE</LinkButton>
      </div>
    </Card>
  )
}

export default NavCard
