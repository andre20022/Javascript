new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta: function(){
            alert('Voce clicou no botão');
        },
        coletaValor: function(event){
            this.valor = event.target.value;
        }
    }
})