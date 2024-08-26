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
  text-align: center;
  margin-top: 10px;
  background-color: #f0f0f0; 
  padding: 20px; 
  border-radius: 8px; /* bordas arredondadas */
}

.meu-nome h1 {
  color: #ccb1cc; 
  font-size: 2em; 
}

.subtitulo {
  font-size: 0.7em; 
  color: #ccb1cc; 
  margin-top: 5px; /* margem acima do subtítulo */
  font-style: italic; 
  font-weight: 400; 
}
</style>