import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
            <Icon name="Zap" className="h-4 w-4" />
            Более 500+ эксклюзивных кейсов
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Открой свой идеальный
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              кейс сегодня
            </span>
          </h1>
          
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Лучшие кейсы для Dota 2 и CS:GO в одном месте. Сравнивай, выбирай и получай легендарные предметы.
          </p>
          
          <div className="mx-auto mb-8 flex max-w-2xl gap-3">
            <div className="relative flex-1">
              <Icon name="Search" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск по названию кейса или предмету..."
                className="h-12 pl-10 pr-4"
              />
            </div>
            <Button size="lg" className="h-12 px-6">
              <Icon name="Search" className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="gap-2">
              <Icon name="Package" className="h-5 w-5" />
              Все кейсы
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="TrendingUp" className="h-5 w-5" />
              Популярное
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Sparkles" className="h-5 w-5" />
              Новинки
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border/50 bg-card/50 p-6 text-center backdrop-blur">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Icon name="Box" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">500+</h3>
            <p className="text-sm text-muted-foreground">Активных кейсов</p>
          </div>
          
          <div className="rounded-lg border border-border/50 bg-card/50 p-6 text-center backdrop-blur">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Icon name="Users" className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">50K+</h3>
            <p className="text-sm text-muted-foreground">Довольных игроков</p>
          </div>
          
          <div className="rounded-lg border border-border/50 bg-card/50 p-6 text-center backdrop-blur">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Icon name="Shield" className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">100%</h3>
            <p className="text-sm text-muted-foreground">Безопасность</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
