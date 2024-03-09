<template>
    <div @click="$emit('estChange', task)" :class="stdClass" class="text-white">
        <span @click="$emit('delTask', task)" class="close">X</span>
        <p>{{ task.name }}</p>
    </div>
</template>
<script>
    export default {
        props: {
            task: {
                type: Object,
            }
        },
        computed: {
            stdClass(){
                return {
                    done: !this.task.pending, 
                    danger: this.task.pending
                };
            }
        }
    }
</script>

<style scoped>
    .task {
        width: 350px;
        height: 150px;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .danger {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done {
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        color: #DDD;
        text-decoration: line-through;
    }

    .danger .close {
        background-color: #B73229;
    }

    .done .close {
        background-color: #0A8F08;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: .9rem;
        font-weight: 600;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>