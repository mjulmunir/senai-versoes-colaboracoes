function listProducts(itemType, itemList) {
  for (let i = 0; i < itemList.length; i++) {
    const img = document.createElement("img");
    $(img).attr({
      src: `img/products/${itemList[i][0]}`,
      class: "card-img-top",
      alt: `${itemList[i][0]}`,
    });

    const cardBodyImg = document.createElement("div");
    $(cardBodyImg)
      .attr({
        class: "card-body d-flex justify-content-center",
        style: "height: 12vw",
      })
      .append(img);

    const price = document.createElement("div");
    $(price)
      .attr("class", "card-text text-center")
      .append(document.createTextNode(`${itemList[i][3]}`));

    const cardBodyPrice = document.createElement("div");
    $(cardBodyPrice)
      .attr({
        class: "card-body",
        style: "height: 3vw",
      })
      .append(price);

    const desc = document.createElement("div");
    $(desc)
      .attr("class", "card-text")
      .append(document.createTextNode(`${itemList[i][2]}`));

    const cardBodyDesc = document.createElement("div");
    $(cardBodyDesc)
      .attr({
        class: "card-body",
        style: "height: 3vw;",
      })
      .append(desc);

    const a = document.createElement("a");
    $(a)
      .attr({
        href: `${itemList[i][1]}`,
        class: "card text-dark bg-light",
        style:
          "background-color: rgb(235, 235, 235); text-decoration: none; ; font-size: 1.1vw",
      })
      .append(cardBodyImg, cardBodyDesc, cardBodyPrice);

    const listTypes = {
      promotion() {
        const btn = document.createElement("button");
        $(btn).attr("class", "timer btn btn-outline-success");

        const cardFooter = document.createElement("div");
        $(cardFooter).attr("class", "card-footer text-center").append(btn);

        $(a).append(cardFooter);
      },
    };

    if (listTypes[itemType]) {
      listTypes[itemType]();
    }

    const col = document.createElement("div");
    $(col).attr("class", "col").append(a);

    $(`#${itemType}-products`).append(col);
  }
}

function listMedia(itemList, itemSource, items) {
  for (let i = 0; i < itemList.length; i++) {
    const col = document.createElement("div");
    const a = document.createElement("a");
    const img = document.createElement("img");

    img.setAttribute("class", "img-fluid");
    img.setAttribute("src", `${itemSource}/${itemList[i][0]}`);
    img.setAttribute("alt", `${itemList[i][0]}`);

    a.setAttribute(
      "class",
      "link d-flex align-items-center justify-content-center"
    );
    a.setAttribute("href", `${itemList[i][1]}`);

    a.appendChild(img);

    col.setAttribute("class", "col d-flex justify-content-center");
    col.appendChild(a);

    items.appendChild(col);
  }
}

export { listProducts, listMedia };
