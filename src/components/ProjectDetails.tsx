import type { ReactNode } from 'react'

interface ProjectDetailsProps {
  title: string
  tech: string
  children?: ReactNode
}

function ProjectDetails({ title, tech, children }: ProjectDetailsProps) {
  return (
    <li className='my-16'>
      <p className='font-bold my-2'>{title}</p>
      <hr className='border-black' />
      <p className='italic flex my-2 text-lg'>{tech}</p>
      {children}
    </li>
  )
}

export default ProjectDetails
