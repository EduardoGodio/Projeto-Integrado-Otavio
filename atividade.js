const buttons = document.querySelectorAll('.questao');

function mudarCor() {
  buttons.forEach(button => {
    button.style.backgroundColor = '#739FD5';
  });
  
  this.style.backgroundColor = '#2172D6';
}

buttons.forEach(button => {
  button.addEventListener('click', mudarCor);
});
