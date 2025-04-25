import clsx from 'clsx';
import Link from 'next/link';

interface BlockProps {
  linkTitle: string;
  extraTitle?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}
export default function Block({
  linkTitle,
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
        <Link href={'/'} className=" text-[var(--primary)]  underline">
          {linkTitle}
        </Link>
        {extraTitle && <span>{` ${extraTitle}`}</span>}
      </h2>

      {description && <p className="mb-6 text-center">{description}</p>}

      {children}
    </div>
  );
}
