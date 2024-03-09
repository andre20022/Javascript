<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <strong>Nome é {{ nome }}</strong><br>
        <strong>Idade é {{ idade }}</strong><br>
        <button @click="alteraNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :func="nomeOriginal" 
                :nome="nome"
                @nomeMudou="(nomeRecebido) => nome = nomeRecebido.novo"
                :idade="idade"
            />
            <app-usuario-editar
                :idade="idade"
                @idadeMudou="(novaIdade) => idade = novaIdade"
                :func="idadeOriginal"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from '@/components/UsuarioInfo.vue'
import AppUsuarioEditar from '@/components/UsuarioEditar.vue'

export default {
    data() {
        return {
            nome: "Andre",
            idade: 21
        }
    },
    components: { AppUsuarioInfo, AppUsuarioEditar },
    methods: {
        alteraNome(){
            this.nome = "Andre silva do nascimento";
        },
        nomeOriginal(){
            this.nome = "Andre";
        },
        idadeOriginal(){
            this.idade = 21;
        } 
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
