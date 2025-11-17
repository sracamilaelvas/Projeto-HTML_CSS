<template>
  <div class="container">
    <h1>Criar Tarefa</h1>
    <form @submit.prevent="createTask">
      <input v-model="title" type="text" placeholder="Título" required />
      <textarea v-model="description" placeholder="Descrição"></textarea>
      <button type="submit">Salvar</button>
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
  methods: {
    createTask() {
      const newTask = {
        id: Date.now(),
        title: this.title,
        description: this.description
      }
      this.$store.commit('addTask', newTask)
      this.$router.push('/dashboard')
    }
  }
}
</script>