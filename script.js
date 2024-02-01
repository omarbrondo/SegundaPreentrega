let botonPedido = document.querySelector("button");
let sumaComida = 0;
let sumaBebida = 0;
let subtotalComida = 0;
let subtotalBebida = 0;

alert("⚠️INSTRUCCIONES⚠️\n ANTES DE HACER CLIC EN EL BOTON NARANJA, ABRIR LA CONSOLA");

function obtenerInformacionCliente(i) {
  let nombre = prompt("Nombre de la persona " + (parseInt(i) + 1));
  console.log("Menu para " + nombre.toUpperCase());
  let edad = prompt("¿Edad de " + nombre.toUpperCase() + "?");
  return { nombre, edad };
}

// Define objetos para representar los elementos del menú
const menuComida = {
  1: { nombre: "Hamburguesa con queso", precio: 4000 },
  2: { nombre: "Ensalada", precio: 3000 },
  3: { nombre: "Arroz con pollo", precio: 2000 },
};

const menuBebida = {
  1: { nombre: "Vaso de agua", precio: 0 },
  2: { nombre: "Gaseosa", precio: 500 },
  3: { nombre: "Cerveza", precio: 2000 },
  4: { nombre: "Mate", precio: 20 },
};

function obtenerComida(nombre) {
  let comida;
  do {
    comida = prompt(
      "¿Qué comerá hoy " +
        nombre.toUpperCase() +
        "? \n Seleccione Comida \n 1) Hamburguesa con queso 🍔💲4000  \n 2) Ensalada 🥗💲3000  \n 3) Arroz con pollo 🍚💲2000  \n 4) Listo! ✅"
    );

    console.log("Valor de comida:", comida);

    if (parseInt(comida) !== 4) {
      console.log(nombre.toUpperCase() + " pidió para comer la opción " + menuComida[parseInt(comida)].nombre);
      sumaComida += menuComida[parseInt(comida)].precio; // Corrección aquí
    }
  } while (parseInt(comida) !== 4);
}

function obtenerBebida(nombre, edad) {
  let bebida;
  do {
    bebida = prompt(
      "¿Que beberá " +
        nombre.toUpperCase() +
        "?\n 1) Vaso de agua 🥛💲0  \n 2) Gaseosa 🥤💲500  \n 3) Cerveza 🍺💲2000  \n 4) Mate 🧉💲20  \n 5) Listo!✅ \n"
    );

    console.log("Valor de bebida:", bebida);

    if (parseInt(bebida) !== 5) {
      if (edad < 18 && parseInt(bebida) == 3) {
        alert("🔞"+nombre.toUpperCase() + " Es menor de edad, no puede tomar cerveza🔞");
        console.log("🔞Es menor de edad, no puede tomar cerveza🔞");
      }
      else{
        console.log(nombre.toUpperCase() + " pidió para tomar la opción " + menuBebida[parseInt(bebida)].nombre);
        sumaBebida += menuBebida[parseInt(bebida)].precio;
      }
    }

    /*if (edad < 18 && parseInt(bebida) == 3) {
      alert("🔞"+nombre.toUpperCase() + " Es menor de edad, no puede tomar cerveza🔞");
      console.log("🔞Es menor de edad, no puede tomar cerveza🔞");
    }*/
  } while (parseInt(bebida) !== 5);
}

function imprimirSubtotal(nombre, tipo, subtotal) {
  console.log(`💰Subtotal de ${tipo} para ${nombre}: ${subtotal}`);
}

function imprimirMensajeFinal(subtotalComida, subtotalBebida) {
  if (subtotalComida || subtotalBebida > 0) {
    document.querySelector("img").src = "img/OIG (1).jpg";
    document.querySelector("h1").innerText = "Su pedido está preparandose!";
    document.querySelector("button").hidden = true;

    console.log("EL TOTAL A COBRAR ES 💵 💲" + (subtotalComida + subtotalBebida));
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

    obtenerComida(nombre);
    obtenerBebida(nombre, edad);

    imprimirSubtotal(nombre, "Comida", sumaComida);
    imprimirSubtotal(nombre, "Bebida", sumaBebida);

    subtotalComida += sumaComida;
    subtotalBebida += sumaBebida;
  }

  imprimirMensajeFinal(subtotalComida, subtotalBebida);
});
