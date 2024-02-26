import Image from 'next/image';
import Link from 'next/link';

import { NavItem } from '@/types/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <>
      {items?.length ? (
        <nav className="w-full flex items-center">
          <Link href="/">
            <img
              src="/logo-full.svg"
              alt="Sho Coffee & Bar"
              className="h-[100px] w-[100px]"
            />
          </Link>
          <ul className="list-none sm:flex hidden justify-center items-center flex-1 gap-24">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      'flex items-center text-xl font-bold text-white hover:text-[#888888] transition-all duration-300 ease-in hover:bg-[#252525] p-3',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                  >
                    {item.title.toUpperCase()}
                  </Link>
                )
            )}
          </ul>
        </nav>
      ) : null}
    </>
  );
}
