var botao1 = document.querySelector("#botao_curso1");
var hide1 = document.querySelector("#hide1");
var img1 = document.querySelector("#icone_curso1");

function mostrarOcultar1() {
  botao1.addEventListener("click", function () {
    if (hide1.style.display === "flex") {
      (hide1.style.display = "none"), (img1.src = "olhooff.png");
    } else {
      (hide1.style.display = "flex"), (img1.src = "olhoin.png");
    }
  })
};

var botao2 = document.querySelector("#botao_curso2");
var hide2 = document.querySelector("#hide2");
var img2 = document.querySelector("#icone_curso2");

function mostrarOcultar2() {
  botao2.addEventListener("click", function () {
    if (hide2.style.display === "flex") {
      (hide2.style.display = "none"), (img2.src = "olhooff.png");
    } else {
      (hide2.style.display = "flex"), (img2.src = "olhoin.png");
    }
  })
};

var botaoMaterial1 = document.querySelector("#botao_material1");

function irMaterial1() {
  botaoMaterial1.addEventListener("click", function () {
    window.location.href = "material.html";
  })
};

var botaoAtividade1 = document.querySelector('#botao_atividade1');

function irAtividade1() {
    botaoAtividade1.addEventListener("click", function() {
        window.location.href = "atividade.html";
    })
};

var botaoMaterial2 = document.querySelector("#botao_material2");

function irMaterial2() {
  botaoMaterial2.addEventListener("click", function () {
    window.location.href = "material.html";
  })
};

var botaoAtividade2 = document.querySelector('#botao_atividade2');

function irAtividade2() {
    botaoAtividade2.addEventListener("click", function() {
        window.location.href = "atividade.html";
    })
};
