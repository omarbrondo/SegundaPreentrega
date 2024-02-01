let botonPedido = document.querySelector("button");
let pedidos = []; // Array para almacenar la información de los pedidos

alert("⚠️INSTRUCCIONES⚠️\n ANTES DE HACER CLIC EN EL BOTON NARANJA, ABRIR LA CONSOLA");

function obtenerInformacionCliente(i) {
  let nombre = prompt("Nombre de la persona " + (parseInt(i) + 1));
  console.log("Menu para " + nombre.toUpperCase());
  let edad = prompt("¿Edad de " + nombre.toUpperCase() + "?");
  return { nombre, edad };
}

// Define objetos para representar los elementos del menú
const menuComida = {
  1: { item: "Hamburguesa con queso", precio: 4000 },
  2: { item: "Ensalada", precio: 3000 },
  3: { item: "Arroz con pollo", precio: 2000 },
};

const menuBebida = {
  1: { item: "Vaso de agua", precio: 0 },
  2: { item: "Gaseosa", precio: 500 },
  3: { item: "Cerveza", precio: 2000 },
  4: { item: "Mate", precio: 20 },
};

// Función de orden superior para calcular el subtotal de una categoría
function calcularSubtotalCategoria(pedido, categoria) {
  return pedido
    .filter(item => item.tipo === categoria)
    .reduce((total, item) => total + item.precio, 0);
}

function obtenerComida(nombre) {
  let pedidoComida = [];
  let comida;

  do {
    comida = prompt(
      "¿Qué comerá hoy " +
        nombre.toUpperCase() +
        "? \n Seleccione Comida \n 1) Hamburguesa con queso 🍔💲4000  \n 2) Ensalada 🥗💲3000  \n 3) Arroz con pollo 🍚💲2000  \n 4) Listo! ✅"
    );

    if (parseInt(comida) !== 4) {
      pedidoComida.push({
        item: menuComida[parseInt(comida)].item,
        precio: menuComida[parseInt(comida)].precio,
        tipo: "Comida",
      });
      console.log(nombre.toUpperCase() +" Eligió para comer " + menuComida[parseInt(comida)].item)

    }
  } while (parseInt(comida) !== 4);

  return { tipo: "Comida", pedido: pedidoComida };
}

function obtenerBebida(nombre, edad) {
  let pedidoBebida = [];
  let bebida;

  do {
    bebida = prompt(
      "¿Que beberá " +
        nombre.toUpperCase() +
        "?\n 1) Vaso de agua 🥛💲0  \n 2) Gaseosa 🥤💲500  \n 3) Cerveza 🍺💲2000  \n 4) Mate 🧉💲20  \n 5) Listo!✅ \n"
    );

    if (parseInt(bebida) !== 5) {
      if (edad < 18 && parseInt(bebida) == 3) {
        alert("🔞" + nombre.toUpperCase() + " Es menor de edad, no puede tomar cerveza🔞");
      } else {
        pedidoBebida.push({
          item: menuBebida[parseInt(bebida)].item,
          precio: menuBebida[parseInt(bebida)].precio,
          tipo: "Bebida",
        });
        console.log(nombre.toUpperCase() +" Eligió para beber " + menuBebida[parseInt(bebida)].item)
      }
    }
  } while (parseInt(bebida) !== 5);

  return { tipo: "Bebida", pedido: pedidoBebida };
}

function imprimirSubtotal(nombre, tipo, pedido) {
  let subtotal = calcularSubtotalCategoria(pedido, tipo);
  console.log(`💰Subtotal de ${tipo} para ${nombre.toUpperCase()}: ${subtotal}`);
}

function imprimirMensajeFinal() {
  if (pedidos.length > 0) {
    document.querySelector("img").src = "img/OIG (1).jpg";
    document.querySelector("h1").innerText = "Su pedido está preparandose!";
    document.querySelector("button").hidden = true;

    let totalGeneral = pedidos.reduce((total, pedido) => {
      return total + pedido.reduce((subtotal, item) => subtotal + item.precio, 0);
    }, 0);

    console.log("EL TOTAL A COBRAR ES 💵 💲" + totalGeneral);
  } else {
    document.querySelector("img").src = "img/OIG (2).jpg";
    document.querySelector("h1").innerText = "Que lastima que te vas sin comer nada!";
    document.querySelector("button").hidden = true;
    console.log("El cliente se va sin consumir");
  }
}

botonPedido.addEventListener("click", function () {
  console.log("⚠️ATENCIÓN COCINEROS! HAY UN NUEVO CLIENTE!⚠️");
  let personas = prompt("¿Cuantas personas son? 👨‍👩‍👦‍👦 ");

  for (let i = 0; i < personas; i++) {
    const { nombre, edad } = obtenerInformacionCliente(i);

    let pedidoComida = obtenerComida(nombre);
    let pedidoBebida = obtenerBebida(nombre, edad);

    imprimirSubtotal(nombre, pedidoComida.tipo, pedidoComida.pedido);
    imprimirSubtotal(nombre, pedidoBebida.tipo, pedidoBebida.pedido);

    pedidos.push([...pedidoComida.pedido, ...pedidoBebida.pedido]);
  }

  imprimirMensajeFinal();
});
