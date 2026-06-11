interface ListItemLinkProps {
  title: string
  date: string
  link: string
}

function ListItemLink({ title, date, link }: ListItemLinkProps) {
  return (
    <li className='ml-4 mb-4'>
      <a
        className='italic text-stone-500 hover:text-purple-400'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {title}
      </a>
      <p className='text-lg'>{date}</p>
    </li>
  )
}

export default ListItemLink
