import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import FlavorModal from './FlavorModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showFlavorModal, setShowFlavorModal] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product.flavors && product.flavors.length > 0) {
      setShowFlavorModal(true);
    } else {
      addToCart({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      });
    }
  };

  const handleFlavorSelection = (flavor: string) => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      flavor,
    });
    setShowFlavorModal(false);
  };

  const categoryColors = {
    proteina: 'bg-blue-500',
    creatina: 'bg-green-500',
    'pre-entreno': 'bg-orange-500',
  };

  return (
    <>
      <div className="product-card group">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted rounded-t-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
          />
          
          {/* Category Badge */}
          <Badge 
            className={`absolute top-3 left-3 text-white ${categoryColors[product.category]}`}
          >
            {product.category === 'pre-entreno' ? 'Pre Entreno' : 
             product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Badge>
          
          {/* Brand */}
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md">
            <span className="text-xs font-medium">{product.brand}</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-smooth">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mt-1">
              {product.description}
            </p>
          </div>

          {/* Weight & Rating */}
          <div className="flex items-center justify-between">
            {product.weight && (
              <Badge variant="outline" className="text-xs">
                {product.weight}
              </Badge>
            )}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
            </div>
          </div>

          {/* Flavors */}
          {product.flavors && (
            <div className="flex flex-wrap gap-1">
              {product.flavors.slice(0, 3).map((flavor) => (
                <Badge key={flavor} variant="secondary" className="text-xs">
                  {flavor}
                </Badge>
              ))}
              {product.flavors.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{product.flavors.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Price & Actions */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div>
              <span className="text-2xl font-bold text-primary">
                ${product.price}
              </span>
              <span className="text-muted-foreground text-sm block">
                Precio por unidad
              </span>
            </div>
            
            <div className="flex gap-2">
              <Link to={`/producto/${product.id}`}>
                <Button variant="outline" size="sm" className="p-2">
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
              <Button 
                size="sm"
                onClick={handleAddToCart}
                className="gradient-hero text-white hover:opacity-90"
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Agregar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FlavorModal
        isOpen={showFlavorModal}
        onClose={() => setShowFlavorModal(false)}
        product={product}
        onSelectFlavor={handleFlavorSelection}
      />
    </>
  );
};

export default ProductCard;