<template>
  <div class="home-container">
    <div class="intro-section">
      <div class="text-content">
        <h1>Eu sou a Maria Eduarda Abreu,</h1>
        <h2>mas pode me chamar de Duda 😊</h2>
        
        <p class="graduation-text">
          Graduanda em 
          <a @click.prevent="showModal('ciência-computacao')" class="text-link">Ciência da Computação</a> pela 
          <a href="https://www.uerj.br" target="_blank" rel="noopener" class="text-link">Universidade do Estado do Rio de Janeiro</a>
        </p>

        <SocialIcons class="social-icons"/>
        
        <div class="bio-text">
          <p>
            Oie! Sou desenvolvedora de software com experiência em algumas tecnologias que você pode conferir nas minhas 
            <a href="#skills" class="text-link">Skills</a> ou 
            <a href="#" class="text-link" @click.prevent="abrirCurriculo">
              ver meu currículo <span class="download-icon"></span>
            </a>!
          </p>
        </div>
      </div>

      <ProfilePhoto class="profile-photo"/>
    </div>

    <div v-if="mostrarCurriculo" class="modal-curriculo" @click.self="fecharCurriculo">
      <div class="modal-content">
        <button class="close-btn" @click="fecharCurriculo">&times;</button>
        <object
          data="/curriculo.pdf#toolbar=0&navpanes=0"
          type="application/pdf"
          width="100%"
          height="500px"
          class="pdf-viewer"
        >
          <p>Seu navegador não suporta visualização de PDF. 
            <a href="/curriculo.pdf" download class="download-link">
              Clique para baixar
            </a>
          </p>
        </object>
        <a href="/curriculo.pdf" download class="download-btn">
          Baixar Currículo ⬇️
        </a>
      </div>
    </div>

    <Modal v-if="currentModal === 'ciência-computacao'" @close="hideModal">
      <img src="@/assets/grade.jpg" alt="Grade curricular" class="course-image"/>
    </Modal>
  </div>
</template>

<script>
import SocialIcons from '@/components/MeusIcones.vue'
import ProfilePhoto from '@/components/FotodePerfil.vue'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    SocialIcons,
    ProfilePhoto,
    Modal
  },
  data() {
    return {
      currentModal: null,
      mostrarCurriculo: false
    }
  },
  methods: {
    showModal(modalType) {
      this.currentModal = modalType
    },
    hideModal() {
      this.currentModal = null
    },
    abrirCurriculo() {
      this.mostrarCurriculo = true
    },
    fecharCurriculo() {
      this.mostrarCurriculo = false
    }
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2.5rem 5rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
  line-height: 1.6;
}

.intro-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;
  gap: 2rem;
}

.text-content {
  flex: 1;
  max-width: 55%;
  text-align: center;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #C0C0C0;
}

.graduation-text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #C0C0C0;
}

.bio-text {
  max-width: 800px;
  margin: 2rem auto 0;
  font-size: 1.2rem;
  color: #C0C0C0;
}

.text-link {
  color: #C0C0C0;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.text-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.download-icon {
  font-size: 0.8em;
  margin-left: 0.25rem;
}

.social-icons {
  margin: 1.5rem 0;
}

.profile-photo {
  flex: 1;
}

.profile-photo img {
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 1.5rem rgba(147, 51, 180, 0.7);
}

.course-image {
  max-width: 90%;
  max-height: 90vh;
  border: 2px solid #fff;
  box-shadow: 0 0 1.25rem rgba(0,0,0,0.5);
}


.modal-curriculo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(200, 180, 255, 0.85); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: rgba(255, 255, 255, 0.98);
  border-radius: 12px;
  width: 80%;
  max-width: 800px;
  position: relative;
  box-shadow: 
    0 0 0 1px rgba(147, 51, 180, 0.1), 
    0 10px 25px rgba(0, 0, 0, 0.05); 
  border: 1px solid rgba(147, 51, 180, 0.2); 
}

.pdf-viewer {
  border: 1px solid #685858;
  margin-bottom: 15px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.download-btn {
  display: block;
  background: #9333b4; 
  color: white;
  text-align: center;
  padding: 12px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;
  transition: all 0.3s ease;
  border: 2px solid #7b2cbf; 
}


.download-btn:hover {
  background: #7b2cbf; 
  transform: translateY(-2px);
}

.download-link {
  color: #9333b4; 
  font-weight: bold;
}


.close-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  background: #9333b4; 
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #7b2cbf; 
  transform: scale(1.1);
}

/* Ajustes para mobile */
@media (max-width: 768px) {
  .modal-content {
    width: 90%;
    padding: 15px;
  }
  
  .pdf-viewer {
    height: 60vh;
  }
  
  .download-btn {
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .home-container {
    padding: 1.25rem;
  }
  
  .intro-section {
    flex-direction: column;
  }
  
  .text-content {
    max-width: 100%;
    margin-bottom: 2rem;
    order: 2;
  }
  
  .profile-photo img {
    width: 18rem;
    height: 18rem;
    margin-bottom: 2rem;
  }
  
  .graduation-text,
  .bio-text {
    font-size: 1rem;
  }

  .modal-content {
    width: 95%;
    padding: 10px;
  }
  
  .pdf-viewer {
    height: 400px;
  }
}
</style>