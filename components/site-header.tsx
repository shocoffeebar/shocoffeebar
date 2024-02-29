import { siteConfig } from '@/config/site';
import { MainNav } from './main-nav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-black">
      <div className="container flex h-[70px] items-center sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
}
