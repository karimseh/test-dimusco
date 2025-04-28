import clsx from 'clsx';
import Link from 'next/link';

interface BlockProps {
  linkTitle: string;
  underline?: boolean;
  link?: string;
  extraTitle?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}
export default function Block({
  linkTitle,
  link,
  extraTitle,
  description,
  className,
  children,
}: BlockProps) {
  return (
    <div
      className={clsx(
        'rounded-lg p-6  outline flex flex-col items-center justify-start',
        className
      )}
    >
      <h2 className=" text-fluid-lg font-bold mb-2">
        {link ? (
          <Link href={link} className="text-[var(--primary)] underline ">
            {linkTitle}
          </Link>
        ) : (
          <span className="text-[var(--primary)] ">{linkTitle}</span>
        )}

        {extraTitle && <span>{` ${extraTitle}`}</span>}
      </h2>

      {description && <p className="mb-6 text-center">{description}</p>}

      {children}
    </div>
  );
}
