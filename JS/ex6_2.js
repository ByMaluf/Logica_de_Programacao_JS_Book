

const frm = document.querySelector('form');
const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) => {

    const valorTempo = Number(frm.inValorTempo.value);
    const tempoUtilizado = Number(frm.inTempoUtilizado.value);

    const calculo = Math.ceil(tempoUtilizado/ 15) * valorTempo;


    resp.innerText = `Valor a pagar R$: ${calculo.toFixed(2)} reais`;

    e.preventDefault();

});
