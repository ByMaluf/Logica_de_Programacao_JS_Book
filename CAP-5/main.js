const formulario = document.querySelector("form");
const saidaResposta = document.querySelector("pre");



const tabuada = (e) => {
  e.preventDefault();
  const numeroTabuada = formulario.numero.value;
  console.log(numeroTabuada)

  let resposta = ''
  
  for (let i = 1; i <= 10; i++) {

   resposta = ` ${resposta } \n ${numeroTabuada} x ${i} = ${numeroTabuada * i}`
   
  }

  saidaResposta.innerHTML = resposta


};


const botao = document.querySelector('input[type="submit"]').addEventListener('click', tabuada)