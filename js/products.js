const listOfProducts = document.getElementsByClassName('listOfProducts');
const products = document.getElementById('products');
const productsList = [
    ['all-in-one.png', '#', 'Computador All In One, Marca ..., Processador ..., Memória ram: ...'],
    ['notebook.jpg', '#', 'Notebook, Marca ..., Processador ..., Memória ram: ...'],
    ['monitor.png', '#', 'Monitor, Marca ..., Resolução ..., Conexão: ...'],
    ['smartphone.png', '#', 'Smartphone, Marca: ...'],
    ['headphone.png', '#', 'Headphone, Marca: ..., Conexão: ..., Cor: ...'],
    ['keyboard.png', '#', 'Teclado, Marca: ..., Conexão: ..., Cor: ...'],
    ['mouse.jpg', '#', 'Mouse, Marca: ..., Conexão: ..., DPI: ...'],
    ['cabinet.jpg', '#', 'Gabinete, Marca: ..., Cor: ..., Fator de forma: ...'],
    ['processor.png', '#', 'Processador: ..., Marca: ..., Modelo: ...'],
    ['graphics-card.jpg', '#', 'Placa de vídeo, Marca: ..., Modelo: ...'],
    ['tablet.jpg', '#', 'Tablet, Marca: ...'],
    ['cpu-cooler.jpg', '#', 'Cooler, Marca: ..., Tamanho: ...']
];

listProducts();

function listProducts() {
    while (listOfProducts.length > 0) {
        listOfProducts[0].parentNode.removeChild(listOfProducts[0]);
    }
    
    while (listOfPhotos.length > 0) {
        listOfPhotos[0].parentNode.removeChild(listOfPhotos[0]);
    }
    
    let productColumns = screen.width >= 1024 ? 4 : screen.width > 430 ? 3 : 2;
    let i = 0;
    while (i < productsList.length) {
        let product = document.createElement('div');
        product.className = 'listOfProducts';
        
        for (let j = 0; j < productColumns; j++) {
            let productImage = document.createElement('img');
            productImage.src = `images/products/${productsList[i][0]}`;
            productImage.alt = productsList[i][0];
            
            let productLink = document.createElement('a');
            productLink.href = productsList[i][1];
            productLink.appendChild(productImage);
            productLink.appendChild(document.createElement('br'));
            productLink.appendChild(document.createTextNode(productsList[i][2]));
            
            product.appendChild(productLink);
            
            products.appendChild(product);
            
            i++;
        }
    }
}

window.addEventListener('resize', listProducts);