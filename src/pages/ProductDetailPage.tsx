import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import FlavorModal from '@/components/FlavorModal';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [showFlavorModal, setShowFlavorModal] = useState(false);
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <Link to="/">
            <Button>Volver al Inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

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
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Inicio
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link 
                to={`/categoria/${product.category}`} 
                className="text-muted-foreground hover:text-primary"
              >
                {product.category === 'pre-entreno' ? 'Pre Entreno' : 
                 product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to={`/categoria/${product.category}`}
              className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-smooth"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a {product.category === 'pre-entreno' ? 'Pre Entreno' : 
                       product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-muted/50 to-muted rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={`text-white ${categoryColors[product.category]}`}>
                      {product.category === 'pre-entreno' ? 'Pre Entreno' : 
                       product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </Badge>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-medium text-primary">{product.brand}</span>
                  </div>
                  
                  <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(4.8 • 234 reseñas)</span>
                  </div>
                </div>

                {/* Price & Weight */}
                <div className="bg-muted/50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-4xl font-bold text-primary">
                        ${product.price}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        por unidad
                      </span>
                    </div>
                    {product.weight && (
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        {product.weight}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-4">
                    ✅ Envío gratis en compras superiores a $50.000
                  </div>
                </div>

                {/* Flavors */}
                {product.flavors && (
                  <div>
                    <h3 className="font-semibold mb-3">Sabores disponibles:</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.flavors.map((flavor) => (
                        <Badge key={flavor} variant="secondary" className="capitalize">
                          {flavor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart */}
                <div className="space-y-4">
                  <Button 
                    onClick={handleAddToCart}
                    size="lg"
                    className="w-full gradient-hero text-white hover:opacity-90 text-lg py-6"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Agregar al Carrito
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <Info className="h-4 w-4 inline mr-1" />
                    Satisfacción garantizada o tu dinero de vuelta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="benefits" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="benefits">Beneficios</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredientes</TabsTrigger>
                <TabsTrigger value="instructions">Instrucciones</TabsTrigger>
              </TabsList>
              
              <TabsContent value="benefits" className="mt-8">
                <div className="bg-card p-8 rounded-2xl shadow-card">
                  <h3 className="text-2xl font-bold mb-6">Beneficios Principales</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-success flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ingredients" className="mt-8">
                <div className="bg-card p-8 rounded-2xl shadow-card">
                  <h3 className="text-2xl font-bold mb-6">Ingredientes</h3>
                  <p className="text-lg leading-relaxed">{product.ingredients}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="instructions" className="mt-8">
                <div className="bg-card p-8 rounded-2xl shadow-card">
                  <h3 className="text-2xl font-bold mb-6">Modo de Uso</h3>
                  <p className="text-lg leading-relaxed">{product.instructions}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
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

export default ProductDetailPage;