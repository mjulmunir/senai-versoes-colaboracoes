function newProducts() {
    const products = document.getElementById("new-products");
    const productsFolder = "img/products";
    const productsList = [
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

    return {
        products,
        productsFolder,
        productsList,
    };
}

const new_products = newProducts();

export { new_products, newProducts as default };
