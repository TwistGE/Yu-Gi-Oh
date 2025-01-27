
const avancar = (document.getElementById("seta-avancar"));

const voltar = (document.getElementById("seta-voltar"))

var numeroCartao = 0;


avancar.addEventListener("click", function(){
    if (numeroCartao < cartoes.length-1){
        numeroCartao += 1;
        cartoes[numeroCartao-1].classList.remove("selecionado")
        cartoes[numeroCartao].classList.add("selecionado")
        console.log(numeroCartao)
        console.log(cartoes[numeroCartao].classList)
    }
});

voltar.addEventListener("click", function(){
    if (numeroCartao > 0){
        numeroCartao -= 1;
        cartoes[numeroCartao+1].classList.remove("selecionado")
        cartoes[numeroCartao].classList.add("selecionado")
        console.log(numeroCartao)
        console.log(cartoes[numeroCartao].classList)
    }
});



const cartoes = document.querySelectorAll(".cartao");
