var botao1 = document.querySelector("#pergunta1");
var hidep1 = document.querySelector("#hidep1");
var logo1 = document.querySelector("#pergunta1_logo");

function pergunta1() {
  botao1.addEventListener("click", function () {
    if (hidep1.style.display === "flex") {
      (hidep1.style.display = "none"), (logo1.src = "arrowoff.png");
    } else {
      (hidep1.style.display = "flex"), (logo1.src = "arrowin.png");
    }
  })
};

var botao2 = document.querySelector("#pergunta2");
var hidep2 = document.querySelector("#hidep2");
var logo2 = document.querySelector("#pergunta2_logo");

function pergunta2() {
  botao2.addEventListener("click", function () {
    if (hidep2.style.display === "flex") {
      (hidep2.style.display = "none"), (logo2.src = "arrowoff.png");
    } else {
      (hidep2.style.display = "flex"), (logo2.src = "arrowin.png");
    }
  })
};

var botao3 = document.querySelector("#pergunta3");
var hidep3 = document.querySelector("#hidep3");
var logo3 = document.querySelector("#pergunta3_logo");

function pergunta3() {
  botao3.addEventListener("click", function () {
    if (hidep3.style.display === "flex") {
      (hidep3.style.display = "none"), (logo3.src = "arrowoff.png");
    } else {
      (hidep3.style.display = "flex"), (logo3.src = "arrowin.png");
    }
  })
};