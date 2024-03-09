<template>
    <div class="margin-element">
        <input class="form-element" v-model="name" @keydown.enter="add" type="text" name="" id="">
        <button class="form-element" @click="add">+</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: ""
            }
        },
        methods: {
            add() {
                this.$emit("addTask", {name: this.name});
                this.name = '';
            }
        }
    }
</script>

<style scoped>
    .margin-element {
        margin: 18px 35px 35px 35px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: #fff;
    }

    input.form-element {
        width: 500px;
        background: #fff2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>