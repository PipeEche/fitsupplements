import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';

interface FlavorModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onSelectFlavor: (flavor: string) => void;
}

const FlavorModal = ({ isOpen, onClose, product, onSelectFlavor }: FlavorModalProps) => {
  if (!isOpen || !product.flavors) return null;

  const flavorEmojis: Record<string, string> = {
    chocolate: '🍫',
    vainilla: '🌟',
    frutilla: '🍓',
    cookies: '🍪',
  };

  const flavorDescriptions: Record<string, string> = {
    chocolate: 'Rico sabor a chocolate intenso',
    vainilla: 'Suave y cremosa vainilla clásica',
    frutilla: 'Refrescante sabor a frutilla natural',
    cookies: 'Delicioso sabor a galletas con crema',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-background rounded-2xl shadow-2xl p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Elige tu sabor</h2>
            <p className="text-muted-foreground text-sm mt-1">
              {product.name}
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Product Image */}
        <div className="text-center mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-xl mx-auto shadow-card"
          />
          <Badge className="mt-3 bg-primary text-primary-foreground">
            ${product.price}
          </Badge>
        </div>

        {/* Flavor Options */}
        <div className="space-y-3 mb-6">
          <h3 className="font-medium text-center">Sabores disponibles:</h3>
          <div className="grid grid-cols-1 gap-2">
            {product.flavors.map((flavor) => (
              <Button
                key={flavor}
                variant="outline"
                className="justify-start p-4 h-auto hover:bg-primary/5 hover:border-primary transition-smooth"
                onClick={() => onSelectFlavor(flavor)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{flavorEmojis[flavor] || '🥤'}</span>
                  <div className="text-left">
                    <div className="font-medium capitalize">{flavor}</div>
                    <div className="text-sm text-muted-foreground">
                      {flavorDescriptions[flavor] || 'Sabor delicioso'}
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <Button variant="outline" onClick={onClose} className="w-full">
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlavorModal;