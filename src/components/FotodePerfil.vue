<template>
  <div class="foto-de-perfil">
    <img :src="fotoSrc" alt="Minha Foto" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fotoSrc: require('@/assets/nova-foto.jpg') // Atualize para o nome da nova foto
    };
  }
};
</script>

<style scoped>
.foto-de-perfil {
  text-align: center;
}

.foto-de-perfil img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
