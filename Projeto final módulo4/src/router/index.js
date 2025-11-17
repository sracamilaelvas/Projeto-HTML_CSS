import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Dashboard from '../views/Dashboard.vue'
import Detalhes from '../views/Detalhes.vue'
import Criar from '../views/Criar.vue'
import Editar from '../views/Editar.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/cadastro', component: Cadastro },
  { path: '/dashboard', component: Dashboard },
  { path: '/detalhes/:id', component: Detalhes },
  { path: '/criar', component: Criar },
  { path: '/editar/:id', component: Editar }
]

export default createRouter({
  history: createWebHistory(),
  routes
})