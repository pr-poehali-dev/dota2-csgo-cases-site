import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CaseCardProps {
  id: string;
  name: string;
  game: 'dota2' | 'csgo';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  price: number;
  image: string;
  popular?: boolean;
  isNew?: boolean;
}

const CaseCard = ({ name, game, rarity, price, image, popular, isNew }: CaseCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const rarityColors = {
    common: 'bg-muted text-muted-foreground',
    rare: 'bg-blue-500/10 text-blue-400 border-blue-400/30',
    epic: 'bg-purple-500/10 text-purple-400 border-purple-400/30',
    legendary: 'bg-amber-500/10 text-amber-400 border-amber-400/30',
  };

  const rarityLabels = {
    common: 'Обычный',
    rare: 'Редкий',
    epic: 'Эпический',
    legendary: 'Легендарный',
  };

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute right-3 top-3 z-10 flex gap-2">
        {isNew && (
          <Badge variant="secondary" className="gap-1">
            <Icon name="Sparkles" className="h-3 w-3" />
            Новинка
          </Badge>
        )}
        {popular && (
          <Badge className="gap-1 bg-secondary">
            <Icon name="TrendingUp" className="h-3 w-3" />
            Топ
          </Badge>
        )}
      </div>

      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute left-3 top-3 z-10 rounded-full bg-background/80 p-2 backdrop-blur transition-all hover:bg-background hover:scale-110"
      >
        <Icon
          name={isFavorite ? 'Heart' : 'Heart'}
          className={`h-4 w-4 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`}
        />
      </button>

      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-background">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {game === 'dota2' ? 'Dota 2' : 'CS:GO'}
            </Badge>
            <Badge variant="outline" className={`text-xs border ${rarityColors[rarity]}`}>
              {rarityLabels[rarity]}
            </Badge>
          </div>

          <h3 className="mb-3 line-clamp-2 text-lg font-semibold group-hover:text-primary transition-colors">
            {name}
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-primary">{price} ₽</p>
            </div>
            <Icon name="ChevronRight" className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2 p-4 pt-0">
        <Button variant="outline" size="sm" className="gap-2">
          <Icon name="GitCompare" className="h-4 w-4" />
          Сравнить
        </Button>
        <Button size="sm" className="gap-2">
          <Icon name="Eye" className="h-4 w-4" />
          Открыть
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseCard;
