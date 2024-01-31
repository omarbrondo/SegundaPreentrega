let botonPedido = document.querySelector("button");

let sumaComida = 0;
let sumaBebida = 0;
let subtotalComida = 0;
let subtotalBebida = 0;
alert("⚠️INSTRUCCIONES⚠️\n ANTES DE HACER CLIC EN EL BOTON NARANJA, ABRIR LA CONSOLA");
botonPedido.addEventListener("click", function () {
  console.log("⚠️ATENCIÓN COCINEROS! HAY UN NUEVO CLIENTE!⚠️")
  let personas = prompt("¿Cuantas personas son? 👨‍👩‍👦‍👦 ");

  for (let i = 0; i < personas; i++) {
    
    let nombre = prompt("Nombre de la persona " + (parseInt(i) + 1));
    console.log("Menu para " + nombre);
    let edad = prompt("¿Edad de " + nombre + "?");

    let comida;

    do {
      comida = prompt(
        "¿Qué comerá hoy " +
          nombre +
          "? \n Seleccione Comida \n 1) Hamburguesa con queso 🍔💲4000  \n 2) Ensalada 🥗💲3000  \n 3) Arroz con pollo 🍚💲2000  \n 4) Listo! ✅"
      );

      if (parseInt(comida) !== 4) {
        console.log(nombre + " pidió para comer la opción " + comida);
      }

      switch (parseInt(comida)) {
        case 1:
          sumaComida += 4000;
          break;
        case 2:
          sumaComida += 3000;
          break;
        case 3:
          sumaComida += 2000;
          break;
        case 4:
          alert("Perfecto! Ahora hay que elegir las bebidas 😜");
          break;
        default:
          alert("❌No existe esa comida❌😐");
          break;
      }
    } while (parseInt(comida) !== 4);

    let bebida;

    do {
      bebida = prompt(
        "¿Que beberá " +
          nombre +
          "?\n 1) Vaso de agua 🥛💲0  \n 2) Gaseosa 🥤💲500  \n 3) Cerveza 🍺💲2000  \n 4) Mate 🧉💲20  \n 5) Listo!✅ \n"
      );
      if (parseInt(bebida) !== 5) {
        console.log(nombre + " pidió para tomar la opción " + bebida);
      }
      if(edad<18 && parseInt(bebida) == 3){
        console.log("Es menor de edad, no puede tomar cerveza");
      }

      switch (parseInt(bebida)) {
        case 1:
          sumaBebida += 0;
          break;
        case 2:
          sumaBebida += 500;
          break;
        case 3:
          if (edad >= 18) {
            sumaBebida += 2000;
          } else {
            alert(nombre + " NO TIENE LA EDAD PARA TOMAR CERVEZA!🔞");
          }
          break;
        case 4:
          sumaBebida += 20;
          break;
        case 5:
          alert("😁 SU PEDIDO YA FUE REGISTRADO! 😁");
          break;
        default:
          alert("❌No existe esa bebida❌ 😐");
          break;
      }
    } while (parseInt(bebida) !== 5);

    console.log("💰Subtotal de Comida para " + nombre + ": " + sumaComida);
    console.log("💰Subtotal de Bebida para " + nombre + ": " + sumaBebida);

    subtotalComida += sumaComida;
    subtotalBebida += sumaBebida;
  }
  if(subtotalComida || subtotalBebida >0){

  
  document.querySelector("img").src = "img/OIG (1).jpg";
  document.querySelector("h1").innerText = "Su pedido está preparandose!";
  document.querySelector("button").hidden = true;

  console.log("EL TOTAL A COBRAR ES 💵 💲" + (subtotalComida + subtotalBebida));
  }
  else{
    document.querySelector("img").src = "img/OIG (2).jpg";
    document.querySelector("h1").innerText = "Que lastima que te vas sin comer nada!";
    document.querySelector("button").hidden = true;
    console.log("El cliente se va sin consumir");
  }
});
