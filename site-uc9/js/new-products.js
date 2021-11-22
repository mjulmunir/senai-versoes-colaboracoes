function newProducts() {
    const productType = "new";
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
        productType,
        productsList,
    };
}

const new_products = newProducts();

export { new_products, newProducts as default };
