<template>
  <div id="app">
    <FotodePerfil />
    <MeuNome nome="Maria Eduarda Abreu" />
    <MinhaBio biografia="Estudante de Ciência da Computação pela Universidade do Estado do Rio de Janeiro." class="minha-bio" />
    <MinhaBio biografia="Pra me conhecer um pouco melhor:" class="minha-bio menor-espacamento" />
    <MeusIcones 
      linkedinUrl="https://www.linkedin.com/in/mariaeduardaabreu/" 
      githubUrl="https://github.com/duda-abreu"
      :whatsappUrl="'https://wa.me/5521970923247?text=Olá, gostaria de saber mais sobre seu trabalho'"
      :gmailUrl="'mailto:mariaedrdabreu@gmail.com?subject=Olá&body=Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho'"
    />
    <MeusCertificados :certificados="certificados" />
  </div>
</template>

<script>
import FotodePerfil from './components/FotodePerfil.vue';
import MeuNome from './components/MeuNome.vue';
import MinhaBio from './components/MinhaBio.vue';
import MeusIcones from './components/MeusIcones.vue';
import MeusCertificados from './components/MeusCertificados.vue';

export default {
  components: {
    FotodePerfil,
    MeuNome,
    MinhaBio,
    MeusIcones,
    MeusCertificados
  },
  data() {
    return {
      certificados: [
        { id: 1, nome: 'Git e Github' },
        { id: 2, nome: 'Excel Avançado' },
        { id: 3, nome: 'Cambridge Certificate in Advanced English (CAE)' },
      ]
    };
  }
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7dada; /* Rosa bebê */
}

.minha-bio {
  margin-bottom: 10px; /* Espaço entre as biografias */
}

.menor-espacamento {
  margin-bottom: 5px; /* Menor espaço para a segunda biografia */
}
</style>
