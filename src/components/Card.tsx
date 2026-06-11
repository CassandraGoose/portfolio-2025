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
    <div className='border border-black mx-4 mt-16 bg-white'>
      <div className='border-b border-black flex'>
        <button
          onClick={() => setOpen(!open)}
          className='border-r border-solid border-black p-1 flex justify-center w-9 h-9 cursor-pointer'
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
