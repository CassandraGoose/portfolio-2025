import type { ReactNode } from 'react'

interface ListItemCardProps {
  title: string;
  subtitle: string;
  children?: ReactNode
}

function EducationCard({ title, subtitle, children} : ListItemCardProps) {
  return (
    <li className="mb-4 bg-neutral-300 p-4 flex flex-col gap-4">
      <p className="font-bold">{title}</p>
      <hr />
      <p className="italic">{subtitle}</p>
      <p>
        {children}
      </p>
    </li>
  );
}

export default EducationCard;
