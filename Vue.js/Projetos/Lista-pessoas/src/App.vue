]<template>
	<div id="app">
		<h1 class="text-white">Tarefas</h1>
    <Progress :progress="progress" />
    <NewTask @addTask="capTask"/>
    <Grid @delTask="del" :tasks="tasks" @estChange="est" />
	</div>
</template>

<script>
import NewTask from '@/components/NewTask.vue';
import Grid from '@/components/TaskGrid.vue';
import Progress from '@/components/TaskProgress.vue';

export default {
  components: {
    Grid,
    NewTask,
    Progress
  },
  data() {
    return {
      tasks: []
    }
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter(t => !t.pending).length;
      return Math.round(done / total * 100) || 0;
    }
  },
  watch: {
    tasks: {
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
      deep: true
    }
  },
  methods: {
    capTask(task) {
      const verifique = t => t.name === task.name;
      const filtro = this.tasks.filter(verifique).length == 0;
      if(filtro){
        this.tasks.push({
          name: task.name,
          pending: task.pending || true
        });
      }
    },
    del(id){
      this.tasks.splice(id, 1);
    },
    est(id){
      this.tasks[id].pending = !this.tasks[id].pending;
    }
  },
  created () {
    const listTasks = localStorage.getItem("tasks");
    this.tasks = JSON.parse(listTasks) || [];
  }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
