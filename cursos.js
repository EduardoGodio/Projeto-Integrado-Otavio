var botao1 = document.querySelector('#botao_curso1');
var hide1 = document.querySelector('#hide1');
var img1 = document.querySelector('#icone_curso1');

function mostrarOcultar1() {
botao1.addEventListener('click', function() {
    if (hide1.style.display === 'flex') {
        hide1.style.display = 'none', img1.src = 'olhooff.png';
    }else {
        hide1.style.display = 'flex', img1.src = 'olhoin.png';
    }
    })};

var botao2 = document.querySelector('#botao_curso2');
var hide2 = document.querySelector('#hide2');
var img2 = document.querySelector('#icone_curso2');
    
function mostrarOcultar2() {
botao2.addEventListener('click', function() {
    if (hide2.style.display === 'flex') {
        hide2.style.display = 'none', img2.src = 'olhooff.png';
    }else {
        hide2.style.display = 'flex', img2.src = 'olhoin.png';
    }
    })};