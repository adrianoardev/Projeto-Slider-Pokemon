//OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista

// - PASSO 1 = Pegar o elemento HTML da seta avançar
//- PASSO 2 = Identificar o clique do usuario na seta avançar
//- PASSO 3 = Aparecer o próximo cartão da lista
//- PASSO 4 = Buscar o cartão que está selecionado e esconder

//OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o próximo cartão da lista

//- PASSO 1 = Pegar o elemento HTML da seta voltar
// - PASSO 2 = Identificar o clique do usuario na seta voltar
//- PASSO 3 = Aparecer o próximo cartão da lista
//- PASSO 4 = Buscar o cartão que está selecionado e esconder

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
