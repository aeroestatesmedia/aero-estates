'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SERVICES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle className="text-left text-foreground">
              Aero Estates
            </SheetTitle>
            <ThemeToggle />
          </div>
        </SheetHeader>

        <div className="flex flex-col space-y-4 mt-8">
          <SheetClose asChild>
            <Link
              href="/"
              className={cn(
                'flex items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary',
                pathname === '/' && 'text-primary'
              )}
            >
              Home
            </Link>
          </SheetClose>

          <div className="space-y-2">
            <div className="text-lg font-medium text-muted-foreground">
              Services
            </div>
            <div className="pl-4 space-y-2">
              {SERVICES.map((service) => (
                <SheetClose asChild key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={cn(
                      'flex items-center justify-between py-2 text-sm transition-colors hover:text-primary',
                      pathname === `/services/${service.slug}` && 'text-primary font-medium'
                    )}
                  >
                    {service.name}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>

          <SheetClose asChild>
            <Link
              href="/about"
              className={cn(
                'flex items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary',
                pathname === '/about' && 'text-primary'
              )}
            >
              About
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/contact"
              className={cn(
                'flex items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary',
                pathname === '/contact' && 'text-primary'
              )}
            >
              Contact
            </Link>
          </SheetClose>

          <div className="pt-4">
            <SheetClose asChild>
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
