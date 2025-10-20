import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InteractiveIconProps {
  Icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: {
    container: 'w-12 h-12',
    icon: 'w-6 h-6',
  },
  md: {
    container: 'w-16 h-16',
    icon: 'w-8 h-8',
  },
  lg: {
    container: 'w-20 h-20',
    icon: 'w-10 h-10',
  },
};

export function InteractiveIcon({ Icon, size = 'md', className }: InteractiveIconProps) {
  return (
    <div
      className={cn(
        'group relative rounded-full flex items-center justify-center',
        'bg-foreground/[0.03] dark:bg-foreground/[0.05]',
        'border border-foreground/[0.06] dark:border-foreground/[0.08]',
        'transition-all duration-500 ease-out',
        'hover:bg-foreground/[0.06] dark:hover:bg-foreground/[0.08]',
        'hover:border-foreground/[0.12] dark:hover:border-foreground/[0.15]',
        'hover:scale-105',
        'hover:shadow-lg hover:shadow-foreground/5',
        sizeClasses[size].container,
        className
      )}
    >
      {/* Animated glow effect on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-foreground/[0.03] to-transparent" />

      {/* Icon with animation */}
      <Icon
        className={cn(
          'relative z-10 text-foreground/70 dark:text-foreground/80',
          'transition-all duration-500 ease-out',
          'group-hover:text-foreground dark:group-hover:text-foreground',
          'group-hover:scale-110',
          sizeClasses[size].icon
        )}
      />
    </div>
  );
}
