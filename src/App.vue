<template>
  <div class="app">
    <MinhaHeader />
    <MeuNome @click.native="handleLinkClick('linkedin')" />
    </div>
</template>

<script>
import MinhaHeader from './components/MinhaHeader.vue';
import MeuNome from './components/MeuNome.vue';
import MeusCertificados from './components/MeusCertificados.vue';
import MinhaBio from './components/MinhaBio.vue';
import MinhasExperiencias from './components/MinhasExperiencias.vue';
import OsIcones from './components/OsIcones.vue';

export default {
  components: {
    MinhaHeader,
    MeuNome,
    MinhaHeader
    MeuNome
    MeusCertificados
    MinhaBio
    MinhasExperiencias
    OsIcones
  },
  methods: {
    handleLinkClick(link) {
      const links = {
        linkedin: 'https://www.linkedin.com/in/mariaeduardaabreu/',
        // Add other links here
      };
      window.location.href = links[link];
    },
  },
};
</script>

<style>
/* Estilos globais ou específicos do layout */
#app {
  /* Estilos CSS */
}
</style>
