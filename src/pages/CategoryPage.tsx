import { useParams } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import proteinHero from '@/assets/protein-hero.png';
import creatineHero from '@/assets/creatina-hero.png';
import preworkoutHero from '@/assets/pre-hero.png';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = categories.find(cat => cat.id === categoryId);
  const categoryProducts = products.filter(product => product.category === categoryId);

  const categoryImages = {
    'proteina': proteinHero,
    'creatina': creatineHero,
    'pre-entreno': preworkoutHero,
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Categoría no encontrada</h1>
          <Link to="/">
            <Button>Volver al Inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Inicio
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Category Hero */}
      <section className="relative h-80 overflow-hidden">
        <img
          src={categoryImages[categoryId as keyof typeof categoryImages]}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:text-primary-glow transition-smooth">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">{category.icon}</div>
              <div>
                <h1 className="text-5xl font-bold mb-2">{category.name}</h1>
                <p className="text-xl text-white/90">{category.description}</p>
              </div>
            </div>
            
            <Badge className="bg-white/20 text-white">
              {categoryProducts.length} productos disponibles
            </Badge>
          </div>
        </div>
      </section>

      {/* Seccion Productos*/}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        

          {/* Products Grid */}
          {categoryProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">
                No hay productos disponibles
              </h3>
              <p className="text-muted-foreground mb-6">
                Pronto tendremos más productos en esta categoría
              </p>
              <Link to="/">
                <Button>Explorar Otras Categorías</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Por qué elegir {category.name}?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categoryId === 'proteina' && [
              {
                icon: '💪',
                title: 'Desarrollo Muscular',
                description: 'Acelera el crecimiento y reparación muscular'
              },
              {
                icon: '⚡',
                title: 'Recuperación Rápida',
                description: 'Reduce el tiempo de recuperación entre entrenamientos'
              },
              {
                icon: '🎯',
                title: 'Alto Valor Biológico',
                description: 'Máxima absorción y utilización por el organismo'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
            
            {categoryId === 'creatina' && [
              {
                icon: '🔋',
                title: 'Mayor Fuerza',
                description: 'Incrementa significativamente tu fuerza máxima'
              },
              {
                icon: '⚡',
                title: 'Más Potencia',
                description: 'Mejora tu explosividad y potencia muscular'
              },
              {
                icon: '💪',
                title: 'Volumen Muscular',
                description: 'Aumenta el tamaño y la plenitud muscular'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
            
            {categoryId === 'pre-entreno' && [
              {
                icon: '🔥',
                title: 'Energía Explosiva',
                description: 'Energía intensa para entrenamientos máximos'
              },
              {
                icon: '🧠',
                title: 'Enfoque Mental',
                description: 'Mejora la concentración y conexión mente-músculo'
              },
              {
                icon: '💥',
                title: 'Bombeo Muscular',
                description: 'Aumenta la vascularización y el bombeo'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;