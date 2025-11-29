import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Icon name="Box" className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CaseDrop</span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Премиальная платформа для открытия игровых кейсов Dota 2 и CS:GO
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Icon name="MessageCircle" className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Icon name="Mail" className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Icon name="Youtube" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Разделы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="transition-colors hover:text-primary">
                  Главная
                </a>
              </li>
              <li>
                <a href="#catalog" className="transition-colors hover:text-primary">
                  Каталог кейсов
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-primary">
                  О проекте
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-primary">
                  Вопросы и ответы
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition-colors hover:text-primary">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Информация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Правила сервиса
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Гарантии честности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Поддержка</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4" />
                support@casedrop.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MessageCircle" className="h-4 w-4" />
                @casedrop_support
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" className="h-4 w-4" />
                Онлайн 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 CaseDrop. Все права защищены.</p>
          <p className="mt-2">
            Данный сайт не связан с Valve Corporation. Все названия игр, логотипы и товарные знаки
            являются собственностью их владельцев.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
