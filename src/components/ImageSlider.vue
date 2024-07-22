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
          <img :src="require(`@/assets/${image}`)" :alt="`Slide ${index + 1}`" />
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
          'theboys.jpg',
          'sza.jpg',
          'hellokitty.jpg',
          'itacoa.jpg',
          'undertale.jpg',
        ],
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .slider-container {
    position: relative;
    width: 100%;
    max-width: 600px; /* Tamanho máximo do slider */
    margin: auto;
    overflow: hidden;
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
    width: 100%;
    height: 400px; /* Altura fixa para todas as imagens */
    object-fit: cover; /* Ajusta a imagem para cobrir o contêiner sem distorcer */
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
    z-index: 1; /* Garante que o botão fique acima das imagens */
  }
  
  .prev-button {
    left: 10px;
  }
  
  .next-button {
    right: 10px;
  }
  </style>
  
  