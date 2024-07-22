<template>
  <div class="sobre-container">
    <div class="sobre-texto">
      <h1>Sobre Mim</h1>
      <p>
        Oie! Eu sou a Duda! Curso Ciência da Computação pela Universidade do Estado do Rio de Janeiro, tenho 22 anos e sou carioca da gema. Sou desenvolvedora Full Stack com experiência em algumas tecnologias e você pode conferir isso nas minhas Skills.
      </p>
      <p>
        Meu jogo favorito é Undertale, sou top 0.01% ouvinte da SZA no Spotify, minha série favorita é The Boys e sou ratinha de academia
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dados removidos relacionados ao modal
    };
  },
  methods: {
    // Métodos removidos relacionados ao modal
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
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

.sobre-texto p {
  font-size: 1.2em;
  line-height: 1.6;
}

a {
  color: #942f18;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
