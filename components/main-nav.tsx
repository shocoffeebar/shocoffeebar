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
    <div className="hidden gap-6 md:flex md:gap-20">
      {/* <Link href="/">
        <Image
          src={'/logo.png'}
          alt={siteConfig.name}
          width={200}
          height={50}
        />
      </Link> */}
      <div className="text-xl text-white flex items-center">LOGO</div>
      {items?.length ? (
        <nav className="flex gap-24">
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
        </nav>
      ) : null}
    </div>
  );
}
