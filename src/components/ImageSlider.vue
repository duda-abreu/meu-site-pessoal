<template>
    <div class="slider-container">
      <button @click="prevSlide" class="prev-button">❮</button>
      <div class="slides">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slide"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img :src="require(`@/assets/${image.src}`)" :alt="`Slide ${index + 1}`" />
        </div>
      </div>
      <button @click="nextSlide" class="next-button">❯</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
          { src: 'theboys.jpg', description: 'Descrição para The Boys.' },
          { src: 'sza.jpg', description: 'Descrição para SZA.' },
          { src: 'hellokitty.jpg', description: 'Descrição para Hello Kitty.' },
          { src: 'itacoa.jpg', description: 'Descrição para Itacoa.' },
          { src: 'undertale.jpg', description: 'Descrição para Undertale.' },
        ],
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateDescription();
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateDescription();
      },
      updateDescription() {
        this.$emit('description-change', this.images[this.currentIndex].description);
      },
    },
    mounted() {
      this.updateDescription(); // Emitir a descrição inicial
    },
  };
  </script>
  
  <style scoped>
  .slider-container {
    position: relative;
    width: 100%;
    max-width: 600px; /* Largura máxima do slider */
    margin: auto;
    overflow: hidden;
    border: 2px solid #ddd; /* Opcional: Adiciona uma borda ao slider */
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    min-width: 100%;
    box-sizing: border-box;
  }
  
  .slide img {
    width: 100%; /* Ajusta a largura da imagem ao tamanho do slide */
    height: auto; /* Mantém a proporção da imagem */
    max-height: 400px; /* Define a altura máxima para as imagens */
    object-fit: cover; /* Faz a imagem cobrir o contêiner sem distorção */
  }
  
  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 24px;
    transform: translateY(-50%);
  }
  
  .prev-button {
    left: 10px;
  }
  
  .next-button {
    right: 10px;
  }
  </style>
  
  