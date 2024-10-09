function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementsById('container');
    let cartao = document.createElement('article');
cartao.className = 'cartao';


cartao.innerHTML = `
<div class="cartao__conteudo>
<h3>${categoria}</h3>
<div class="cartao__conteudo__pergunta">
    <p>${resposta}</p>
</div>
<div class="cartao__conteudo__pergunta">
O JavaScript é uma linguagem de Programação
</div>
</div>
`
let respostaEstaVisivel=false;

function viraCartao(){
respostaEstaVisivel = !respostaEstaVisivel
cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener('click' viraCartao)

container.appendChild(cartao)
}

