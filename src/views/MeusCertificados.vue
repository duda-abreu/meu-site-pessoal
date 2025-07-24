<template>
  <div class="certificados">
    <h2>Certificados</h2>
    <ul>
      <li v-for="certificado in certificados" :key="certificado.id">
        <a @click="mostrarCertificado(certificado)">
          {{ certificado.nome }}
        </a>
      </li>
    </ul>

    <!-- modal para mostrar os certificados -->
    <div class="modal" v-if="mostrarModal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <span class="fechar" @click="fecharModal" aria-label="Fechar">&times;</span>
      <img :src="getImagemUrl(certificadoSelecionado)" :alt="certificadoSelecionado.nome" />
    </div>
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
        const modal = document.querySelector('.modal');
        modal.classList.add('active'); 
      });
    },
    fecharModal() {
      this.certificadoSelecionado = null;
      this.mostrarModal = false;
      const modal = document.querySelector('.modal');
      modal.classList.remove('active'); 
    },
    getImagemUrl(certificado) {
      return require(`@/assets/${certificado.imagem}`);
    }
  }
};
</script>

<style scoped>
.certificados {
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  color: #C0C0C0;
}

.certificados h2 {
  font-size: 2.5em;
  text-align: center;
}

.certificados ul {
  list-style-type: none;
  padding: 0;
}

.certificados li {
  margin: 10px 0;
}

.certificados a {
  color: #C0C0C0;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.3s ease;
  font-size: 1.1em; 
}

.certificados a:hover {
  transform: translateX(-10px);
  color: #C0C0C0; 
}

.modal {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0; 
  transition: opacity 0.3s ease;
}

.modal.active {
  opacity: 1; 
}

.modal img {
  max-width: 90%;
  max-height: 90%;
}

.fechar {
  color: #fff;
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2em;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
}

.fechar:hover,
.fechar:focus {
  color: #ddd;
  text-decoration: none;
}
</style>
