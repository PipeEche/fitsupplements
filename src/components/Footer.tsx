import { Dumbbell, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Marca */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl gradient-hero text-white">
                <Dumbbell className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">FitSupplements</span>
            </Link>
            <p className="text-background/80 mb-6 max-w-md">
              Tu tienda confiable de suplementos deportivos. Productos de calidad premium 
              para ayudarte a alcanzar tus objetivos fitness.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@fitsupplements.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+569 918273645</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Av Sport, Rancagua</span>
              </div>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/categoria/proteina" className="hover:text-background transition-smooth">
                  Proteínas
                </Link>
              </li>
              <li>
                <Link to="/categoria/creatina" className="hover:text-background transition-smooth">
                  Creatina
                </Link>
              </li>
              <li>
                <Link to="/categoria/pre-entreno" className="hover:text-background transition-smooth">
                  Pre Entreno
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Información</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-smooth">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-smooth">
                  Política de Envío
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-smooth">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-smooth">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2025 FitSupplements. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;