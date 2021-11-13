const newProducts = document.getElementById("new");
const featuredProducts = document.getElementById("featured");
const media = document.getElementById("media");

const productClass = "products";
const mediaClass = "media";

const listOfItems = {
  newProductsList: [
    [
      "processor.png",
      "#",
      "Processador: ..., Marca: ..., Modelo: ...",
      "R$ ...",
    ],
    [
      "graphics-card.jpg",
      "#",
      "Placa de vídeo, Marca: ..., Modelo: ...",
      "R$ ...",
    ],
    ["tablet.jpg", "#", "Tablet, Marca: ...", "R$ ..."],
    ["cpu-cooler.jpg", "#", "Cooler, Marca: ..., Tamanho: ...", "R$ ..."],
  ],
  featuredProductsList: [
    [
      "all-in-one.png",
      "#",
      "Computador All In One, Marca ..., Processador ..., Memória ram: ...",
      "R$ ...",
    ],
    [
      "notebook.jpg",
      "#",
      "Notebook, Marca ..., Processador ..., Memória ram: ...",
      "R$ ...",
    ],
    [
      "monitor.png",
      "#",
      "Monitor, Marca ..., Resolução ..., Conexão: ...",
      "R$ ...",
    ],
    ["smartphone.png", "#", "Smartphone, Marca: ...", "R$ ..."],
    [
      "headphone.png",
      "#",
      "Headphone, Marca: ..., Conexão: ..., Cor: ...",
      "R$ ...",
    ],
    [
      "keyboard.png",
      "#",
      "Teclado, Marca: ..., Conexão: ..., Cor: ...",
      "R$ ...",
    ],
    ["mouse.jpg", "#", "Mouse, Marca: ..., Conexão: ..., DPI: ...", "R$ ..."],
    [
      "cabinet.jpg",
      "#",
      "Gabinete, Marca: ..., Cor: ..., Fator de forma: ...",
      "R$ ...",
    ],
  ],
  mediaList: [
    ["playing.jpg", "https://www.facebook.com/"],
    ["console.jpg", "https://www.instagram.com/"],
    ["setup.jpg", "https://www.facebook.com/"],
  ],
};

const productsFolder = "img/products";
const mediaFolder = "img/media";

for (list in listOfItems.keys) {
}

function listItems(itemParentElement, itemClassName, itemList, itemSource) {
  for (let i = 0; i < itemList.length; i++) {}
}
