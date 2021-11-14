const newProducts = document.getElementById("new-products");
const featuredProducts = document.getElementById("featured-products");

const newProductsList = [
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

const productsFolder = "img/products";

listProducts(newProductsList, productsFolder, newProducts);
listProducts(featuredProductsList, productsFolder, featuredProducts);

function listProducts(itemList, itemSource, items) {
	for (let i = 0; i < itemList.length; i++) {
		let img = document.createElement("img");
		let imgDiv = document.createElement("div");
		let desc = document.createElement("p");
		let price = document.createElement("p");
		let infoDiv = document.createElement("div");
		let a = document.createElement("a");
		let col = document.createElement("div");

		img.src = `${itemSource}/${itemList[i][0]}`;
		img.alt = itemList[i][0];
		img.className = "img-fluid";

		imgDiv.className =
			"image d-flex align-items-center justify-content-center";
		imgDiv.appendChild(img);

		desc.innerText = `${itemList[i][2]}`;
		desc.className = "description";

		price.innerText = `${itemList[i][3]}`;
		price.className = "price";

		infoDiv.className = "info text-center";
		infoDiv.appendChild(desc);
		infoDiv.appendChild(price);

		a.href = `${itemList[i][1]}`;
		a.className = "link rounded";
		a.appendChild(imgDiv);
		a.appendChild(infoDiv);

		col.className = "col d-flex justify-content-center";
		col.appendChild(a);

		items.appendChild(col);
	}
}

const media = document.getElementById("media");

const mediaList = [
	["playing.jpg", "https://www.facebook.com/"],
	["console.jpg", "https://www.instagram.com/"],
	["setup.jpg", "https://www.facebook.com/"],
];

const mediaFolder = "img/media";

listMedia(mediaList, mediaFolder, media);

function listMedia(itemList, itemSource, items) {
	for (let i = 0; i < itemList.length; i++) {
		let div = document.createElement("div");
		let a = document.createElement("a");
		let img = document.createElement("img");

		img.className = "image";
		img.src = `${itemSource}/${itemList[i][0]}`;
		img.alt = `${itemList[i][0]}`;

		a.className = "link";
		a.href = `${itemList[i][1]}`;
		a.appendChild(img);

		div.className = "col d-flex align-items-center justify-content-center";
		div.appendChild(a);

		items.appendChild(div);
	}
}
