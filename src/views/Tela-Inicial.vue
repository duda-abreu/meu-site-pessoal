<template>
  <div class="home-container">
    <div class="text-container">
      <h1>Eu sou a Maria Eduarda Abreu</h1>
      <h2>mas pode me chamar de Duda</h2>
      <h3>😊</h3>
      <p>
        Estudante de <a @click="abrirModal('ciência-computacao')" role="button" tabindex="0">Ciência da Computação</a> pela 
        <a href="https://www.uerj.br" target="_blank" rel="noopener noreferrer">Universidade do Estado do Rio de Janeiro</a>
      </p>
      <div class="icons">
        <MeusIcones 
          linkedinUrl="https://www.linkedin.com/in/mariaeduardaabreu/" 
          githubUrl="https://github.com/duda-abreu"
          whatsappUrl="https://wa.me/5521970923247?text=Olá, gostaria de saber mais sobre seu trabalho"
          gmailUrl="mailto:mariaedrdabreu@gmail.com?subject=Olá&body=Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho"
        />
      </div>
    </div>
    <div class="photo-container">
      <FotodePerfil />
    </div>
    <!-- modais -->
    <div v-if="mostrarModal === 'ciência-computacao'" class="modal" @click.self="fecharModal" role="dialog" aria-modal="true">
      <img :src="require('@/assets/grade.jpg')" alt="Grade Curricular">
      <span class="close" @click="fecharModal" aria-label="Fechar modal">&times;</span>
    </div>
    <div v-if="mostrarModal === 'certificados'" class="modal" @click.self="fecharModal" role="dialog" aria-modal="true">
      <div class="certificados">
        <div @click="abrirCertificado('CertGitGithub')" role="button" tabindex="0">
          <img :src="require('@/assets/CertGitGithub.jpg')" alt="Certificado GitHub">
        </div>
        <div @click="abrirCertificado('CambridgeResult')" role="button" tabindex="0">
          <img :src="require('@/assets/CambridgeResult.jpg')" alt="Certificado Cambridge Result">
        </div>
        <div @click="abrirCertificado('CertificadoExcel')" role="button" tabindex="0">
          <img :src="require('@/assets/CertificadoExcel.jpg')" alt="Certificado Excel">
        </div>
      </div>
      <span class="close" @click="fecharModal" aria-label="Fechar modal">&times;</span>
    </div>
    <div v-if="modalCertificado !== ''" class="modal" @click.self="fecharModalCertificado" role="dialog" aria-modal="true">
      <img :src="require(`@/assets/${modalCertificado}.jpg`)" alt="Certificado">
      <span class="close" @click="fecharModalCertificado" aria-label="Fechar modal">&times;</span>
    </div>
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
      mostrarModal: '',
      modalCertificado: ''
    };
  },
  methods: {
    abrirModal(tipo) {
      this.mostrarModal = tipo;
    },
    fecharModal() {
      this.mostrarModal = '';
    },
    abrirCertificado(certificado) {
      this.modalCertificado = certificado;
    },
    fecharModalCertificado() {
      this.modalCertificado = '';
    }
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20px;
  flex-wrap: wrap; 
}

.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding-right: 20px;
  margin-top: 100px; 
}

.text-container h1 {
  font-size: 2.5em;
  margin: 0;
}

.text-container h2 {
  font-size: 1.5em;
  margin: 0;
}

.text-container p {
  margin-top: 20px;
  font-size: 1.2em;
}

.icons {
  margin-top: 20px;
}

.photo-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-container img {
  max-width: 100%;
  border-radius: 50%;
}

a {
  color: #C0C0C0; 
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

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
}

.modal img {
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  display: block;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2em;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
}

.certificados {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.certificados div {
  cursor: pointer;
}

.certificados img {
  max-width: 100%;
  height: auto;
}

/* ajustes responsivos */
@media (max-width: 768px) {
  .home-container {
    flex-direction: column; 
    height: auto;
  }
}
</style>
