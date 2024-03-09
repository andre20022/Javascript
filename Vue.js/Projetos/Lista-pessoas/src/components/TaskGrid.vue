<template>
    <div class="tasks">
        <Task v-if="tasks.length > 0" class="task" v-for="(task, index) in tasks"
            :key="task.name" :task="task"
            @delTask="() => this.$emit('delTask', index)"
            @estChange="$emit('estChange', index)"
        />
        <p v-else class="no-task">Sua vida está em dia :)</p>
    </div>
</template>

<script>
import Task from '@/components/Task.vue';
export default {
    components: {
        Task
    },
    props: {
        tasks: { type: Array, required: true }
    }
}
</script>

<style scoped>
    .tasks {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .tasks .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>