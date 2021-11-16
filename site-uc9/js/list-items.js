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

export { listProducts, listMedia };
