new Vue({
    el: "#app",
    data:{
        lifeMost: 100,
        lifePlay: 100,
        iniciar: false,
        logs: []
    },
    computed: {
        hasResult() {
            return this.lifeMost === 0 || this.lifePlay === 0;
        }
    },
    methods: {
        iniciarJogo() {
            this.iniciar = true;
            this.lifeMost = 100;
            this.lifePlay = 100;
            this.logs = [];
        },
        finalizarJogo() {
            this.iniciar = false;
        },
        atacar(especial){
            this.dano('lifeMost', 5, 10, especial, "Jogador", "Monstro", "bg-info");
            if(this.lifeMost > 0){
                this.dano('lifePlay', 7, 12, false, "Monstro", "Jogador", "bg-danger");
            }
        },
        dano(prop, max, min, especial, atacou, recebeu, cls){
            const plus = especial ? 5 : 0;
            const dano = this.radom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - dano, 0);
            this.registraLog(`${atacou} atingiu ${recebeu} com ${dano}`, cls);
        },
        guardaAberta(){
            this.cura(10, 15);
            this.dano('lifePlay', 7, 12, false, "Monstro", "Jogador", "bg-danger");
        },
        cura(min, max){
            const cura = this.radom(min, max);
            this.lifePlay = Math.min(this.lifePlay + cura, 100);
            this.registraLog(`O jogador ganhou pontos ${cura} de vida`, "bg-info");
        },
        radom(max, min){
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        registraLog(acao, cls){
            this.logs.unshift({acao, cls});
        }
    },
    watch: {
        hasResult(value) {
            if(value){
                this.iniciar = false;
            }
        }
    },
})