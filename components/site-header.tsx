import { siteConfig } from '@/config/site';
import { MainNav } from './main-nav';

export function SiteHeader() {
  return (
    <header className="bg-black">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
}
