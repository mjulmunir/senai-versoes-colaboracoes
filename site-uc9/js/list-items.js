function listProducts(itemList, itemSource, items) {
  for (let i = 0; i < itemList.length; i++) {
    const img = document.createElement("img");
    const imgDiv = document.createElement("div");
    const desc = document.createElement("p");
    const price = document.createElement("p");
    const infoDiv = document.createElement("div");
    const a = document.createElement("a");
    const col = document.createElement("div");

    img.src = `${itemSource}/${itemList[i][0]}`;
    img.alt = itemList[i][0];
    img.className = "img-fluid";

    imgDiv.className = "image d-flex align-items-center justify-content-center";
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

function listPromotionProducts(itemList, itemSource, items) {
  for (let i = 0; i < itemList.length; i++) {
    const img = document.createElement("img");
    const imgDiv = document.createElement("div");
    const desc = document.createElement("p");
    const price = document.createElement("p");
    const infoDiv = document.createElement("div");
    const btn = document.createElement("button");
    const btnDiv = document.createElement("div");
    const a = document.createElement("a");
    const col = document.createElement("div");

    img.src = `${itemSource}/${itemList[i][0]}`;
    img.alt = itemList[i][0];
    img.className = "img-fluid";

    imgDiv.className = "image d-flex align-items-center justify-content-center";
    imgDiv.appendChild(img);

    desc.innerText = `${itemList[i][2]}`;
    desc.className = "description";

    infoDiv.className = "info text-center";
    infoDiv.appendChild(desc);
    infoDiv.appendChild(price);

    price.innerText = `${itemList[i][3]}`;
    price.className = "price";

    btn.setAttribute("class", "timer rounded btn-outline-success");

    btnDiv.setAttribute(
      "class",
      "d-flex align-items-center justify-content-center buy"
    );
    btnDiv.appendChild(btn);

    a.href = `${itemList[i][1]}`;
    a.className = "link rounded";
    a.appendChild(imgDiv);
    a.appendChild(infoDiv);
    a.appendChild(btnDiv);

    col.className = "col d-flex justify-content-center";
    col.appendChild(a);

    items.appendChild(col);
  }
}

function listMedia(itemList, itemSource, items) {
  for (let i = 0; i < itemList.length; i++) {
    const div = document.createElement("div");
    const a = document.createElement("a");
    const img = document.createElement("img");

    img.className = "img-fluid";
    img.src = `${itemSource}/${itemList[i][0]}`;
    img.alt = `${itemList[i][0]}`;

    a.className = "link col d-flex align-items-center justify-content-center";
    a.href = `${itemList[i][1]}`;
    a.appendChild(img);

    items.appendChild(a);
  }
}

export { listProducts, listPromotionProducts, listMedia };
