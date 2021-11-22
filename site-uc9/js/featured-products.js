function featuredProducts() {
    const productType = "featured";
    const productsList = [
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
        productType,
        productsList,
    };
}

const featured_products = featuredProducts();

export { featured_products, featuredProducts as default };
