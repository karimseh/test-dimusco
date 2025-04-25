import Link from 'next/link';
import LogoIcon from '../../assets/icons/logo.svg';
import UserIcon from '../../assets/icons/user.svg';

export function Header() {
  return (
    <header className=" bg-black container m-auto flex items-center justify-between gap-2 p-6  shadow-md">
      <div className="flex-1">
        <div className="w-fit">
          <Link href="/">
            <LogoIcon className="translate-y-[-6%]" />
          </Link>
        </div>
      </div>

      <nav className="flex-4">
        <ul className="flex gap-4">
          <li>
            <Link href="/contact" className="text-fluid-sm">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <Link href="https://cloud.dimusco.com" aria-label="Log in">
        <UserIcon />
      </Link>
    </header>
  );
}
