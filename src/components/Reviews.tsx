import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Александр К.',
      avatar: '/placeholder.svg',
      rating: 5,
      text: 'Открыл уже больше 50 кейсов, выпало несколько крутых скинов! Поддержка отвечает быстро, всё честно и прозрачно.',
      date: '2 дня назад',
      game: 'CS:GO',
    },
    {
      id: 2,
      name: 'Мария Л.',
      avatar: '/placeholder.svg',
      rating: 5,
      text: 'Лучший сервис для открытия кейсов Dota 2! Интерфейс понятный, предметы приходят моментально. Всем рекомендую!',
      date: '5 дней назад',
      game: 'Dota 2',
    },
    {
      id: 3,
      name: 'Дмитрий В.',
      avatar: '/placeholder.svg',
      rating: 4,
      text: 'Отличная платформа, широкий выбор кейсов. Один раз была задержка с доставкой предмета, но поддержка быстро всё решила.',
      date: '1 неделю назад',
      game: 'CS:GO',
    },
    {
      id: 4,
      name: 'Елена С.',
      avatar: '/placeholder.svg',
      rating: 5,
      text: 'Открыла свой первый легендарный предмет! Не ожидала такой удачи. Спасибо CaseDrop за эмоции!',
      date: '2 недели назад',
      game: 'Dota 2',
    },
    {
      id: 5,
      name: 'Игорь М.',
      avatar: '/placeholder.svg',
      rating: 5,
      text: 'Пользуюсь уже полгода, всё устраивает. Цены адекватные, акции регулярные. Рекомендую друзьям!',
      date: '3 недели назад',
      game: 'CS:GO',
    },
    {
      id: 6,
      name: 'Анна Р.',
      avatar: '/placeholder.svg',
      rating: 5,
      text: 'Самый удобный сайт для кейсов. Фильтры работают отлично, легко найти нужный кейс. Буду открывать ещё!',
      date: '1 месяц назад',
      game: 'Dota 2',
    },
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Отзывы игроков
          </h2>
          <p className="text-lg text-muted-foreground">
            Более 10 000 довольных клиентов уже оценили наш сервис
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-primary">4.9</div>
            <div className="mb-2 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  name="Star"
                  className={`h-5 w-5 ${star <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Средняя оценка</p>
          </div>

          <div className="h-16 w-px bg-border" />

          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-secondary">12K+</div>
            <p className="text-sm text-muted-foreground">Отзывов</p>
          </div>

          <div className="h-16 w-px bg-border" />

          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-accent">98%</div>
            <p className="text-sm text-muted-foreground">Рекомендуют</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {review.game}
                  </div>
                </div>

                <div className="mb-3 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name="Star"
                      className={`h-4 w-4 ${star <= review.rating ? 'fill-primary text-primary' : 'text-muted'}`}
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
