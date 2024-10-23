  // Datos
  const baseDeDatos = [
    { id: 1, nombre: 'Buzo para hombre Talla - M', precio: 15, imagen: 'https://i.pinimg.com/originals/33/7b/d6/337bd65a67df7cc73793569d400f1518.jpg' },
    { id: 2, nombre: 'Buzo para hombre Talla - XL', precio: 25, imagen: 'https://shop.r10s.jp/mk-house/cabinet/05066817/mkl5035-4.jpg' },
    { id: 3, nombre: 'Buzo para hombre Talla - S', precio: 50, imagen: 'https://i.pinimg.com/originals/bf/93/7d/bf937db7bbb1c9b8811d9ea36f71fb2b.jpg' },

    { id: 4, nombre: 'Buzo para hombre Talla - M', precio: 15, imagen: 'https://atomoracle.com/cdn/shop/products/product-image-1532735232.jpg?v=1643871767' },
    { id: 5, nombre: 'Buzo para hombre Talla - M', precio: 25, imagen: 'https://th.bing.com/th/id/OIP.SD_NrD-QqA41D6awD3ml4QHaHa?w=800&h=800&rs=1&pid=ImgDetMain' },
    { id: 6, nombre: 'Buzo para hombre Talla - L', precio: 50, imagen: 'https://i.pinimg.com/originals/ac/95/54/ac9554d315f6150b430aff6b74115a74.jpg' },

    { id: 7, nombre: 'Buzo para hombre Talla - L', precio: 15, imagen: 'https://th.bing.com/th/id/OIP.-5gOPuDmxQTgJOaaebAeygHaHa?w=800&h=800&rs=1&pid=ImgDetMain' },
    { id: 8, nombre: 'Buzo para hombre Talla - XL', precio: 25, imagen: 'https://image.rakuten.co.jp/mk-house/cabinet/05066817/mkl5019-4.jpg' },
    { id: 9, nombre: 'Buzo para hombre Talla - XL', precio: 50, imagen: 'https://th.bing.com/th/id/OIP.RL4kTd8f_IkMrS4wPsccAQHaHa?w=764&h=764&rs=1&pid=ImgDetMain' },

    { id: 10, nombre: 'Buzo para hombre Talla - M', precio: 15, imagen: 'https://i.pinimg.com/originals/2b/00/2d/2b002dd2263665a1a5549a94e77a5f71.jpg' },
    { id: 11, nombre: 'Camiseta Oversize Talla - XL', precio: 25, imagen: 'https://cdn.awsli.com.br/300x300/2730/2730642/produto/299041036/off-1yr0nu2e32.jpg' },
    { id: 12, nombre: 'Buzo para hombre Talla - S', precio: 50, imagen: 'https://img.joomcdn.net/08ecffe61ef1a1fb50f4647937f708fc2f5c21fa_original.jpeg' },

    { id: 13, nombre: 'Buzo para hombre Talla - 16', precio: 15, imagen: 'https://img.joomcdn.net/5d97acf42ba33f954d6752e7ae06a790b2b205fe_original.jpeg' },
    { id: 14, nombre: 'Buzo para hombre Talla - 12', precio: 25, imagen: 'https://th.bing.com/th/id/OIP.fQ7CCCl3_xVmsUO4pSfIEAAAAA?rs=1&pid=ImgDetMain' },
    { id: 15, nombre: 'Buzo para hombre Talla - M', precio: 50, imagen: 'https://i.pinimg.com/736x/cb/03/e3/cb03e3c18dc7764bf31983f4448dacf8.jpg' },

    { id: 16, nombre: 'Buzo para hombre Talla - 14', precio: 15, imagen: 'https://tshop.r10s.jp/ymhouse/cabinet/07539590/07539591/07539598/mz-6453.jpg?fitin=720:720' },
    { id: 17, nombre: 'Camiseta Oversize Talla - L', precio: 25, imagen: 'https://th.bing.com/th/id/OIF.lSl5F3SRRN73l5h5cihbqg?rs=1&pid=ImgDetMain' },
    { id: 18, nombre: 'Buzo para hombre Talla - 18', precio: 50, imagen: 'https://th.bing.com/th/id/OIP.rxXawER7Fnt0ZO7nrcKNFgHaHa?pid=ImgDet&w=204&h=204&c=7' },
];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones
function renderizarProductos() {
    baseDeDatos.forEach((producto) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('item');
        miNodo.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h5>${producto.nombre}</h5>
    <p>${producto.precio}${divisa}</p>
    <button class="btn" data-id="${producto.id} ">Agregar</button>
`;
        DOMitems.appendChild(miNodo);
    });
}

function agregarProductoAlCarrito(evento) {
    const id = evento.target.dataset.id;
    const producto = baseDeDatos.find((producto) => producto.id == id);
    carrito.push(producto);
    renderizarCarrito();
}

function renderizarCarrito() {
    DOMcarrito.innerHTML = '';
    carrito.forEach((producto) => {
        const miNodo = document.createElement('li');
        miNodo.textContent = `${producto.nombre} - ${producto.precio}${divisa}`;
        DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = carrito.reduce((total, producto) => total + producto.precio, 0);
}

function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

// Eventos
DOMitems.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('btn')) {
        agregarProductoAlCarrito(evento);
    }
});

DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicialización
renderizarProductos();