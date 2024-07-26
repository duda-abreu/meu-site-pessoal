<template>
  <div class="foto-de-perfil">
    <div class="foto-container">
      <img :src="fotoSrc" alt="Minha Foto" />
      <div class="borda-destaque"></div>
    </div>
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

.foto-container {
  position: relative;
  display: inline-block;
}

.foto-container img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  z-index: 1; /* Coloca a imagem à frente da borda de destaque */
}

.borda-destaque {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid #986798; /* Cor da borda de destaque */
  border-radius: 50%;
  z-index: 0; /* Coloca a borda atrás da imagem */
  box-sizing: border-box; /* Garante que a borda não aumente o tamanho total */
  animation: girar 3s linear infinite; /* Animação para girar */
}

@keyframes girar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
