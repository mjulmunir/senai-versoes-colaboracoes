function listMainPageProducts(itemList, itemSource, items) {
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

function listPromotionProducts(itemList, itemSource, items) {
    for (let i = 0; i < itemList.length; i++) {
        const imgDiv = document.createElement("div");
        const img = document.createElement("img");
        const descriptionDiv = document.createElement("div");
        const descriptionAlign = document.createElement("div");
        const priceDiv = document.createElement("div");
        const priceAlign = document.createElement("div");
        const priceSpan = document.createElement("span");
        const a = document.createElement("a");
        const timerDiv = document.createElement("div");
        const timer = document.createElement("span");
        const inventory = document.createElement("span");
        const description = itemList[i][2].split(", ");
        const price = itemList[i][3];
        const link = itemList[i][1];

        img.src = `${itemSource}/${itemList[i][0]}`;
        img.alt = itemList[i][0];
        img.className = "img-fluid";

        imgDiv.className =
            "col d-flex justify-content-center align-items-center";
        imgDiv.appendChild(img);

        descriptionDiv.className =
            "col d-flex justify-content-center align-items-center";

        description.forEach((element) => {
            const descriptionSpan = document.createElement("span");

            descriptionSpan.appendChild(document.createTextNode(element));
            descriptionSpan.appendChild(document.createElement("br"));

            descriptionAlign.appendChild(descriptionSpan);
        });
        descriptionDiv.appendChild(descriptionAlign);

        priceSpan.appendChild(document.createTextNode(price));

        priceDiv.className =
            "col d-flex justify-content-center align-items-center";
        priceAlign.appendChild(priceSpan);
        priceDiv.appendChild(priceAlign);

        timer.className = "timer";
        inventory.innerHTML = `Itens em estoque: ${itemList[i][4]}`;

        timerDiv.className = "warning d-flex justify-content-around";

        timerDiv.appendChild(timer);
        timerDiv.appendChild(inventory);

        a.href = link;
        a.className = "link rounded row row-cols-3";
        a.appendChild(imgDiv);
        a.appendChild(descriptionDiv);
        a.appendChild(priceDiv);
        a.appendChild(timerDiv);

        items.appendChild(a);
    }
}

function listMedia(itemList, itemSource, items) {
    for (let i = 0; i < itemList.length; i++) {
        const div = document.createElement("div");
        const a = document.createElement("a");
        const img = document.createElement("img");

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

export { listMainPageProducts, listPromotionProducts, listMedia };
