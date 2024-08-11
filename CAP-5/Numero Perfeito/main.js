const form = document.querySelector('form');
const resultado = document.querySelector('.resposta');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = +form.num.value;
  let total = 0;

  resultado.innerHTML += `Números divisíveis: `

  for (let i = 1; numero > i; i++) {
    if (numero % i === 0) {
      total += i
      resultado.innerHTML += `${i} - `
    }
  }

  if (total === numero) {
    resultado.innerHTML += `\nTotal = ${total}\n${numero} é um número perfeito.`
  } else {
    resultado.innerHTML += `\nTotal = ${total}\n${numero} NÃO é um número perfeito.`
  }
})
