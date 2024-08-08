

const frm = document.querySelector("form");

const resp1 = document.querySelector("h3");

const resp2 = document.querySelector("h4");


frm.addEventListener("submit", (e) => {

    const nome = frm.inTitulo.value;

    const tempo = Number(frm.inDuracao.value);

    const horas =  Math.floor(tempo / 60);
    const minutos = tempo % 60;

    resp1.innerText = `Nome do filme: ${nome}`;

    resp2.innerText = `Duração de ${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault();





});