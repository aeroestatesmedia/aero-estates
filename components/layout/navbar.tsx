'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '@/lib/constants';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          !isScrolled && pathname === '/'
            ? 'bg-transparent backdrop-blur-none border-b border-transparent shadow-none'
            : 'bg-background/60 backdrop-blur-xl border-b border-foreground/10 shadow-lg shadow-foreground/5'
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              {mounted && (
                <Image
                  src={resolvedTheme === 'dark' ? '/logos/AE-dark.svg' : '/logos/AE-light.svg'}
                  alt="Aero Estates"
                  width={150}
                  height={40}
                  priority
                  className="h-8 lg:h-10 w-auto"
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className={cn(
                      'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                      !isScrolled && pathname === '/'
                        ? 'hover:bg-foreground/10 hover:backdrop-blur-xl focus:bg-foreground/10 focus:backdrop-blur-xl'
                        : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                      pathname === '/' && isScrolled && 'bg-accent text-accent-foreground'
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      !isScrolled && pathname === '/'
                        ? '[&]:bg-transparent [&]:hover:bg-foreground/10 [&]:hover:backdrop-blur-xl [&]:data-[state=open]:bg-foreground/10 [&]:data-[state=open]:backdrop-blur-xl'
                        : ''
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      !isScrolled && pathname === '/'
                        ? 'bg-background/30 backdrop-blur-xl'
                        : 'bg-background/95 backdrop-blur-md'
                    )}
                  >
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {SERVICES.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/services/${service.slug}`}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                              !isScrolled && pathname === '/'
                                ? 'hover:bg-foreground/10 focus:bg-foreground/10'
                                : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.brief}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className={cn(
                      'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                      !isScrolled && pathname === '/'
                        ? 'hover:bg-foreground/10 hover:backdrop-blur-xl focus:bg-foreground/10 focus:backdrop-blur-xl'
                        : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                      pathname === '/about' && 'bg-accent text-accent-foreground'
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className={cn(
                      'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                      !isScrolled && pathname === '/'
                        ? 'hover:bg-foreground/10 hover:backdrop-blur-xl focus:bg-foreground/10 focus:backdrop-blur-xl'
                        : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                      pathname === '/contact' && 'bg-accent text-accent-foreground'
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile: Theme Toggle & Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
