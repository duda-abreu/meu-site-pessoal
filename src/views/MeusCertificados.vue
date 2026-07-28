<template>
  <div class="certificados">
    <h2>{{ heading }}</h2>
    <ul class="certificados-lista">
      <li v-for="certificado in certificados" :key="certificado.id" class="certificado-item">
        <a
          @click="mostrarCertificado(certificado)"
          @keyup.enter="mostrarCertificado(certificado)"
          role="button"
          tabindex="0"
          class="certificado-link"
        >
          {{ certificado.nome }}
        </a>
      </li>
    </ul>

    <!-- Modal pros certificados -->
    <Teleport to="body">
      <div
        class="modal-certificado"
        v-if="mostrarModal"
        @click.self="fecharModal"
      >
        <div class="modal-conteudo">
          <div class="modal-titlebar">
            <span class="modal-titlebar-dot"></span>
            <span class="modal-titlebar-texto">{{ certificadoSelecionado.nome }}</span>
            <button class="fechar-modal" @click="fecharModal" :aria-label="closeLabel">
              &times;
            </button>
          </div>
          <img
            :src="getImagemUrl(certificadoSelecionado)"
            :alt="altPrefix + certificadoSelecionado.nome"
            class="imagem-certificado"
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { i18nState } from '@/i18n'

const CERTIFICADOS_BASE = [
  { id: 1, imagem: 'CambridgeResult.jpg' },
  { id: 2, imagem: 'CertificadoExcel.jpg' },
  { id: 3, imagem: 'CertGitGithub.jpg' },
  { id: 4, imagem: 'CertHtmlCSS.jpg' }
]

const TEXT = {
  pt: {
    heading: 'Certificados',
    closeLabel: 'Fechar',
    altPrefix: 'Certificado: ',
    nomes: {
      1: 'Cambridge Certificate in Advanced English (CAE)',
      2: 'Excel Avançado',
      3: 'Git',
      4: 'HTML e CSS'
    }
  },
  en: {
    heading: 'Certificates',
    closeLabel: 'Close',
    altPrefix: 'Certificate: ',
    nomes: {
      1: 'Cambridge Certificate in Advanced English (CAE)',
      2: 'Advanced Excel',
      3: 'Git',
      4: 'HTML & CSS'
    }
  }
}

export default {
  data() {
    return {
      i18nState,
      certificadoSelecionado: null,
      mostrarModal: false
    };
  },
  computed: {
    heading() {
      return TEXT[this.i18nState.locale].heading;
    },
    closeLabel() {
      return TEXT[this.i18nState.locale].closeLabel;
    },
    altPrefix() {
      return TEXT[this.i18nState.locale].altPrefix;
    },
    certificados() {
      const nomes = TEXT[this.i18nState.locale].nomes;
      return CERTIFICADOS_BASE.map(base => ({ ...base, nome: nomes[base.id] }));
    }
  },
  methods: {
    mostrarCertificado(certificado) {
      this.certificadoSelecionado = certificado;
      this.mostrarModal = true;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', this.handleKeydown);
    },
    fecharModal() {
      this.mostrarModal = false;
      document.body.style.overflow = '';
      window.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.fecharModal();
      }
    },
    getImagemUrl(certificado) {
      return require(`@/assets/${certificado.imagem}`);
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', this.handleKeydown);
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
  color: var(--text-primary);
  margin-bottom: 30px;
}

.certificados-lista {
  list-style: none;
  padding: 0;
}

.certificado-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.1em;
  display: inline-block;
  transition: all 0.2s ease;
  transform-origin: left center;
  padding: 2px 4px;
  margin: -2px -4px;
  cursor: pointer;
}

.certificado-link:focus-visible {
  outline: 2px solid var(--accent-pink);
  outline-offset: 3px;
  border-radius: 4px;
}

.certificado-link:hover {
  color: var(--accent-pink);
  transform: scale(1.02);
  text-shadow: 0 0 5px var(--shadow-color);
}

.certificado-link:hover::after {
  width: 100%;
}

.certificado-item {
  margin: 15px 0;
  padding: 15px;
  background: var(--surface-soft);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.certificado-item:hover {
  background: rgba(255, 143, 194, 0.14);
  border-color: var(--accent-pink);
  box-shadow: 0 4px 14px var(--shadow-color);
}

.modal-certificado {
  position: fixed;
  inset: 0;
  margin: 0;
  padding: 20px;
  border: none;
  background: rgba(20, 12, 20, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  box-sizing: border-box;
}

.modal-conteudo {
  position: relative;
  background: var(--surface);
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 40px var(--shadow-color);
}

.modal-titlebar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--accent-pink);
  flex-shrink: 0;
}

.modal-titlebar-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffffff;
  flex-shrink: 0;
}

.modal-titlebar-texto {
  flex: 1;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.imagem-certificado {
  max-width: 100%;
  max-height: calc(90vh - 44px);
  display: block;
  margin: 0 auto;
  object-fit: contain;
  padding: 16px;
  box-sizing: border-box;
}

.fechar-modal {
  background: transparent;
  color: #ffffff;
  border: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.fechar-modal:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .certificado-item {
    padding: 12px;
  }

  .modal-conteudo {
    width: 100%;
  }

  .imagem-certificado {
    padding: 10px;
  }
}
</style>