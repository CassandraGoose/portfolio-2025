interface SkillListProps {
  skills: string[]
  title: string
}

function SkillList({ skills, title }: SkillListProps) {
  return (
    <li className='p-8 break-inside-avoid'>
      <p className='font-bold my-2'>{title.toUpperCase()}</p>
      <hr className='border-black' />
      <ul className='my-2'>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </li>
  )
}

export default SkillList
