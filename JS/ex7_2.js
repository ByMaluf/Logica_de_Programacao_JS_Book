

const frm = document.querySelector('form');
const resp1 = document.getElementById('outResp1');
const resp2 = document.querySelector('#outResp2');


frm.addEventListener("submit", (e) => {

    const nome = frm.inProduto.value;
    const valor = frm.inPrecoProduto.value;

    const terceiroProduto = (valor / 2); 
    const valorTotal = valor * 2 + terceiroProduto;

    resp1.innerText = `Creme Dental - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)} reais`;
    resp2.innerText = `O 3º Produto custa apenas R$: ${terceiroProduto.toFixed(2)} reais`;

    e.preventDefault();
});