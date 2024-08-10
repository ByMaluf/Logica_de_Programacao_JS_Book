const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nomeFruta = form.querySelector('.fruta').value;
  const qtdFruta = +form.querySelector('.qtdFruta').value;
  const resultado = form.querySelector('.resposta');

  for (let i = 0; i <= qtdFruta; i++) {
    resultado.innerHTML += nomeFruta + ' * '
  }
});


