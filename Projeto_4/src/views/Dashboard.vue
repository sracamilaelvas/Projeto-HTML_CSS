<template>
  <div class="container">
    <h1>Minhas Tarefas</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <router-link :to="`/detalhes/${task.id}`">{{ task.title }}</router-link>
      </li>
    </ul>
    <button @click="$router.push('/criar')">Criar Nova Tarefa</button>
    <p><router-link to="/">Sair</router-link></p>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.getTasks
    }
  }
}
</script>