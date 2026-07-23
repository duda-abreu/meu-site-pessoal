<template>
  <div class="meu-nome">
    <h1 :aria-label="`Nome: ${nome}`">{{ nome }}</h1>
    <h2 class="subtitulo">Mas pode me chamar de Duda ;)</h2>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
      default: "Visitante" 
    }
  }
};
</script>

<style scoped>
.meu-nome {
  text-align: left;
  margin-top: 20px;
  background-color: transparent;
  padding: 0;
}

.meu-nome h1 {
  color: #ffffff; 
  font-size: 2.8rem; 
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.subtitulo {
  font-size: 1rem; 
  color: #a0a0a0;
  font-style: normal; 
  font-weight: 400; 
}
</style>