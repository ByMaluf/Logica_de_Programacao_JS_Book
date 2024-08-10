const form = document.querySelector('form');
const resultado = form.querySelector('.resposta');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let numeroDeChinchilas = +form.querySelector('.numChin').value;
  const qtdAnos = +form.querySelector('.qtdAnos').value;

  // if (!ValidacoesDeEntrada(numeroDeChinchilas)) {
  //   return;
  // }

  for (let i = 1; i <= qtdAnos; i++) {
    resultado.innerHTML += `${i}º Ano: ${numeroDeChinchilas} Chinchilas\n`;
    numeroDeChinchilas = numeroDeChinchilas * 3;
  }
});

// function ValidacoesDeEntrada(numeroDeChinchilas) {
//   if (numeroDeChinchilas < 2) {
//     resultado.innerHTML = `O Mínimo de 2 Chinchilas é requerido.`;
//     return false;
//   }
//   return true;
// }
