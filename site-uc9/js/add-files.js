const newProductClass = "new-products";
const newProducts = document.getElementById("new");
const newProductsList = [
  ["processor.png", "#", "Processador: ..., Marca: ..., Modelo: ...", "R$ ..."],
  [
    "graphics-card.jpg",
    "#",
    "Placa de vídeo, Marca: ..., Modelo: ...",
    "R$ ...",
  ],
  ["tablet.jpg", "#", "Tablet, Marca: ...", "R$ ..."],
  ["cpu-cooler.jpg", "#", "Cooler, Marca: ..., Tamanho: ...", "R$ ..."],
];

const featuredProductClass = "featured-products";
const featuredProducts = document.getElementById("featured");
const featuredProductsList = [
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
];

const mediaClass = "media-files";
const media = document.getElementById("media");
const mediaList = [
  ["playing.jpg", "https://www.facebook.com/"],
  ["console.jpg", "https://www.instagram.com/"],
  ["setup.jpg", "https://www.facebook.com/"],
];

const productsFolder = "img/products";
const mediaFolder = "img/media";

listItems(newProductsList, newProductClass, newProducts, productsFolder);
listItems(
  featuredProductsList,
  featuredProductClass,
  featuredProducts,
  productsFolder
);
listItems(mediaList, mediaClass, media, mediaFolder);

function listItems(itemsList, className, items, source) {
  for (let i = 0; i < itemsList.length; i++) {
    let img = document.createElement("img");
    img.src = `./${source}/${itemsList[i][0]}`;
    img.alt = itemsList[i][0];

    let itemLink = document.createElement("a");
    itemLink.href = itemsList[i][1];
    itemLink.target = "_blank";

    if (itemsList[i].length > 2) {
      let imgContainer = document.createElement("div");
      imgContainer.className = "image";
      imgContainer.appendChild(img);

      let description = document.createElement("p");
      description.innerHTML = itemsList[i][2];

      let descriptionContainer = document.createElement("div");
      descriptionContainer.className = "description";
      descriptionContainer.appendChild(description);

      let price = document.createElement("p");
      price.innerHTML = itemsList[i][3];

      let priceContainer = document.createElement("div");
      priceContainer.className = "price";
      priceContainer.appendChild(price);

      let item = document.createElement("div");
      item.className = className;

      item.appendChild(imgContainer);
      item.appendChild(descriptionContainer);
      item.appendChild(priceContainer);

      itemLink.appendChild(item);
    } else {
      itemLink.appendChild(img);
      itemLink.className = className;
    }

    items.appendChild(itemLink);
  }
}
