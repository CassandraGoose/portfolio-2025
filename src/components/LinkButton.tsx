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
      className={`border-b-2 border-dotted p-2 hover:bg-purple-300 ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  )
}

export default LinkButton
