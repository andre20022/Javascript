<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <strong>Idade é {{ idade }}</strong><br>
        <button @click="altera">Alterar idade</button>
        <button @click="func">Alterar idade (Callback function)</button>
    </div>
</template>

<script>

export default {
    props: {
        idade: {
            type: Number
        },
        func: {
            type: Function
        }
    },
    methods: {
        altera() {
            this.$emit("idadeMudou", 22);
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
