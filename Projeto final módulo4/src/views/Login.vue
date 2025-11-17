<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="senha" type="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
    <p>Não tem conta? <router-link to="/cadastro">Cadastre-se</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    login() {
      this.$store.commit('setUser', { email: this.email })
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
/* estilos específicos se necessário */
</style>