import { Product, Category } from '@/types';
import proteinHero from '@/assets/protein-hero.png';
import creatineHero from '@/assets/creatina-hero.png';
import preworkoutHero from '@/assets/pre-hero.png';
import wheyProtein from '@/assets/whey-protein.jpg';
import caseinProtein from '@/assets/casein-protein.webp';
import creatineMono from '@/assets/creatine-mono.webp';
import creatineHcl from '@/assets/creatine-hcl.jpg';
import preExtreme from '@/assets/pre-extreme.jpeg';
import prePump from '@/assets/pre-pump.webp';

export const categories: Category[] = [
  {
    id: 'proteina',
    name: 'Proteína',
    description: 'Desarrolla músculo y acelera tu recuperación',
    image: proteinHero,
    icon: '💪'
  },
  {
    id: 'creatina',
    name: 'Creatina',
    description: 'Maximiza tu fuerza y potencia',
    image: creatineHero,
    icon: '⚡'
  },
  {
    id: 'pre-entreno',
    name: 'Pre Entreno',
    description: 'Energía explosiva para tus entrenamientos',
    image: preworkoutHero,
    icon: '🔥'
  }
];

export const products: Product[] = [
  // Proteínas
  {
    id: 'whey-premium',
    name: 'Prostar Whey Protein',
    category: 'proteina',
    price: 50000,
    description: 'Prostar Whey es una mezcla de concentrado y aislado de proteína de suero de leche, con una elevada concentración de aminoácidos, los que contribuirán a la protección, recuperación y reconstrucción de las fibras musculares después de la práctica deportiva. Aporta 25g de proteína, 5g de carbohidratos y sólo 1g de grasa por porción.',
    image: wheyProtein,
    brand: 'Ultimate Nutrition',
    weight: '2kg',
    flavors: ['chocolate', 'vainilla', 'frutilla', 'cookies'],
    benefits: [
      'Desarrollo muscular',
      'Recuperación post-entreno',
      'Alto valor biológico',
      'Fácil digestión'
    ],
    ingredients: 'Concentrado de proteína de suero, cocoa, saborizantes naturales, stevia.',
    instructions: 'Mezclar 1 scoop (30g) con 200-250ml de agua o leche. Consumir post-entreno.'
  },
  {
    id: 'casein-night',
    name: 'Gold Standard 100% Whey',
    category: 'proteina',
    price: 65990,
    description: '100% GOLD ESTÁNDAR WHEY, por años elegida la mejor proteína y suplemento de EEUU, te ayudará a proteger y recuperar tus músculos después de practicar deportes ya que está compuesto con proteínas 100% suero de leche no aislado (24 g por porción), sólo 1 g de grasa y 2 g de carbohidratos. Posee una alta concentración de aminoácidos ramificados y glutamina. Se absorbe fácilmente por su fórmula con enzimas digestivas. 100% GOLD ESTÁNDAR WHEY viene en un presentación de 2 Lbs (909), 5 Lbs (2273g), en sabores de, Chocolate, Cookies, Frutilla, Vainilla.',
    image: caseinProtein,
    brand: 'Optimum Nutrition',
    weight: '1.8kg',
    flavors: ['chocolate', 'vainilla', 'frutilla', 'cookies'],
    benefits: [
      'Liberación sostenida',
      'Anticatabólica',
      'Recuperación nocturna',
      'Saciedad prolongada'
    ],
    ingredients: 'Caseinato de calcio, cocoa, saborizantes naturales, enzimas digestivas',
    instructions: 'Mezclar 1 scoop (35g) con 300ml de agua 30 min antes de dormir.'
  },
  
  // Creatinas
  {
    id: 'creatine-mono',
    name: 'Creatine Monohydrate',
    category: 'creatina',
    price: 25000,
    description: 'Creatine Monohydrate de Nutrex es un producto que otorga energía, potencia y resistencia en el entrenamiento, además de reducir el daño muscular pos entrenamiento. Creatine Monohydrate posee una alta pureza y es muy soluble en agua para así, conseguir la mayor absorción, biodisponibilidad y estabilidad que tu cuerpo necesita.',
    image: creatineMono,
    brand: 'NUTREX',
    weight: '300g',
    benefits: [
      'Aumenta la fuerza',
      'Mejora la potencia',
      'Mayor volumen muscular',
      'Recuperación más rápida'
    ],
    ingredients: 'Creatina monohidrato 100% pura',
    instructions: 'Tomar 5g diarios mezclado con agua o jugo, preferiblemente post-entreno.'
  },
  {
    id: 'creatine-hcl',
    name: 'Creatina Monohydrate',
    category: 'creatina',
    price: 30000,
    description: 'Creatine Monohyrate VITOBEST es un alimento para deportistas con un aporte de 5 g de Creatina monohidratada. La Creatina es un derivado de los aminoácidos que resintetiza el ATP (Adenosín Trifosfato) principal fuente de energía que necesita el músculo para realizar un movimiento. Por esta razón entrega un plus de energía a tus músculos cuando entrenas.',
    image: creatineHcl,
    brand: 'VITOBEST',
    weight: '250g',
    benefits: [
      'Máxima absorción',
      'Sin retención de líquidos',
      'No requiere carga',
      'Mayor biodisponibilidad'
    ],
    ingredients: 'Clorhidrato de creatina, antiaglomerante',
    instructions: 'Tomar 3g diarios con el estómago vacío, 30 min antes del entreno.'
  },
  
  // Pre-entrenos
  {
    id: 'pre-extreme',
    name: 'Pre Workout Psychotic',
    category: 'pre-entreno',
    price: 25000,
    description: 'Psychotic, aporta de forma inmediata toda la energía, fuerza, potencia y resistencia que necesitas para lograr llevar la actividad física a tu máximo nivel. Su potente fórmula aumenta la producción natural de Óxido Nítrico, que genera una dilatación de los vasos sanguíneos, acelerando el flujo de sangre y el aporte de oxígeno al tejido muscular, mejorando el rendimiento y la fuerza muscular. Contiene una excelente combinación de estimulantes para tu entrenamiento. Además aporta una mezcla exclusiva de aminoácidos para lograr un óptimo rendimiento deportivo. Con Psychotic no habrá cansancio que postergue tu rutina deportiva.',
    image: preExtreme,
    brand: 'INSANE LABZ',
    weight: '400g',
    benefits: [
      'Energía explosiva',
      'Mayor enfoque mental',
      'Bombeo muscular',
      'Resistencia aumentada'
    ],
    ingredients: 'Cafeína anhidra, beta-alanina, citrulina malato, taurina, tirosina',
    instructions: 'Mezclar 1 scoop (12g) con 200ml de agua, tomar 30 min antes del entreno.'
  },
  {
    id: 'pre-pump',
    name: 'Pre Workout Pump Matrix',
    category: 'pre-entreno',
    price: 30000,
    description: 'Carnitine 1000 de Nutrex es un producto que contiene L-Carnitina L-Tartrato aportando 1.000 mg de L-Carnitina pura, con el consumo de 2 cápsulas al día estas cubriendo el 50% de L-Carnitina permitida para alimentos destinados a deportistas y con el consumo de 4 cápsulas ya tienes el 100%. Carnitine 1000 utiliza cápsula vegetal y es un producto libre de ingredientes de origen animal, haciendo ideal para el consumo de personas vegetarianas y veganas',
    image: prePump,
    brand: 'PumpTech',
    weight: '350g',
    benefits: [
      'Bombeo extremo',
      'Vascularización',
      'Sin estimulantes',
      'Óxido nítrico'
    ],
    ingredients: 'Citrulina, arginina, beetroot, extracto de sandía, glicerol',
    instructions: 'Mezclar 1 scoop (14g) con 250ml de agua, tomar 20 min antes del entreno.'
  }
];
