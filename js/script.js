// Botón menú
var menuBtn = document.querySelector(".menu-icon"),
  menu = document.querySelector(".navigation ul"),
  logo = document.querySelector(".logo"),
  container = document.querySelector(".tienda");

menuBtn.onclick = function () {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    logo.classList.remove("show-logo");
    container.classList.remove("show-container");
  } else {
    menu.classList.add("show");
    logo.classList.add("show-logo");
    container.classList.add("show-container");
  }
};

// Carrusel de productos
window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });
});

// Adivinanza
function main() {
  var probar = document.querySelector(".probar"),
    resultado = document.getElementsByClassName("resultado"),
    respuesta = document.getElementById("respuesta"),
    cont = 0;

  function resultadoTexto(resultado, cantIntentos) {
    if (cantIntentos != undefined) {
      resultado[0].innerHTML =
        "Incorrecto, te queda " + cantIntentos + " intentos";
    } else {
      resultado[0].innerHTML = "Incorrecto, cantidad de intentos agotados";
      probar.innerHTML = "Intentar de nuevo!";
      respuesta.classList.add("respuesta");
    }
  }

  probar.onclick = function () {
    if (intentar) {
      console.log("hola");
    }
    var flag = true,
      intentar = false,
      respuestaUsr = document.getElementById("respuesta").value;
    if (respuestaUsr === "2") {
      resultado[0].innerHTML = "Correcto!!";
      respuesta.classList.add("respuesta");
      probar.innerHTML = "Intentar de nuevo!";
      flag = false;
      intentar = true;
    } else {
      cont += 1;
    }

    let cantIntentos = 4 - cont;
    if (cont < 4 && flag) {
      resultadoTexto(resultado, cantIntentos);
    } else if (cont >= 4 && flag) {
      resultadoTexto(resultado);
      intentar = true;
    }
  };
}
main();
