import { useState } from 'react';
import CaseCard from './CaseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  const mockCases = [
    {
      id: '1',
      name: 'Immortal Treasure I',
      game: 'dota2' as const,
      rarity: 'legendary' as const,
      price: 2499,
      image: '/placeholder.svg',
      popular: true,
      isNew: false,
    },
    {
      id: '2',
      name: 'Operation Riptide Case',
      game: 'csgo' as const,
      rarity: 'epic' as const,
      price: 1899,
      image: '/placeholder.svg',
      popular: true,
      isNew: true,
    },
    {
      id: '3',
      name: 'Treasure of the Crimson Witness',
      game: 'dota2' as const,
      rarity: 'legendary' as const,
      price: 3299,
      image: '/placeholder.svg',
      popular: false,
      isNew: true,
    },
    {
      id: '4',
      name: 'Clutch Case',
      game: 'csgo' as const,
      rarity: 'rare' as const,
      price: 999,
      image: '/placeholder.svg',
      popular: false,
      isNew: false,
    },
    {
      id: '5',
      name: 'Diretide 2023 Treasure',
      game: 'dota2' as const,
      rarity: 'epic' as const,
      price: 1599,
      image: '/placeholder.svg',
      popular: true,
      isNew: false,
    },
    {
      id: '6',
      name: 'Dreams & Nightmares Case',
      game: 'csgo' as const,
      rarity: 'rare' as const,
      price: 1299,
      image: '/placeholder.svg',
      popular: false,
      isNew: false,
    },
    {
      id: '7',
      name: 'Battle Pass Treasure',
      game: 'dota2' as const,
      rarity: 'epic' as const,
      price: 1799,
      image: '/placeholder.svg',
      popular: false,
      isNew: false,
    },
    {
      id: '8',
      name: 'Recoil Case',
      game: 'csgo' as const,
      rarity: 'legendary' as const,
      price: 2799,
      image: '/placeholder.svg',
      popular: true,
      isNew: true,
    },
  ];

  const filteredCases = mockCases.filter((caseItem) => {
    const matchesSearch = caseItem.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = selectedGame === 'all' || caseItem.game === selectedGame;
    const matchesRarity = selectedRarity === 'all' || caseItem.rarity === selectedRarity;
    return matchesSearch && matchesGame && matchesRarity;
  });

  const sortedCases = [...filteredCases].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'popular':
        return b.popular ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <section id="catalog" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Каталог кейсов
          </h2>
          <p className="text-lg text-muted-foreground">
            Найди свой идеальный кейс среди сотен вариантов
          </p>
        </div>

        <div className="mb-8 rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск кейсов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <Select value={selectedGame} onValueChange={setSelectedGame}>
              <SelectTrigger>
                <SelectValue placeholder="Игра" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все игры</SelectItem>
                <SelectItem value="dota2">Dota 2</SelectItem>
                <SelectItem value="csgo">CS:GO</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedRarity} onValueChange={setSelectedRarity}>
              <SelectTrigger>
                <SelectValue placeholder="Редкость" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все редкости</SelectItem>
                <SelectItem value="common">Обычный</SelectItem>
                <SelectItem value="rare">Редкий</SelectItem>
                <SelectItem value="epic">Эпический</SelectItem>
                <SelectItem value="legendary">Легендарный</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {selectedGame !== 'all' && (
              <Badge variant="secondary" className="gap-1">
                {selectedGame === 'dota2' ? 'Dota 2' : 'CS:GO'}
                <button onClick={() => setSelectedGame('all')}>
                  <Icon name="X" className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedRarity !== 'all' && (
              <Badge variant="secondary" className="gap-1">
                {selectedRarity === 'common' && 'Обычный'}
                {selectedRarity === 'rare' && 'Редкий'}
                {selectedRarity === 'epic' && 'Эпический'}
                {selectedRarity === 'legendary' && 'Легендарный'}
                <button onClick={() => setSelectedRarity('all')}>
                  <Icon name="X" className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {(selectedGame !== 'all' || selectedRarity !== 'all' || searchQuery) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedGame('all');
                  setSelectedRarity('all');
                  setSearchQuery('');
                }}
                className="gap-1"
              >
                <Icon name="X" className="h-3 w-3" />
                Сбросить всё
              </Button>
            )}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Найдено кейсов: <span className="font-semibold text-foreground">{sortedCases.length}</span>
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedCases.map((caseItem) => (
            <CaseCard key={caseItem.id} {...caseItem} />
          ))}
        </div>

        {sortedCases.length === 0 && (
          <div className="py-20 text-center">
            <Icon name="Package" className="mx-auto mb-4 h-16 w-16 text-muted-foreground/50" />
            <h3 className="mb-2 text-xl font-semibold">Кейсы не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры фильтрации</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
