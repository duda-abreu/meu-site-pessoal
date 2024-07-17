<template>
  <div id="app">
    <FotodePerfil />
    <MeuNome nome="Maria Eduarda Abreu" />
    <MinhaBio biografia="Esta é a sua biografia. Aqui você pode escrever sobre você." />
    <MeusIcones 
      linkedinUrl="https://www.linkedin.com/in/mariaeduardaabreu/" 
      githubUrl="https://github.com/duda-abreu"
      :whatsappUrl="'https://wa.me/5521970923247?text=Olá, gostaria de saber mais sobre seu trabalho'"
      :gmailUrl="'mailto:mariaedrdabreu@gmail.com?subject=Olá&body=Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho'"
    />
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
        { id: 2, nome: 'Cambridge Advanced English (CAE)' },
        // Adicione mais certificados conforme necessário
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

