<template>
  <div class="tecnologias">
    <h2>Skills</h2>
    <div class="icones-tecnologias">
      <a 
        v-for="tecnologia in tecnologias" 
        :key="tecnologia.id" 
        :href="tecnologia.link" 
        target="_blank" 
        :aria-label="`Learn more about ${tecnologia.nome}`"
      >
        <img 
          :src="require(`@/assets/${tecnologia.imagem}`)" 
          :alt="tecnologia.nome" 
          class="icone-tecnologia"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
  tecnologias: [
    { id: 1, nome: "DBeaver", imagem: "dbeaver.png", link: "https://dbeaver.io/" },
    { id: 2, nome: "Excel", imagem: "excel.svg", link: "https://www.microsoft.com/pt-br/microsoft-365/excel" },
    { id: 3, nome: "Git", imagem: "git.svg", link: "https://git-scm.com" },
    { id: 4, nome: "Java", imagem: "java.svg", link: "https://www.java.com/pt-BR/" },
    { id: 5, nome: "Python", imagem: "python.svg", link: "https://www.python.org" },
    { id: 6, nome: "Vue.js", imagem: "vue.svg", link: "https://vuejs.org/" }
  ]
}
}
}
</script>

<style scoped>
.tecnologias {
  margin-top: 0;
  color: #C0C0C0;
  padding: 20px;
  border-radius: 8px;
}

.tecnologias h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

.icones-tecnologias {
  display: flex;
  justify-content: center;
}

.icone-tecnologia {
  width: 44px; /* tamanho dos ícones */
  height: 40px;
  margin: 0 10px; /* espaçamento entre os ícones */
  transition: transform 0.3s ease-in-out;
}

.icone-tecnologia:hover {
  transform: scale(1.1); 
}
</style>