<template>
  <div class="container">
    <h1>Cadastro</h1>
    <form @submit.prevent="register">
      <input v-model="nome" type="text" placeholder="Nome" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="senha" type="password" placeholder="Senha" required />
      <button type="submit">Cadastrar</button>
    </form>
    <p>Já tem conta? <router-link to="/">Faça login</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      email: '',
      senha: ''
    }
  },
  methods: {
    register() {
      this.$store.commit('setUser', { nome: this.nome, email: this.email })
      this.$router.push('/dashboard')
    }
  }
}
</script>