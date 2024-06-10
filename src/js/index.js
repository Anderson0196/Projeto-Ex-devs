/* 


    - Passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar
    - Passo 3 - Fazer aparecer o próximo cartão da lista
    - Passo 4 - Buscar o cartão que está selecionado e esconder

OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    Passo 1- Dar um jeito de pegar o elemento HTML da seta voltar
    Passo 2 - Dar um jeito de identificar o clique do usúario na seta voltar
    Passo 3 - Fazer aparecer o cartão anterior da lista
    Passo 4 - Buscar o cartão que está selecionado e esconder
    
    
*/

// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartão da lista
 //   - Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar

const btnAvancar = document.getElementById("btn-avancar");
//    Passo 1- Dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//     - Passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar

btnAvancar.addEventListener("click", function(){
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

    //     - Passo 4 - Buscar o cartão que está selecionado e esconder

    escondercartaoSelecionado();

    //     - Passo 3 - Fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele

    
    cartaoAtual++;
    mostrarCartao();



});

// OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista

    //     Passo 2 - Dar um jeito de identificar o clique do usúario na seta voltar

btnVoltar.addEventListener("click", function() {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;

    //     Passo 4 - Buscar o cartão que está selecionado e esconder

    esconderCartaoSelecionado();

    //     Passo 3 - Fazer aparecer o cartão anterior da lista

    cartaoAtual --;
    mostrarCartao();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function escondercartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
