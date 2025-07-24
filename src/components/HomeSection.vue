<template>
  <div class="home-container">
    <div class="intro-section">
      <div class="text-container">
        <h1>Eu sou a Maria Eduarda Abreu,</h1>
        <h2>mas pode me chamar de Duda</h2>
        <h3>😊</h3>
        <p>
          Graduanda em
          <a @click.prevent="abrirModal('ciência-computacao')" class="link">Ciência da Computação</a> pela 
          <a href="https://www.uerj.br" target="_blank" rel="noopener noreferrer" class="link">Universidade do Estado do Rio de Janeiro</a>
        </p>
        
        <div class="icons">
          <MeusIcones 
            linkedinUrl="https://www.linkedin.com/in/mariaeduardaabreu/" 
            githubUrl="https://github.com/duda-abreu"
            whatsappUrl="https://wa.me/5521970923247?text=Olá, gostaria de saber mais sobre seu trabalho"
            gmailUrl="mailto:mariaedrdabreu@gmail.com?subject=Olá&body=Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho"
          />
        </div>
        
        <!-- Seção "Oie!" exatamente como no seu exemplo -->
        <div class="sobre-texto">
          <p class="intro-texto">
            Oie! Sou desenvolvedora de software com experiência em algumas tecnologias que você pode conferir nas minhas 
            <a href="#skills" class="link">Skills</a>
            ou olhar meu 
            <span @click="abrirCurriculo" class="link">currículo</span>!
          </p>
        </div>
      </div>
      
      <div class="photo-container">
        <FotodePerfil />
      </div>
    </div>

    <!-- Modal Currículo -->
    <div v-if="mostrarCurriculo" class="modal" @click.self="fecharCurriculo" role="dialog" aria-modal="true">
      <img :src="require('@/assets/curriculo.jpg')" alt="Currículo" />
      <span class="close" @click="fecharCurriculo" aria-label="Fechar">&times;</span>
    </div>

    <!-- Modal Ciência da Computação -->
    <dialog v-if="mostrarModal === 'ciência-computacao'" ref="modalCienciaComp" class="modal" @click.self="fecharModal">
      <img :src="require('@/assets/grade.jpg')" alt="Grade Curricular" />
      <button class="close" @click="fecharModal">&times;</button>
    </dialog>
  </div>
</template>

<script>
import MeusIcones from '@/components/MeusIcones.vue';
import FotodePerfil from '@/components/FotodePerfil.vue';

export default {
  components: {
    MeusIcones,
    FotodePerfil
  },
  data() {
    return {
      mostrarModal: null,
      mostrarCurriculo: false
    };
  },
  methods: {
    abrirModal(tipo) {
      this.mostrarModal = tipo;
      this.$nextTick(() => {
        if (this.$refs.modalCienciaComp) {
          this.$refs.modalCienciaComp.showModal();
        }
      });
    },
    fecharModal() {
      this.mostrarModal = null;
    },
    abrirCurriculo() {
      this.mostrarCurriculo = true;
    },
    fecharCurriculo() {
      this.mostrarCurriculo = false;
    }
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 40px 80px;
  box-sizing: border-box;
}

.intro-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;
}

.text-container {
  flex: 1;
  max-width: 55%;
  text-align: center;
  padding-left: 0;
}

.icons {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.sobre-texto {
  max-width: 800px;
  margin: 30px auto 0;
}

.intro-texto {
  font-size: 1.2em;
  line-height: 1.6;
  color: #C0C0C0;
  margin-bottom: 60px;
}

.link {
  color: #C0C0C0;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.photo-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-container img {
  width: 450px;
  height: 450px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 25px rgba(147, 51, 180, 0.7);
}

/* Estilos dos modais */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal img {
  max-width: 90%;
  max-height: 90%;
  display: block;
  margin: auto;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2em;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  background: none;
  border: none;
  padding: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .home-container {
    padding: 20px;
  }
  
  .intro-section {
    flex-direction: column;
    min-height: auto;
  }
  
  .text-container {
    max-width: 100%;
    margin-bottom: 30px;
  }
  
  .photo-container img {
    width: 300px;
    height: 300px;
  }
  
  .intro-texto {
    font-size: 1em;
    margin-bottom: 40px;
  }
  
  .sobre-texto {
    padding: 0 10px;
  }
}
</style>