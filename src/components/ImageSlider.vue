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
        <img v-if="image.src" :src="require(`@/assets/${image.src}`)" :alt="image.alt" />
      </div>
    </div>
    <button @click="nextSlide" class="next-button">❯</button>
    <div class="description">{{ images[currentIndex].description }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: 'theboys.jpg', alt: 'The Boys', description: 'Minha série favorita é The Boys' },
        { src: 'sza.jpg', alt: 'SZA', description: 'Minha artista favorita é a SZA (inclusive sou top 0.01% ouvinte no Spotify)' },
        { src: 'hellokitty.jpg', alt: 'Hello Kitty', description: 'Tento ser ratinha de academia nas horas vagas' },
        { src: 'itacoa.jpg', alt: 'Itacoa', description: 'Meu restaurante favorito é do vencedor do Masterchef Profissionais 2018: Rafa Gomes' },
        { src: 'undertale.jpg', alt: 'Undertale', description: 'Meu jogo favorito é Undertale!' }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
};
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  max-width: 600px; 
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
  height: 400px; /* altura fixa para as imagens */
  object-fit: cover; 
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
  z-index: 1; 
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.description {
  margin-top: 20px;
  font-size: 1.2em;
  color: #C0C0C0;
  text-align: center; 
  font-family: 'Figtree', sans-serif; 
}
</style>