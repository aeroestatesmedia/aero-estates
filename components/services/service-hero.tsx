import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function ServiceHero({ title, description, Icon }: ServiceHeroProps) {
  return (
    <section className="pt-20 py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-8">
          <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center">
            <Icon className="w-8 h-8 text-foreground" />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
