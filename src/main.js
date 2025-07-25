import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'

async function initializeApp() {
  try {
    const app = createApp(App)
    
    app.use(router)

    await router.isReady()
    
    app.mount('#app')

    console.log('Aplicação inicializada com sucesso!')
    
    const loadingElement = document.getElementById('app-loading')
    if (loadingElement) {
      loadingElement.remove()
    }
  } catch (error) {
    console.error('Falha na inicialização da aplicação:', error)
    
    const appContainer = document.getElementById('app')
    if (appContainer) {
      appContainer.innerHTML = `
        <div class="error-init">
          <h2>Ocorreu um erro ao carregar a aplicação</h2>
          <p>Por favor, recarregue a página ou tente novamente mais tarde.</p>
        </div>
      `
    }
  }
}

initializeApp()