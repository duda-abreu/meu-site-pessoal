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

    <!-- Modal para mostrar a imagem do certificado -->
    <div class="modal" v-if="mostrarModal">
      <span class="fechar" @click="fecharModal">&times;</span>
      <img :src="getImagemUrl(certificadoSelecionado)" :alt="certificadoSelecionado.nome" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      certificados: [
        {
          id: 1,
          nome: 'Git e GitHub',
          imagem: 'CertGitGithub.jpg'
        },
        {
          id: 2,
          nome: 'Excel Avançado',
          imagem: 'CertificadoExcel.jpg'
        },
        {
          id: 3,
          nome: 'Cambridge Certificate in Advanced English (CAE)',
          imagem: 'CambridgeResult.jpg'
        },
        {
          id: 4,
          nome: 'HTML e CSS',
          imagem: 'CertHtmlCSS.jpg'
        }
      ],
      certificadoSelecionado: null,
      mostrarModal: false
    };
  },
  methods: {
    mostrarCertificado(certificado) {
      this.certificadoSelecionado = certificado;
      this.mostrarModal = true;
    },
    fecharModal() {
      this.certificadoSelecionado = null;
      this.mostrarModal = false;
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
  background-color: #F9DBD4; /* Cor de fundo para os certificados */
  padding: 20px;
  border-radius: 8px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif; /* Garantindo a fonte correta */
  color: #533153; /* Cor da fonte */
}

.certificados h2 {
  color: #533153; /* Cor da fonte do título */
  font-size: 2.5em; /* Tamanho da fonte do título */
  text-align: center;
}

.certificados ul {
  list-style-type: none;
  padding: 0;
}

.certificados li {
  margin: 10px 0;
  font-size: 1.2em; /* Tamanho da fonte dos itens */
}

.certificados a {
  color: #533153; /* Cor dos links clicáveis */
  text-decoration: underline;
  cursor: pointer;
  font-family: 'Avenir', Helvetica, Arial, sans-serif; /* Garantindo a fonte dos links */
}

.certificados a:hover {
  color: #C8A2C8; /* Cor dos links ao passar o mouse */
}

.modal {
  display: block;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
}

.modal img {
  margin: auto;
  display: block;
  max-width: 90%;
  max-height: 90%;
}

.fechar {
  color: #fff;
  float: right;
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
