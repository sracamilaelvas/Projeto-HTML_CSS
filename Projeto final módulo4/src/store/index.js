import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    tasks: [],
    theme: localStorage.getItem('theme') || 'light' // carrega do localStorage
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    addTask(state, task) {
      state.tasks.push(task)
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(t => t.id === updatedTask.id)
      if (index !== -1) state.tasks[index] = updatedTask
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', state.theme) // salva no localStorage
    }
  },
  getters: {
    getUser: state => state.user,
    getTasks: state => state.tasks,
    getTheme: state => state.theme
  }
})