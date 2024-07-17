<template>
  <div id="app">
    <Photo />
    <Name />
    <Icons />
    <Certificates />
    <Experiences />
    <Biography />
  </div>
</template>

<script>
import Photo from './components/Photo.vue';
import Name from './components/Name.vue';
import Icons from './components/Icons.vue';
import Certificates from './components/Certificates.vue';
import Experiences from './components/Experiences.vue';
import Biography from './components/Biography.vue';

export default {
  name: 'App',
  components: {
    Photo,
    Name,
    Icons,
    Certificates,
    Experiences,
    Biography,
  },
};
</script>

<style>
/* Estilos globais ou específicos do layout */
#app {
  /* Estilos CSS */
}
</style>
