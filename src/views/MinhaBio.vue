<template>
  <div class="sobre-container">
    <div class="sobre-texto">
      <h1>Sobre Mim</h1>
      <p>
        Olá! Eu sou a Maria Eduarda Abreu, mas você pode me chamar de Duda. Sou estudante de Ciência da Computação pela Universidade do Estado do Rio de Janeiro.
      </p>
      <p>
        Estou entusiasmada com o mundo da tecnologia e sempre buscando aprender mais. Se quiser saber mais sobre minhas certificações e conquistas, fique à vontade para explorar mais em <a href="https://www.linkedin.com/in/mariaeduardaabreu/" target="_blank">meu LinkedIn</a>.
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
