import Link from 'next/link';
import LogoIcon from '../../assets/icons/logo.svg';
export function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 shadow-md">
            <Link href="/">
                <LogoIcon  />
            </Link>

        </header>
    );
}