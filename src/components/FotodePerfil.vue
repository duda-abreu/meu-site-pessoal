<template>
  <div class="foto-de-perfil">
    <router-link to="/sobre" class="foto-container"> <!-- rota para a tela inicial -->
      <img :src="fotoSrc" alt="Minha Foto" />
      <div class="borda-destaque"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fotoSrc: require('@/assets/nova-foto2.png') 
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
  cursor: pointer; 
}

.foto-container img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  z-index: 1; 
}


.borda-destaque {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid #986798; 
  border-radius: 50%;
  z-index: 0; /* borda atrás da foto */
  box-sizing: border-box; 
  animation: girar 3s linear infinite; 
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