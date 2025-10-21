'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Initialize analytics or tracking here if needed
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="relative rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-xl shadow-2xl shadow-foreground/10">
              {/* Glassmorphism gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent rounded-2xl pointer-events-none" />

              <div className="relative p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-foreground/5 rounded-xl backdrop-blur-sm">
                      <Cookie className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                      Cookie & Privacy Notice
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                      We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.{' '}
                      <Link
                        href="/privacy-policy"
                        className="underline hover:text-foreground transition-colors"
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 w-full sm:w-auto">
                    <Button
                      onClick={declineCookies}
                      variant="outline"
                      className="flex-1 sm:flex-none border-foreground/10 hover:bg-foreground/5"
                    >
                      Decline
                    </Button>
                    <Button
                      onClick={acceptCookies}
                      className="flex-1 sm:flex-none bg-foreground text-background hover:bg-foreground/90"
                    >
                      Accept All
                    </Button>
                  </div>

                  {/* Close button for mobile */}
                  <button
                    onClick={declineCookies}
                    className="absolute top-4 right-4 sm:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-foreground/5 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
