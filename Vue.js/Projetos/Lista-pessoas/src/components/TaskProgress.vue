<template>
    <div :style="{width: '550px', 'margin-top': '10px'}">
        <span class="text-white fw-bold d-flex justify-content-center mb-2">Progresso</span>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" 
                :style="{width: progress + '%'}">{{ progress }}%
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            progress: {
                type: Number,
                default: 0
            },
        },
    }
</script>

<style scoped>

</style>