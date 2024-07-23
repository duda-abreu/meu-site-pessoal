<template>
  <div class="meu-nome">
    <h1>{{ nome }}</h1>
    <h2 class="subtitulo">Mas pode me chamar de Duda ;)</h2>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.meu-nome {
  text-align: center;
  margin-top: 10px;
}

.meu-nome h1 {
  color: #533153; /* Ajusta a cor da fonte */
  font-size: 2em; /* Ajusta o tamanho da fonte, se necessário */
}

.subtitulo {
  font-size: 0.9em; /* Ajusta o tamanho do subtítulo */
  color: #666; /* Ajusta a cor do subtítulo */
  margin-top: 5px; /* Adiciona margem acima do subtítulo */
}
</style>
