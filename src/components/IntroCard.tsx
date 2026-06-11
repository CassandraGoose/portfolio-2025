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
      <p className='m-4 mb-5'>application security / software development / web</p>
    </Card>
  )
}

export default IntroCard
