<template>
  <div class="sobre-container">
    <div class="sobre-texto">
      <p>
        Oie! Tenho 22 anos e sou carioca da gema. Sou desenvolvedora Full Stack com experiência em algumas tecnologias que você pode conferir nas minhas 
        <router-link to="/skills">Skills</router-link> 
        ou olhar meu 
        <span @click="abrirCurriculo" class="link">currículo</span>!
      </p>
      <h2 class="titulo-curiosidades">Vem ver algumas curiosidades sobre mim</h2>
      <ImageSlider @description-change="updateDescription" />
      <p class="descricao">{{ currentDescription }}</p>
    </div>
    <!-- modal para o currículo -->
    <div v-if="mostrarModal" class="modal" @click.self="fecharModal" role="dialog" aria-modal="true">
      <img :src="require('@/assets/curriculo.jpg')" alt="Currículo" />
      <span class="close" @click="fecharModal" aria-label="Fechar">&times;</span>
    </div>
  </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue';

export default {
  components: {
    ImageSlider
  },
  data() {
    return {
      currentDescription: '',
      mostrarModal: false
    };
  },
  methods: {
    updateDescription(description) {
      this.currentDescription = description;
    },
    abrirCurriculo() {
      this.mostrarModal = true;
    },
    fecharModal() {
      this.mostrarModal = false;
    }
  }
};
</script>

<style scoped>
.sobre-container {
  padding: 20px;
}

.sobre-texto {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.sobre-texto h2 {
  margin: 20px 0;
  font-size: 1.5em;
}

.sobre-texto p {
  font-size: 1.2em;
  line-height: 1.6;
}

.link {
  color: #C0C0C0;
  cursor: pointer;
  font-weight: bold;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal img {
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  display: block;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2em;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
}

a {
  color: #C0C0C0;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

.descricao {
  margin-top: 20px;
  font-size: 1.2em;
  color: #C0C0C0;
}
</style>