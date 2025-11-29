import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Все транзакции защищены. Гарантируем честность и прозрачность каждого открытия.',
    },
    {
      icon: 'Zap',
      title: 'Быстрая доставка',
      description: 'Мгновенное получение предметов на ваш аккаунт Steam сразу после открытия.',
    },
    {
      icon: 'Users',
      title: 'Сообщество',
      description: 'Более 50 000 активных игроков доверяют нам свои игровые достижения.',
    },
    {
      icon: 'HeartHandshake',
      title: 'Поддержка 24/7',
      description: 'Наша команда всегда на связи, чтобы помочь вам в любое время суток.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            О проекте
          </h2>
          <p className="text-lg text-muted-foreground">
            CaseDrop — это премиальная платформа для открытия игровых кейсов. 
            Мы создали удобный сервис, где каждый игрок может найти кейсы своей мечты 
            и получить легендарные предметы с гарантией честности.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon name={feature.icon} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-border/50 bg-gradient-to-br from-primary/10 to-transparent p-8 text-center">
            <div className="mb-3 text-4xl font-bold text-primary">3+</div>
            <p className="text-sm text-muted-foreground">Года на рынке</p>
          </div>
          
          <div className="rounded-lg border border-border/50 bg-gradient-to-br from-secondary/10 to-transparent p-8 text-center">
            <div className="mb-3 text-4xl font-bold text-secondary">500K+</div>
            <p className="text-sm text-muted-foreground">Открытых кейсов</p>
          </div>
          
          <div className="rounded-lg border border-border/50 bg-gradient-to-br from-accent/10 to-transparent p-8 text-center">
            <div className="mb-3 text-4xl font-bold text-accent">99.9%</div>
            <p className="text-sm text-muted-foreground">Довольных клиентов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
