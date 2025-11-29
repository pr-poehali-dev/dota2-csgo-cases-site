import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import CaseRoulette from './CaseRoulette';
import Icon from '@/components/ui/icon';

interface CaseItem {
  id: string;
  name: string;
  image: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  price: number;
}

interface CaseOpenDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  caseName: string;
  casePrice: number;
  caseImage: string;
  items: CaseItem[];
}

const CaseOpenDialog = ({
  open,
  onOpenChange,
  caseName,
  casePrice,
  caseImage,
  items,
}: CaseOpenDialogProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [wonItem, setWonItem] = useState<CaseItem | null>(null);
  const [balance] = useState(10000);

  const handleOpen = () => {
    setIsSpinning(true);
    setWonItem(null);
  };

  const handleComplete = (item: CaseItem) => {
    setWonItem(item);
  };

  const handleClose = () => {
    setIsSpinning(false);
    setWonItem(null);
    onOpenChange(false);
  };

  const handleOpenAnother = () => {
    setIsSpinning(true);
    setWonItem(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <img src={caseImage} alt={caseName} className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{caseName}</h3>
                <p className="text-sm text-muted-foreground">Цена открытия: {casePrice} ₽</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Ваш баланс:</p>
              <p className="text-lg font-bold text-primary">{balance} ₽</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {!isSpinning && !wonItem && (
            <div className="rounded-lg border border-border/50 bg-card/50 p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-2xl bg-primary/30" />
                  <div className="relative rounded-2xl border-4 border-primary/50 bg-gradient-to-br from-primary/20 to-transparent p-8">
                    <img
                      src={caseImage}
                      alt={caseName}
                      className="h-32 w-32 object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold">Готовы открыть кейс?</h3>
              <p className="mb-6 text-muted-foreground">
                Нажмите кнопку ниже, чтобы начать открытие
              </p>
              <Button
                size="lg"
                onClick={handleOpen}
                disabled={balance < casePrice}
                className="gap-2"
              >
                <Icon name="Zap" className="h-5 w-5" />
                Открыть за {casePrice} ₽
              </Button>
              {balance < casePrice && (
                <p className="mt-3 text-sm text-destructive">
                  Недостаточно средств на балансе
                </p>
              )}
            </div>
          )}

          {(isSpinning || wonItem) && (
            <div className="min-h-[300px] rounded-lg border border-border/50 bg-card/50 p-6">
              <CaseRoulette
                items={items}
                isSpinning={isSpinning}
                onComplete={handleComplete}
              />
            </div>
          )}

          {wonItem && (
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleClose}
                className="flex-1 gap-2"
              >
                <Icon name="X" className="h-4 w-4" />
                Закрыть
              </Button>
              <Button
                onClick={handleOpenAnother}
                disabled={balance < casePrice}
                className="flex-1 gap-2"
              >
                <Icon name="RotateCw" className="h-4 w-4" />
                Открыть ещё ({casePrice} ₽)
              </Button>
              <Button variant="secondary" className="flex-1 gap-2">
                <Icon name="Share2" className="h-4 w-4" />
                Поделиться
              </Button>
            </div>
          )}

          <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
            <h4 className="mb-3 font-semibold">Возможные предметы:</h4>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-square rounded-lg border border-border/50 bg-card/50 p-2 transition-all hover:border-primary/50 hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/95 opacity-0 transition-opacity group-hover:opacity-100 rounded-lg p-1">
                    <p className="text-xs font-medium text-center line-clamp-2">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseOpenDialog;
