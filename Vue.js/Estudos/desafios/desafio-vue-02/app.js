new Vue({
	el: '#desafio',
	data: {
		evento: '',
		visualiza: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
	},
	methods: {
		troca() {
			let evento = setInterval(() => {
				this.visualiza = !this.visualiza
			}, 1000);
            this.evento = evento;
		},
		parar(){
			if(this.evento != ''){
				clearInterval(this.evento);
			}
		}
	}, 
});
