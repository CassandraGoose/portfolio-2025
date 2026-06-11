import Card from './Card'

function EducationCard() {
  return (
    <Card
      nav={
        <p className='border-r border-solid border-black justify-center px-4 flex items-center'>
          EDUCATION & LEARNING
        </p>
      }
      context={
        <h1 className='m-4'>
          I've had some formal education and some of that has been on...education.
          So, I think it's safe to say that I know how to learn. I believe there
          is value in learning many disciplines and skills - not only technologies
          and work-related content. As such, I've included information on my
          personal and continuing education.
        </h1>
      }
    >
      <div className='m-4'>
        <p className='font-bold'>Formal Education</p>
        <ul className='m-4 list-disc'>
          <li className='ml-4 mb-4'>
            <p className='italic'>Web Development Certificate: 2016-2017</p>
            <p className='text-lg'>Galvanize - Web Development Immersive</p>
          </li>
          <li className='ml-4 mb-4'>
            <p className='italic'>Bachelor of Music Education, summa cum laude: 2009-2014</p>
            <p className='text-lg'>University of Northern Colorado</p>
          </li>
        </ul>
        <p className='font-bold m4'>Personal & Professional Courses</p>
        <ul className='list-disc m-4'>
          <li className='ml-4 mb-4'>
            <p className='italic'>Various College Courses</p>
            <p className='text-lg'>Various</p>
            <p className='text-lg'>
              Probability and Statistics, Web Development, Data Structures & Algorithms
            </p>
          </li>
          <li className='ml-4 mb-4'>
            <p className='italic'>Functional JavaScript First Steps</p>
            <p className='text-lg'>FrontEnd Masters</p>
            <p className='text-lg'>
              An introduction to functional programming using JavaScript
            </p>
          </li>
          <li className='ml-4 mb-4'>
            <p className='italic'>The Hard Parts of Functional JavaScript</p>
            <p className='text-lg'>FrontEnd Masters</p>
            <p className='text-lg'>
              A deep dive into functional concepts using JavaScript
            </p>
          </li>
          <li className='ml-4 mb-4'>
            <p className='italic'>CS50</p>
            <p className='text-lg'>An Open/Online Course from Harvard</p>
            <p className='text-lg'>
              An introduction to the intelectual enterprises of computer science
              and the art of programming. Includes foundational knowledge of the
              following tech: C, Python, SQL
            </p>
          </li>
          <li className='ml-4 mb-4'>
            <p className='italic'>Steps In Japanese 1</p>
            <p className='text-lg'>An Open/Online Course from Waseda University</p>
            <p className='text-lg'>Fundamental/Survival Japenese Language Course</p>
          </li>
          <li className='ml-4 mb-4'>
            <p className='italic'>Comics: Art in Relationship</p>
            <p className='text-lg'>An Open/Online Course from California College of the Arts</p>
            <p className='text-lg'>
              An exploration of the context and concepts that tell stories within
              comics.
            </p>
          </li>
        </ul>
        <p className='font-bold m4'>Tech Conferences Attended</p>
        <ul className='list-disc m-4'>
          <li className='ml-4 mb-4'>
            <p className='italic'>React Summit, 2023</p>
            <p className='text-lg'>
              Remote/Hybrid, multi-track React conference (I attended remotely)
            </p>
          </li>
          <li className='ml-4 mb-4'>
            <p className='italic'>JSNation, 2023</p>
            <p className='text-lg'>
              Remote/Hybrid, multi-track JavaScript conference (I attended remotely)
            </p>
          </li>
          <li className='ml-4 mb-4'>
            <p className='italic'>Devternity, 2022</p>
            <p className='text-lg'>A remote, multi-track development conference</p>
          </li>
          <li className='ml-4 mb-4'>
            <p className='italic'>DVLP DNVR 2017, 2018, 2019</p>
            <p className='text-lg'>
              A 2 day, in-person, multi-track development and design conference
            </p>
          </li>
        </ul>
      </div>
    </Card>
  )
}

export default EducationCard
