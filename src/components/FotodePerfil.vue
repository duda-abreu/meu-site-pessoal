<template>
  <div class="foto-de-perfil">
    <img :src="fotoSrc" alt="Minha Foto" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fotoSrc: require('@/assets/minha-foto.jpg') 
    };
  }
};
</script>

<style scoped>
.foto-de-perfil img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
