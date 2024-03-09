<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome: {{ nome }}</p>
        <strong>Idade é {{ idade }} -  altura {{ altura }}</strong><br>
        <button @click="reinicializa">Voltar nome</button>
        <button @click="func">Voltar nome (Callback function)</button>
    </div>
</template>

<script>

export default {
    // os dados podem ser passados para o pai por meio de emissão de evento OU 
    // por utilização de função passada pelo pai
    props: {
        nome: {
            type: String,
            // required: true,
            default: "Anonimo"
        },
        idade: {
            type: Number
        },
        func: {
            type: Function
        }
    },
    data() {
        return {
            altura: "1.70"
        }
    },
    methods: {
        reinicializa() {
            const dados = {
                novo: 'Andre',
                antigo: this.nome
            };
            this.$emit("nomeMudou", dados);
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
