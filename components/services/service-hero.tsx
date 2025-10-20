import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function ServiceHero({ title, description, Icon }: ServiceHeroProps) {
  return (
    <section className="pt-20 py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="w-16 h-16 flex items-center justify-center bg-foreground/5">
            <Icon className="w-8 h-8 text-foreground" />
          </div>
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
