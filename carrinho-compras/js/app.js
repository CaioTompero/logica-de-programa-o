let totalGeral;
limpar();
function adicionar(){
//recuperar valores nome do produto, quantidade e valor

let produto = document.getElementById('produto').value;
let nomeProduto = produto.split ('-')[0];
let valorUnitario = produto.split ('R$')[1];
let quantidade = document.getElementById('quantidade').value;
//calcular preço subtotal 
let preco = quantidade * valorUnitario
let carrinho = document.getElementById('lista-produtos');
//adicionar no carrinhho
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
</section>`;
//atuzalizar total geral
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = ''; 



//calcular preço, subtotal
//adicionar no carrinho
//atualizar o valor total

}

function limpar(){
    let totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';    
    document.getElementById('valor-total').textContent = 'R$ 0 '; 


}