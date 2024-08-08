const formulario = document.querySelector("form");
formulario.classList.add("container");
    
const mediaDoAluno = function (e) {
  const nomeDoAluno = formulario.querySelector("#nomeAluno").value;
  const notasDoAluno = formulario.querySelectorAll(".numeros");
  const mediaDoAluno = formulario.querySelector("h3");
  const mensagemAluno = formulario.querySelector("h4");

  let notaTotal = 0;
  notasDoAluno.forEach((nota) => {
    let conversao = +nota.value; //Converte string em number
    notaTotal = notaTotal + conversao;
  });

  const media = notaTotal / notasDoAluno.length;
  mediaDoAluno.innerText = `Média das notas: ${media}`;

  mensagemAluno.classList.remove("azul"); // Remove a classe "azul"
  mensagemAluno.classList.remove("vermelho"); // Remove a classe "vermelho"

  if (media >= 7) {
    mensagemAluno.classList.add("azul");
    mensagemAluno.innerText = `Parabéns ${nomeDoAluno}! Você foi Aprovado(a)`;
  } else {
    mensagemAluno.classList.add("vermelho");
    mensagemAluno.innerText = `Estude mais ${nomeDoAluno}! Você foi Reprovado(a)`;
  }
  e.preventDefault();
};

document.querySelector("button").addEventListener("click", mediaDoAluno);
