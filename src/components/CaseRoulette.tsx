import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

interface RouletteItem {
  id: string;
  name: string;
  image: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface CaseRouletteProps {
  items: RouletteItem[];
  onComplete?: (item: RouletteItem) => void;
  isSpinning: boolean;
}

const CaseRoulette = ({ items, onComplete, isSpinning }: CaseRouletteProps) => {
  const [offset, setOffset] = useState(0);
  const [wonItem, setWonItem] = useState<RouletteItem | null>(null);

  const rarityColors = {
    common: 'bg-muted border-muted-foreground/30',
    rare: 'bg-blue-500/20 border-blue-400/50',
    epic: 'bg-purple-500/20 border-purple-400/50',
    legendary: 'bg-amber-500/20 border-amber-400/50',
  };

  const extendedItems = [...items, ...items, ...items, ...items, ...items];

  useEffect(() => {
    if (isSpinning) {
      const winningIndex = Math.floor(Math.random() * items.length);
      const targetItem = items[winningIndex];
      
      const itemWidth = 180;
      const centerOffset = (window.innerWidth / 2) - (itemWidth / 2);
      const finalPosition = -(items.length * 2 * itemWidth + winningIndex * itemWidth - centerOffset);
      
      setOffset(0);
      
      setTimeout(() => {
        setOffset(finalPosition);
      }, 50);

      setTimeout(() => {
        setWonItem(targetItem);
        if (onComplete) {
          onComplete(targetItem);
        }
      }, 5000);
    } else {
      setOffset(0);
      setWonItem(null);
    }
  }, [isSpinning, items, onComplete]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-1/2 top-0 z-10 h-full w-1 -translate-x-1/2 bg-primary shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
      
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-[0_0_30px_rgba(139,92,246,0.8)]">
          <div className="h-3 w-3 rounded-full bg-background" />
        </div>
      </div>

      <div
        className="flex gap-3 py-8 transition-transform"
        style={{
          transform: `translateX(${offset}px)`,
          transitionDuration: isSpinning ? '5s' : '0s',
          transitionTimingFunction: 'cubic-bezier(0.17, 0.67, 0.12, 0.99)',
        }}
      >
        {extendedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`flex h-40 w-40 flex-shrink-0 flex-col items-center justify-center rounded-lg border-2 p-3 ${
              rarityColors[item.rarity]
            }`}
          >
            <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-lg bg-background/50">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-contain"
              />
            </div>
            <p className="line-clamp-2 text-center text-xs font-medium">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />

      {wonItem && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur">
          <div className="animate-scale-in text-center">
            <Badge
              className={`mb-4 ${rarityColors[wonItem.rarity]} border-2 px-4 py-1 text-sm`}
            >
              {wonItem.rarity === 'common' && 'Обычный'}
              {wonItem.rarity === 'rare' && 'Редкий'}
              {wonItem.rarity === 'epic' && 'Эпический'}
              {wonItem.rarity === 'legendary' && 'Легендарный'}
            </Badge>
            <div className="mb-4 flex justify-center">
              <div className={`rounded-2xl border-4 p-8 ${rarityColors[wonItem.rarity]}`}>
                <img
                  src={wonItem.image}
                  alt={wonItem.name}
                  className="h-32 w-32 object-contain"
                />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold">{wonItem.name}</h3>
            <p className="text-lg text-primary">Поздравляем!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseRoulette;
