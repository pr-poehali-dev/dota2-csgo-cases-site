import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Как работает открытие кейсов?',
      answer: 'Выберите понравившийся кейс из каталога, нажмите "Открыть", и система автоматически определит выпавший предмет. Все предметы мгновенно попадают в ваш инвентарь Steam.',
    },
    {
      question: 'Как я получу выигранные предметы?',
      answer: 'После открытия кейса предметы автоматически отправляются на ваш аккаунт Steam через trade-систему. Обычно это занимает от 30 секунд до 5 минут.',
    },
    {
      question: 'Можно ли вернуть деньги за кейс?',
      answer: 'К сожалению, после открытия кейса возврат средств невозможен. Но вы всегда можете продать полученные предметы на торговой площадке или обменять их.',
    },
    {
      question: 'Как работает система редкости?',
      answer: 'Каждый кейс содержит предметы разной редкости: Обычные (белые), Редкие (синие), Эпические (фиолетовые) и Легендарные (золотые). Чем выше редкость, тем ниже шанс выпадения, но выше ценность предмета.',
    },
    {
      question: 'Есть ли гарантии честности?',
      answer: 'Да! Мы используем проверяемую систему генерации случайных чисел. Каждое открытие записывается в блокчейн, и вы можете проверить честность результата через специальный инструмент на сайте.',
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем банковские карты (Visa, Mastercard, МИР), электронные кошельки (ЮMoney, QIWI), криптовалюту и оплату через Steam.',
    },
    {
      question: 'Могу ли я подарить кейс другу?',
      answer: 'Да, вы можете приобрести кейс и отправить его на аккаунт друга. Просто укажите его Steam ID при оформлении заказа.',
    },
    {
      question: 'Что делать, если предмет не пришёл?',
      answer: 'Обратитесь в нашу службу поддержки через чат на сайте или Telegram. Мы решим любую проблему в течение 15 минут.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Вопросы и ответы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на самые частые вопросы о работе сервиса
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-lg border border-border/50 bg-primary/5 p-6 text-center backdrop-blur">
            <h3 className="mb-2 text-lg font-semibold">Не нашли ответ?</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Напишите нам в поддержку, и мы поможем вам в течение нескольких минут
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Telegram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
