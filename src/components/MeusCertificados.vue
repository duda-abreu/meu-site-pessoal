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
}
.certificados ul {
  list-style-type: none;
  padding: 0;
}
.certificados li {
  margin: 5px 0;
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
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
}
.fechar:hover,
.fechar:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
