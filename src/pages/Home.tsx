import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import proteinHero from '@/assets/protein-hero.png';
import creatineHero from '@/assets/creatina-hero.png';
import preworkoutHero from '@/assets/pre-hero.png';

const Home = () => {
  const categoryImages = {
    'proteina': proteinHero,
    'creatina': creatineHero,
    'pre-entreno': preworkoutHero,
  };

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              🎯 Los mejores suplementos deportivos
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce-in">
              Eleva tu{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Rendimiento
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Descubre los mejores suplementos para maximizar tus resultados.
              Proteínas, creatinas y pre-entrenos de calidad premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg"   className="text-xl font-bold bg-black shadow-glow transform transition-transform duration-200 hover:scale-105">
                Explorar Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-xl font-bold border-white text-black transform transition-transform duration-200 hover:scale-105"
              >
                Ver Ofertas Especiales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestras Categorías</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuentra exactamente lo que necesitas para llevar tu entrenamiento al siguiente nivel
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/categoria/${category.id}`}
                className="category-card group"
              >
                <div className="relative h-80 overflow-hidden rounded-2xl">
                  <img
                    src={categoryImages[category.id as keyof typeof categoryImages]}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/90 mb-4">{category.description}</p>
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30"
                    >
                      Ver Productos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              ⭐ Productos Destacados
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Los Más Vendidos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estos son los productos favoritos de nuestros clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-energy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Entrenamiento?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Únete a miles de atletas que ya confían en nuestros productos para alcanzar sus objetivos
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;