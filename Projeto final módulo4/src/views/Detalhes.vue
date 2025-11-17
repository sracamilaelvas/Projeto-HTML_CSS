<template>
  <div class="container" v-if="task">
    <h1>Detalhes da Tarefa</h1>
    <p><strong>Título:</strong> {{ task.title }}</p>
    <p><strong>Descrição:</strong> {{ task.description }}</p>
    <button @click="$router.push(`/editar/${task.id}`)">Editar</button>
    <p><router-link to="/dashboard">Voltar ao Dashboard</router-link></p>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      const id = this.$route.params.id
      return this.$store.getters.getTasks.find(t => t.id == id)
    }
  }
}
</script>