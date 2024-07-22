<template>
  <div class="tecnologias">
    <h2>Skills</h2>
    <div class="icones-tecnologias">
      <a v-for="tecnologia in tecnologias" :key="tecnologia.id" :href="tecnologia.link" target="_blank">
        <img :src="require(`@/assets/${tecnologia.imagem}`)" :alt="tecnologia.nome" class="icone-tecnologia">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tecnologias: [
        {
          id: 1,
          nome: "Vue.js",
          imagem: "vue.png",
          link: "https://vuejs.org/"
        },
        {
          id: 2,
          nome: "Python",
          imagem: "python.png",
          link: "https://www.python.org"
        },
        {
          id: 3,
          nome: "Java",
          imagem: "java.png",
          link: "https://www.java.com/pt-BR/"
        },
        {
          id: 4,
          nome: "Git",
          imagem: "git.png",
          link: "https://git-scm.com"
        },
        {
          id: 5,
          nome: "Excel",
          imagem: "excel.png",
          link: "https://www.microsoft.com/pt-br/microsoft-365/excel"
        }
      ]
    };
  }
};
</script>

<style scoped>
.tecnologias {
  margin-top: 0x;
  background-color: #F9DBD4;
  color: ##942F18;
  padding: 20px;
  border-radius: 8px;
}

.tecnologias h2 {
  text-align: center;
  font-size: 2.0em;
  margin-bottom: 20px;
}

.icones-tecnologias {
  display: flex;
  justify-content: center;
}

.icone-tecnologia {
  width: 44px; /* Tamanho dos ícones */
  height: 40px;
  margin: 0 10px; /* Espaçamento entre os ícones */
  transition: transform 0.3s ease-in-out;
}

.icone-tecnologia:hover {
  transform: scale(1.1); /* Efeito de escala ao passar o mouse */
}
</style>
