import Card from './Card'

function WorkCard() {
  return (
    <Card
      nav={
        <p className='border-r border-solid border-black justify-center px-4 flex items-center'>
          WORK EXPERIENCE
        </p>
      }
      context={
        <h1 className='m-4'>
          I have experience as an individually contributing developer, a tech
          lead, and an instructor.
        </h1>
      }
    >
      <ul className='m-4 list-disc'>
        <li className='ml-4'>
          <p className='italic'>Senior Front End Developer</p>
          <p className='text-lg'>October 2024 - April 2025 (contract)</p>
        </li>
        <li className='ml-4 mt-4'>
          <p className='italic'>Instructor of Front End Engineering</p>
          <p className='text-lg'>June 2021 - October 2023</p>
        </li>
        <li className='ml-4 mt-4'>
          <p className='italic'>Software Engineer / Tech Lead</p>
          <p className='text-lg'>October 2018 - January 2021</p>
        </li>
        <li className='ml-4 mt-4'>
          <p className='italic'>Front End Developer</p>
          <p className='text-lg'>February 2018 - October 2018</p>
        </li>
        <li className='ml-4 mt-4'>
          <p className='italic'>Full Stack Resident Instructor</p>
          <p className='text-lg'>April 2017 - February 2018</p>
        </li>
        <li className='ml-4 mt-4'>
          <p className='italic'>Previous work experience available upon request.</p>
        </li>
      </ul>
    </Card>
  )
}

export default WorkCard
