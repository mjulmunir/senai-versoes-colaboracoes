function promotionProducts() {
    const products = document.getElementById("promotion-products");
    const productsFolder = "img/products";
    const productsList = [
        [
            "processor.png",
            "#",
            "Processador: ..., Marca: ..., Modelo: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "graphics-card.jpg",
            "#",
            "Placa de vídeo, Marca: ..., Modelo: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "tablet.jpg",
            "#",
            "Tablet, Marca: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "cpu-cooler.jpg",
            "#",
            "Cooler, Marca: ..., Tamanho: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "all-in-one.png",
            "#",
            "Computador All In One, Marca ..., Processador ..., Memória ram: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "notebook.jpg",
            "#",
            "Notebook, Marca ..., Processador ..., Memória ram: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "monitor.png",
            "#",
            "Monitor, Marca ..., Resolução ..., Conexão: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "smartphone.png",
            "#",
            "Smartphone, Marca: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "headphone.png",
            "#",
            "Headphone, Marca: ..., Conexão: ..., Cor: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "keyboard.png",
            "#",
            "Teclado, Marca: ..., Conexão: ..., Cor: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "mouse.jpg",
            "#",
            "Mouse, Marca: ..., Conexão: ..., DPI: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
        ],
        [
            "cabinet.jpg",
            "#",
            "Gabinete, Marca: ..., Cor: ..., Fator de forma: ...",
            "R$ ...",
            `${Math.floor(Math.random() * 100)}`,
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
