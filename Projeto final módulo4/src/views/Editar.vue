<template>
  <div class="container" v-if="task">
    <h1>Editar Tarefa</h1>
    <form @submit.prevent="updateTask">
      <input v-model="title" type="text" required />
      <textarea v-model="description"></textarea>
      <button type="submit">Atualizar</button>
    </form>
    <p><router-link to="/dashboard">Cancelar</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: ''
    }
  },
  computed: {
    task() {
      const id = this.$route.params.id
      return this.$store.getters.getTasks.find(t => t.id == id)
    }
  },
  mounted() {
    if (this.task) {
      this.title = this.task.title
      this.description = this.task.description
    }
  },
  methods: {
    updateTask() {
      const updatedTask = {
        id: this.task.id,
        title: this.title,
        description: this.description
      }
      this.$store.commit('updateTask', updatedTask)
      this.$router.push('/dashboard')
    }
  }
}
</script>