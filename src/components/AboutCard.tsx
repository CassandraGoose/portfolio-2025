import Card from './Card'

function AboutCard() {
  return (
    <Card
      nav={
        <p className='border-r border-solid border-black justify-center px-4 flex items-center'>
          ABOUT
        </p>
      }
      context={<p className='m-4'>Hi, I'm Cass.</p>}
    >
      <div>
        <p className='m-4'>
          I'm a JavaScript developer with a knack for weaving education and code
          together. I enjoy working throughout the stack and have a particular
          love for creating front end applications. I believe that coding is a
          craft and I aim to deliver thoughtful, empathetic, and elegant code.
          When I'm not crafting code, you can find me running the DenverScript
          MeetUp, giving talks in the community, or with my dog.
        </p>
        <div className='flex pt-4 pb-8'>
          <a
            className='ml-4 px-4 border border-solid border-black flex justify-center items-center shadow-lg'
            href='https://github.com/CassandraGoose'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            className='mx-4 px-4 border border-solid border-black flex justify-center items-center shadow-lg'
            href='https://www.linkedin.com/in/cassandra-rt/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Card>
  )
}

export default AboutCard
