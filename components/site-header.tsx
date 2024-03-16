import { siteConfig } from '@/config/site';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-black">
      <div className="container md:flex h-[60px] md:h-[70px] items-center sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        {/* <MobileNav items={siteConfig.mainNav} /> */}
      </div>
    </header>
  );
}
