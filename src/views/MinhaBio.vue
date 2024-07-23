<template>
  <div class="sobre-container">
    <div class="sobre-texto">
      <p>
        Oie! Tenho 22 anos e sou carioca da gema. Sou desenvolvedora Full Stack com experiência em algumas tecnologias que você pode conferir nas minhas Skills.
      </p>
      <p> Aqui embaixo tem mais algumas curiosidades sobre mim </p>
      <ImageSlider @description-change="updateDescription" />
      <p>{{ currentDescription }}</p>
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
      currentDescription: ''
    };
  },
  methods: {
    updateDescription(description) {
      this.currentDescription = description;
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

.sobre-texto h1 {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.sobre-texto p {
  font-size: 1.2em;
  line-height: 1.6;
}

a {
  color: #533153;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
