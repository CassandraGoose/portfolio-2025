import Card from './Card'

function IntroCard() {
  return (
    <Card
      nav={
        <p className='border-r border-solid border-black justify-center px-4 flex items-center'>
          INTRO
        </p>
      }
      context={
        <h1 className='m-4 font-bold text-4xl'>CASS</h1>
      }
    >
      <p className='m-4'>front end / full stack / web / community</p>
    </Card>
  )
}

export default IntroCard
