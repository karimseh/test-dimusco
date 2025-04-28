import { ComponentPropsWithoutRef, ReactNode } from 'react';
import NoteIcon from '../../../../assets/icons/note.svg';
import clsx from 'clsx';
import Link from 'next/link';

interface BlockItemProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  icon?: ReactNode;
  link?: string;
}
export default function BlockItem({
  title,
  icon = <NoteIcon aria-hidden="true" />,
  link,
  className,
}: BlockItemProps) {
  return (
    <div className={clsx('flex items-center justify-between gap-2 ', className)}>
      <div className="bg-[var(--primary)] rounded-full p-2">{icon}</div>
      <div className="flex-1">{link ? <Link href={link}>{title}</Link> : <p>{title}</p>}</div>
    </div>
  );
}
