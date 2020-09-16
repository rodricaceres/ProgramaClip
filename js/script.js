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
    adivinanza = document.querySelector(".adivinanza"),
    respuestaCorrecta =
      "El Apple I fue uno de los primeros computadores personales, y el primero en combinar un microprocesador con una conexión para un teclado y un monitor. Fue diseñado y hecho a mano por Steve Wozniak originalmente para uso personal. Un amigo de Steve Wozniak, Steve Jobs, tuvo la idea de vender el computador. Fue el primer producto de Apple, demostrado el 1 de abril de 1976 en el Homebrew Computer Club en Palo Alto, California.";
  cont = 0;

  function resultadoTexto(resultado, cantIntentos) {
    if (cantIntentos != undefined) {
      if (cantIntentos === 3) {
        resultado[0].innerHTML =
          "Incorrecto, te queda " + cantIntentos + " intentos ";
      }
      if (cantIntentos === 2) {
        resultado[0].innerHTML =
          "Incorrecto, te queda " +
          cantIntentos +
          " intentos </br> Pista: Fue diseñada por Steve Wozniak, mejor conocido como Woz, el cofundador de Apple.";
      }
      if (cantIntentos === 1) {
        resultado[0].innerHTML =
          "Incorrecto, te queda " +
          cantIntentos +
          " intentos </br> Pista: Su nombre es 'Apple I'";
      }
    } else {
      resultado[0].innerHTML =
        "Incorrecto, ¡cantidad de intentos agotados! </br> </br>" +
        respuestaCorrecta;
      probar.innerHTML = "Intentar de nuevo!";
      respuesta.classList.add("respuesta");
    }
  }

  probar.onclick = function () {
    if (adivinanza.classList.contains("reset")) {
      location.reload();
    }

    var flag = true,
      intentar = false,
      respuestaUsr = document.getElementById("respuesta").value;

    if (respuestaUsr === "1976") {
      resultado[0].innerHTML = "Correcto!! " + respuestaCorrecta;
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
    if (intentar) {
      adivinanza.classList.add("reset");
    }
  };
}

main();
