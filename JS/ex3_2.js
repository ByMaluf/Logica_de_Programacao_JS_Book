
const frm = document.querySelector("form");

const resp1 = document.querySelector("#OutResp1");
const resp2 = document.querySelector("#OutResp2");
const resp3 = document.querySelector("#OutResp3");

frm.addEventListener("submit", (e) => {

    const veiculo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value);

    const desconto50 = preco / 2;
    const parcelado12 = desconto50 / 12;


    resp1.innerText = `Promoção: ${veiculo}`;
    resp2.innerText = `Entrada de R$: ${desconto50.toFixed(2)} reais`;
    resp3.innerText = `+12x de R$: ${parcelado12.toFixed(2)} reais`;

    e.preventDefault();


});