<template>
  <div class="carrossel-container">
    <carousel :perPage="1" :navigationEnabled="true" :paginationEnabled="true" :loop="true">
      <slide>
        <img src="@/assets/undertale.jpg" alt="Undertale" class="carousel-image" />
        <div class="carousel-texto">
          <h2>Jogo Favorito</h2>
          <p>Meu jogo favorito é Undertale.</p>
        </div>
      </slide>
      <!-- Adicione mais slides conforme necessário -->
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from '@ssense/vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.carrossel-container {
  padding: 20px;
}

.carousel-image {
  width: 100%;
  height: auto;
}

.carousel-texto {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.carousel-texto h2 {
  margin: 0;
}

.carousel-texto p {
  margin: 5px 0 0;
}
</style>

  