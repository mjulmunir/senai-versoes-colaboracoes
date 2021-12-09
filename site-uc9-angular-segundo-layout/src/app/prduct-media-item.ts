export interface Product {
  src: string;
  ref: string;
  desc: string;
  price: string;
  id: string;
  status: boolean;
  rotate: boolean;
}

export interface Media {
  src: string;
  ref: string;
}

export const NEW_PRODUCTS: Product[] = [
  {
    src: 'processor.png',
    ref: '#',
    desc: 'Processador: ..., Marca: ..., Modelo: ...',
    price: 'R$ ...',
    id: 'processor',
    status: false,
    rotate: false,
  },
  {
    src: 'graphics-card.jpg',
    ref: '#',
    desc: 'Placa de vídeo, Marca: ..., Modelo: ...',
    price: 'R$ ...',
    id: 'graphics-card',
    status: false,
    rotate: false,
  },
  {
    src: 'tablet.jpg',
    ref: '#',
    desc: 'Tablet, Marca: ...',
    price: 'R$ ...',
    id: 'tablet',
    status: false,
    rotate: false,
  },
  {
    src: 'cpu-cooler.jpg',
    ref: '#',
    desc: 'Cooler, Marca: ..., Tamanho: ...',
    price: 'R$ ...',
    id: 'cpu-cooler',
    status: false,
    rotate: false,
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    src: 'all-in-one.png',
    ref: '#',
    desc: 'Computador All In One, Marca ..., Processador ..., Memória ram: ...',
    price: 'R$ ...',
    id: 'all-in-one',
    status: false,
    rotate: false,
  },
  {
    src: 'notebook.jpg',
    ref: '#',
    desc: 'Notebook, Marca ..., Processador ..., Memória ram: ...',
    price: 'R$ ...',
    id: 'notebook',
    status: false,
    rotate: false,
  },
  {
    src: 'monitor.png',
    ref: '#',
    desc: 'Monitor, Marca ..., Resolução ..., Conexão: ...',
    price: 'R$ ...',
    id: 'monitor',
    status: false,
    rotate: false,
  },
  {
    src: 'smartphone.png',
    ref: '#',
    desc: 'Smartphone, Marca: ...',
    price: 'R$ ...',
    id: 'smartphone',
    status: false,
    rotate: false,
  },
  {
    src: 'headphone.png',
    ref: '#',
    desc: 'Headphone, Marca: ..., Conexão: ..., Cor: ...',
    price: 'R$ ...',
    id: 'headphone',
    status: false,
    rotate: false,
  },
  {
    src: 'keyboard.png',
    ref: '#',
    desc: 'Teclado, Marca: ..., Conexão: ..., Cor: ...',
    price: 'R$ ...',
    id: 'keyboard',
    status: false,
    rotate: false,
  },
  {
    src: 'mouse.jpg',
    ref: '#',
    desc: 'Mouse, Marca: ..., Conexão: ..., DPI: ...',
    price: 'R$ ...',
    id: 'mouse',
    status: false,
    rotate: false,
  },
  {
    src: 'cabinet.jpg',
    ref: '#',
    desc: 'Gabinete, Marca: ..., Cor: ..., Fator de forma: ...',
    price: 'R$ ...',
    id: 'cabinet',
    status: false,
    rotate: false,
  },
];

export const PROMOTIONAL_PRODUCTS: Product[] = [
  {
    src: 'processor.png',
    ref: '#',
    desc: 'Processador: ..., Marca: ..., Modelo: ...',
    price: 'R$ ...',
    id: 'processor',
    status: false,
    rotate: false,
  },
  {
    src: 'graphics-card.jpg',
    ref: '#',
    desc: 'Placa de vídeo, Marca: ..., Modelo: ...',
    price: 'R$ ...',
    id: 'graphics-card',
    status: false,
    rotate: false,
  },
  {
    src: 'tablet.jpg',
    ref: '#',
    desc: 'Tablet, Marca: ...',
    price: 'R$ ...',
    id: 'tablet',
    status: false,
    rotate: false,
  },
  {
    src: 'cpu-cooler.jpg',
    ref: '#',
    desc: 'Cooler, Marca: ..., Tamanho: ...',
    price: 'R$ ...',
    id: 'cpu-cooler',
    status: false,
    rotate: false,
  },
  {
    src: 'all-in-one.png',
    ref: '#',
    desc: 'Computador All In One, Marca ..., Processador ..., Memória ram: ...',
    price: 'R$ ...',
    id: 'all-in-one',
    status: false,
    rotate: false,
  },
  {
    src: 'notebook.jpg',
    ref: '#',
    desc: 'Notebook, Marca ..., Processador ..., Memória ram: ...',
    price: 'R$ ...',
    id: 'notebook',
    status: false,
    rotate: false,
  },
  {
    src: 'monitor.png',
    ref: '#',
    desc: 'Monitor, Marca ..., Resolução ..., Conexão: ...',
    price: 'R$ ...',
    id: 'monitor',
    status: false,
    rotate: false,
  },
  {
    src: 'smartphone.png',
    ref: '#',
    desc: 'Smartphone, Marca: ...',
    price: 'R$ ...',
    id: 'smartphone',
    status: false,
    rotate: false,
  },
  {
    src: 'headphone.png',
    ref: '#',
    desc: 'Headphone, Marca: ..., Conexão: ..., Cor: ...',
    price: 'R$ ...',
    id: 'headphone',
    status: false,
    rotate: false,
  },
  {
    src: 'keyboard.png',
    ref: '#',
    desc: 'Teclado, Marca: ..., Conexão: ..., Cor: ...',
    price: 'R$ ...',
    id: 'keyboard',
    status: false,
    rotate: false,
  },
  {
    src: 'mouse.jpg',
    ref: '#',
    desc: 'Mouse, Marca: ..., Conexão: ..., DPI: ...',
    price: 'R$ ...',
    id: 'mouse',
    status: false,
    rotate: false,
  },
  {
    src: 'cabinet.jpg',
    ref: '#',
    desc: 'Gabinete, Marca: ..., Cor: ..., Fator de forma: ...',
    price: 'R$ ...',
    id: 'cabinet',
    status: false,
    rotate: false,
  },
];

export const SOCIAL_MEDIA: Media[] = [
  { src: 'playing.jpg', ref: 'https://www.facebook.com/' },
  { src: 'console.jpg', ref: 'https://www.instagram.com/' },
  { src: 'setup.jpg', ref: 'https://www.facebook.com/' },
];
