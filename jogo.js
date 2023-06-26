(function iniciaJogo(){

    let url = window.location.search;
    let params = new URLSearchParams(url);
    let nivel = params.get("nivel");
    let tempo_segundos = 0;

    switch(nivel){
        case "1":
            tempo_segundos = 120;
        break;
        case "2":
            tempo_segundos = 60;
        break;
        case "3":
           tempo_segundos = 30;
        break;
    }

    document.querySelector("#numero_segundos").innerHTML = tempo_segundos;
    let qtde_baloes = 30;
    cria_balao(qtde_baloes);
    document.querySelector("#baloes_estourados").innerHTML = 0;
    document.querySelector("#qtde_baloes").innerHTML = qtde_baloes;

    contagem_segundos(tempo_segundos);
    
})();

var TimerId = null;
function contagem_segundos(segundos){

   if(segundos == -1){
        clearTimeout(TimerId);
        game_over();
        return false;
   }
   document.querySelector("#numero_segundos").innerHTML = segundos;
   segundos = segundos - 1;
   TimerId = setTimeout("contagem_segundos("+segundos+")", 1000);

}

function game_over(){

    let baloes = document.querySelectorAll(".balao");
    baloes.forEach(function(element){
        element.setAttribute("onclick", false);
    });
    alert("Que pena voce perdeu o jogo");

}

function para_jogo(){
    clearTimeout(TimerId);
}

function cria_balao(qtde_baloes){

    for(let i = 1;i <= qtde_baloes; i++){

        let balao = document.createElement("img");
        balao.src = "imagens/balao_azul_pequeno.png";
        balao.style.display = "inline-block";
        balao.style.margin = "10px";
        balao.id = "b" + i;
        balao.classList.add("balao");
        balao.onclick = function(){
            estorar(this);
        };
        document.querySelector("#cenario").appendChild(balao);

    }

}

function estorar(element){

    let id_balao = element.id;
    element.setAttribute("onclick", false);
    document.querySelector("#"+id_balao).src = "imagens/balao_azul_pequeno_estourado.png";
    pontuacao();

}

function situacao_jogo(baloes_inteiros){
    
    if(baloes_inteiros == 0){

        alert("Voce conseguiu ganhar o jogo, parabéns");
        para_jogo();

    }

}

function pontuacao(){

    let baloes_inteiros = document.querySelector("#qtde_baloes").innerHTML;
    let baloes_estourados = document.querySelector("#baloes_estourados").innerHTML;
    baloes_inteiros = parseInt(baloes_inteiros);
    baloes_estourados = parseInt(baloes_estourados);
    baloes_inteiros = baloes_inteiros - 1;
    baloes_estourados = baloes_estourados + 1;

    document.querySelector("#qtde_baloes").innerHTML = baloes_inteiros;
    document.querySelector("#baloes_estourados").innerHTML = baloes_estourados;
    situacao_jogo(baloes_inteiros);

}










