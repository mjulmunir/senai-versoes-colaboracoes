function promotionProducts() {
    const products = document.getElementById("promotion-products");
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
        [
            "mouse.jpg",
            "#",
            "Mouse, Marca: ..., Conexão: ..., DPI: ...",
            "R$ ...",
        ],
        [
            "cabinet.jpg",
            "#",
            "Gabinete, Marca: ..., Cor: ..., Fator de forma: ...",
            "R$ ...",
        ],
    ];
    return {
        products,
        productsFolder,
        productsList,
    };
}

const promotion_products = promotionProducts();

export { promotion_products, promotionProducts as default };
