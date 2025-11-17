<template>
  <div>
    <!-- Barra de navegação -->
    <nav>
      <div class="logo">MinhaApp</div>
      <button class="menu-toggle" @click="toggleMenu">☰</button>
      <div :class="['menu-links', { open: isOpen }]">
        <router-link to="/">Login</router-link>
        <router-link to="/cadastro">Cadastro</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/detalhes/1">Detalhes</router-link>
        <router-link to="/criar">Criar</router-link>
        <router-link to="/editar/1">Editar</router-link>
      </div>
    </nav>

    <!-- Área principal renderizada pelo Router -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
/* Barra de navegação */
nav {
  background: #333;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav .logo {
  font-weight: bold;
  font-size: 18px;
}

nav .menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

nav .menu-links {
  display: flex;
  gap: 15px;
}

nav .menu-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav .menu-links a:hover {
  text-decoration: underline;
}

/* Responsividade */
@media (max-width: 600px) {
  nav .menu-toggle {
    display: block;
  }

  nav .menu-links {
    display: none;
    flex-direction: column;
    background: #444;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    padding: 10px;
  }

  nav .menu-links.open {
    display: flex;
  }

  nav .menu-links a {
    margin: 10px 0;
  }
}
</style>
