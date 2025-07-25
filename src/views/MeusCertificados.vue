<template>
  <div class="certificados">
    <h2>Certificados</h2>
    <ul class="certificados-lista">
      <li v-for="certificado in certificados" :key="certificado.id" class="certificado-item">
        <a 
          @click="mostrarCertificado(certificado)"
          class="certificado-link"
        >
          {{ certificado.nome }}
        </a>
      </li>
    </ul>

    <!-- Modal pros certificados -->
    <dialog 
      class="modal-certificado" 
      v-if="mostrarModal" 
      @click.self="fecharModal"
      ref="modalDialog"
    >
      <div class="modal-conteudo">
        <button class="fechar-modal" @click="fecharModal" aria-label="Fechar">
          &times;
        </button>
        <img 
          :src="getImagemUrl(certificadoSelecionado)" 
          :alt="'Certificado: ' + certificadoSelecionado.nome" 
          class="imagem-certificado"
        />
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      certificados: [
        { id: 1, nome: 'Cambridge Certificate in Advanced English (CAE)', imagem: 'CambridgeResult.jpg' },
        { id: 2, nome: 'Excel Avançado', imagem: 'CertificadoExcel.jpg' },
        { id: 3, nome: 'Git e GitHub', imagem: 'CertGitGithub.jpg' },
        { id: 4, nome: 'HTML e CSS', imagem: 'CertHtmlCSS.jpg' },
        { id: 5, nome: 'Introdução ao Ambiente .NET e Projetos Colaborativos', imagem: 'CertNetColab.jpg' }
      ],
      certificadoSelecionado: null,
      mostrarModal: false
    };
  },
  methods: {
    mostrarCertificado(certificado) {
      this.certificadoSelecionado = certificado;
      this.mostrarModal = true;
      this.$nextTick(() => {
        this.$refs.modalDialog.showModal(); 
      });
    },
    fecharModal() {
      this.$refs.modalDialog.close(); 
      this.mostrarModal = false;
    }
  }
}
</script>

<style scoped>
.certificados {
  margin: 40px auto;
  padding: 20px;
  max-width: 800px;
}

.certificados h2 {
  font-size: 2em;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
}

.certificados-lista {
  list-style: none;
  padding: 0;
}

.certificado-link {
  color: #C0C0C0;
  text-decoration: none;
  font-size: 1.1em;
  display: inline-block;
  transition: all 0.2s ease;
  transform-origin: left center;
  padding: 2px 4px;
  margin: -2px -4px;
  cursor: pointer; 
}

.certificado-link:hover {
  color: #ffffff;
  transform: scale(1.02);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
}

.certificado-link:hover::after {
  width: 100%; 
}

.certificado-item {
  margin: 15px 0;
  padding: 15px;
  background: rgba(123, 44, 191, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.certificado-item:hover {
  background: rgba(123, 44, 191, 0.2);
  border-left-color: #7b2cbf; 
}

.modal-certificado {
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
  backdrop-filter: blur(5px);
}

.modal-conteudo {
  position: relative;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.imagem-certificado {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin: 0 auto;
  border-radius: 4px;
}

.fechar-modal {
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

.fechar-modal:hover {
  background: #7b2cbf;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .certificado-item {
    padding: 12px;
  }
  
  .modal-conteudo {
    width: 95%;
    padding: 15px;
  }
  
  .fechar-modal {
    top: -10px;
    right: -10px;
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
}
</style>