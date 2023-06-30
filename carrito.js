const shopping = document.querySelector(".shopping");
const template = document.querySelector(".template");
const fragment = document.createDocumentFragment();
const buttons = document.querySelectorAll(".container__fruits .fruit-button")

const carritoObjetos = {}

const agregarCarrito = (e) => {
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo : e.target.dataset.fruta,
        id : e.target.dataset.fruta,
        cantidad : 1
    }

    if(carritoObjetos.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjetos[producto.titulo].cantidad + 1
    }

    carritoObjetos[producto.titulo] = producto;

    pintarCarrito()
}

const pintarCarrito = () => {
    shopping.textContent = "";

    Object.values(carritoObjetos).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".shopping__amount").textContent = item.cantidad;
        fragment.appendChild(clone);
    })

    shopping.appendChild(fragment);
}

buttons.forEach(btn => btn.addEventListener("click", agregarCarrito));


