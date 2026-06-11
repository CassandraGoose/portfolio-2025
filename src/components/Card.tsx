import { useState, type ReactNode } from 'react'

interface CardProps {
  nav: ReactNode
  context?: ReactNode
  children?: ReactNode
  initialOpen?: boolean
}

function Card({ nav, context, children, initialOpen = true }: CardProps) {
  const [open, setOpen] = useState(initialOpen)

  return (
    <div className='border-black border-4 mx-4 mt-16 bg-white'>
      <div className='border-b-4 border-black flex justify-between'>
        <button
          onClick={() => setOpen(!open)}
          className='border-solid border-black border-r-4 font-bold p-1 flex justify-center w-9 h-9 cursor-pointer'
        >
          {open ? '−' : '+'}
        </button>
        {nav}
      </div>
      <div className={`collapsible-content${open ? ' open' : ''}`}>
        <div>
          {context && <div>{context}</div>}
          {children && <div>{children}</div>}
        </div>
      </div>
    </div>
  )
}

export default Card
