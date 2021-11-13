var newProducts = document.getElementById("new-products");
var featuredProducts = document.getElementById("featured-products");
var media = document.getElementById("media");

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

const mediaList = [
  ["playing.jpg", "https://www.facebook.com/"],
  ["console.jpg", "https://www.instagram.com/"],
  ["setup.jpg", "https://www.facebook.com/"],
];

const productsFolder = "img/products";
const mediaFolder = "img/media";

listItems(newProductsList, productsFolder, newProducts);
listItems(featuredProductsList, productsFolder, featuredProducts);
listItems(mediaList, mediaFolder, media);

function listItems(itemList, itemSource, items) {
  for (let i = 0; i < itemList.length; i++) {
    let a = document.createElement("a");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let imgDiv = document.createElement("div");
    let description = document.createElement("p");
    let descDiv = document.createElement("div");
    let price = document.createElement("p");
    let priceDiv = document.createElement("div");

    img.src = `${itemSource}/${itemList[i][0]}`;
    img.alt = `${itemList[i][0]}`;
    img.className = "img-fluid";
    imgDiv.appendChild(img);
    imgDiv.className = "product";

    div.appendChild(imgDiv);
    div.className = "p-3 d-flex align-items-center flex-column";

    if (itemList[i].length > 2) {
      description.innerText = itemList[i][2];
      descDiv.appendChild(description);
      descDiv.className = "product-info";

      price.innerText = itemList[i][3];
      priceDiv.appendChild(price);
      priceDiv.className = "product-info d-flex align-items-center";

      div.appendChild(descDiv);
      div.appendChild(priceDiv);
    }

    a.className = "col";
    a.href = `${itemList[i][1]}`;

    a.appendChild(div);

    items.appendChild(a);
  }
}
