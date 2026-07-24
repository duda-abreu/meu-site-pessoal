<template>
  <div class="home-container">
    <div class="intro-section">
      <div class="text-content">
        <h2 class="typewriter-title" @mouseenter="embaralharTexto">
          <span class="typewriter-text">{{ textoDigitado }}</span><span class="blinking-cursor">_</span>
        </h2>
        
        <p class="graduation-text">
          Desenvolvedora de Software na
          <a
            href="https://www.seidor.com/pt-br"
            target="_blank"
            rel="noopener"
            class="text-link"
          >
            SEIDOR
          </a>
        </p>

        <SocialIcons class="social-icons"/>
        
        <div class="bio-text">
          <p>
            Oie! Aqui você pode conhecer um pouco da minha trajetória, explorar as minhas
            <router-link to="/skills" class="text-link">Skills</router-link> e conferir meu
            <a href="#" class="text-link" @click.prevent="abrirCurriculo">
              currículo<span class="download-icon"></span>
            </a>
          </p>
        </div>
      </div>

      <ProfilePhoto class="profile-photo"/>
    </div>

    <section id="experiencias" class="secao fade-in">
      <MinhasExperiencias />
    </section>

    <section id="skills" class="secao fade-in">
      <Tecnologias />
    </section>

    <section id="certificados" class="secao fade-in">
      <Certificados />
    </section>

    <div v-if="mostrarCurriculo" class="modal-curriculo" @click.self="fecharCurriculo">
      <div class="modal-content">
        <button class="close-btn" @click="fecharCurriculo">&times;</button>
        <object
          data="/CV - Maria Eduarda Abreu.pdf#toolbar=0&navpanes=0"
          type="application/pdf"
          width="100%"
          height="500px"
          class="pdf-viewer"
        >
          <p>Seu navegador não suporta visualização de PDF. 
            <a href="/CV - Maria Eduarda Abreu.pdf" download class="download-link">
              Clique para baixar
            </a>
          </p>
        </object>
        <a href="/CV - Maria Eduarda Abreu.pdf" download class="download-btn">
          Baixar Currículo ⬇️
        </a>
      </div>
    </div>

    <Modal v-if="currentModal === 'ciência-computacao'" @close="hideModal">
      <img src="@/assets/grade.jpg" alt="Grade curricular de Ciência da Computação" class="grade-image"/>
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
      mostrarCurriculo: false,
      textoCompleto: "Duda Abreu",
      textoDigitado: "",
      indexDigitacao: 0,
      animandoEmbaralhar: false
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
    },
    digitarTexto() {
      if (this.indexDigitacao < this.textoCompleto.length) {
        this.textoDigitado += this.textoCompleto.charAt(this.indexDigitacao);
        this.indexDigitacao++;
        setTimeout(this.digitarTexto, 120);
      }
    },
    embaralharTexto() {
      if (this.animandoEmbaralhar || this.textoDigitado.length < this.textoCompleto.length) return;
      
      this.animandoEmbaralhar = true;
      const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      let iteracao = 0;
      
      const interval = setInterval(() => {
        this.textoDigitado = this.textoCompleto
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteracao) return this.textoCompleto[idx];
            return caracteres[Math.floor(Math.random() * caracteres.length)];
          })
          .join("");

        if (iteracao >= this.textoCompleto.length) {
          clearInterval(interval);
          this.animandoEmbaralhar = false;
        }

        iteracao += 1 / 3;
      }, 30);
    },
    handleScroll() {
      const sections = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;
      const triggerOffset = windowHeight / 1.5; 
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerOffset) {
          section.classList.add('visible');
        }
      });
    }
  },

  mounted() {
    this.digitarTexto();
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); 
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
  margin-bottom: 10px; 
}

.intro-section,
.secao {
  padding: 30px 0; 
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

#experiencias {
  padding-bottom: 15px;
}

#skills {
  padding-top: 15px;    
  padding-bottom: 15px; 
}

#certificados {
  padding-top: 15px;    
  padding-bottom: 40px; 
}

.secao.visible {
  opacity: 1;
  transform: translateY(0);
}

.text-content {
  flex: 1;
  max-width: 55%;
  text-align: left;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: #C0C0C0;
}

.typewriter-title {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
  display: inline-block;
  cursor: pointer; 
  user-select: none;
}

.blinking-cursor {
  display: inline-block;
  color: #ffffff;
  font-weight: bold;
  animation: piscar 0.8s infinite;
  margin-left: 2px;
}

@keyframes piscar {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
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

.text-link,
.graduation-text a,
.bio-text a {
  color: #C0C0C0;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: inline-block; 
  transition: all 0.3s ease;
  transform-origin: center; 
}

.text-link:hover,
.graduation-text a:hover,
.bio-text a:hover {
  color: #ffffff;
  transform: scale(1.02); 
}

.text-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  transition: width 0.3s ease;
  transform: scale(1.1);
}

.text-link:hover::after {
  width: 100%;
  transform: scale(1.1);
}

.download-btn,
.close-btn {
  transition: all 0.3s ease;
  transform-origin: center;
}

.download-btn:hover {
  background: #a3a3a3;
  transform: scale(1.05); 
}

.social-icons a:hover img {
  transform: scale(1.1); 
}

.graduation-text a:hover {
  border-bottom-color: transparent;
}

.download-icon {
  font-size: 0.8em;
  margin-left: 0.25rem;
}

.social-icons {
  margin: 1.5rem 0;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  width: 100%;
}

@media (max-width: 768px) {
  .social-icons {
    justify-content: center; 
  }
}

.profile-photo {
  flex: 1;
}

.profile-photo img {
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 1.5rem rgba(240, 240, 240, 0.7);
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
  background: transparent; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none; 
}

.modal-content {
  background: transparent; 
  border-radius: 12px;
  width: 80%;
  max-width: 800px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
  pointer-events: auto; 
}

.pdf-viewer {
  border: 1px solid #6d6b6b;
  margin-bottom: 15px;
}

.modal-grade {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}

.grade-image {
  max-width: 100%;
  max-height: 70vh;
  border-radius: 4px;
  object-fit: contain;
}

.modal-grade-container {
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

.download-btn {
  display: block;
  background: #585558; 
  color: white;
  text-align: center;
  padding: 12px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;
  transition: all 0.3s ease;
  border: 2px solid #0d0d0e; 
}

.download-link {
  color: #0c0c0c; 
  font-weight: bold;
}

.close-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  background: #ffffff; 
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
  background: #2c2c2c; 
  transform: scale(1.1);
}

/* Ajustes para mobile */
@media (max-width: 768px) {
  .home-container {
    padding: 1.25rem;
  }

  .intro-section {
    flex-direction: column;
    margin-bottom: 30px;
  }
  
  .text-content {
    max-width: 100%;
    margin-bottom: 2rem;
    order: 2;
    text-align: center;
  }
  
  .profile-photo img {
    width: 18rem;
    height: 18rem;
    margin-bottom: 2rem;
  }

  .secao {
    padding: 30px 0;
  }
  
  #experiencias,
  #skills,
  #certificados {
    padding-top: 15px;
    padding-bottom: 15px;
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