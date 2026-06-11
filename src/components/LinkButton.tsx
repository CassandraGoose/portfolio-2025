import type { ReactNode } from 'react'

interface LinkButtonProps {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
}

function LinkButton({ href, children, external = false, className = "" }: LinkButtonProps) {
  return (
    <a
      href={href}
      className={`px-4 border border-solid border-black flex justify-center items-center shadow-lg hover:bg-purple-300 ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  )
}

export default LinkButton
