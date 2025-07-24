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
        { id: 1, nome: "Python", imagem: "python.svg", link: "https://www.python.org/" },
        { id: 2, nome: "JavaScript", imagem: "javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { id: 3, nome: "Vue.js", imagem: "vue.svg", link: "https://vuejs.org/" },
        { id: 3, nome: "Node.js", imagem: "nodejs.svg", link: "https://nodejs.org/" },
        { id: 4, nome: "React", imagem: "react.svg", link: "https://reactjs.org/" },
        { id: 5, nome: "SQL", imagem: "sql.svg", link: "https://en.wikipedia.org/wiki/SQL" },
        { id: 6, nome: "MongoDB", imagem: "mongodb.svg", link: "https://www.mongodb.com/" },
        { id: 7, nome: "Cloud", imagem: "cloud.svg", link: "https://aws.amazon.com/what-is-cloud-computing/" },
        { id: 8, nome: "Docker", imagem: "docker.svg", link: "https://www.docker.com/" },
        { id: 10, nome: "Git/GitHub", imagem: "git.svg", link: "https://git-scm.com/" },
        { id: 11, nome: "HTML5", imagem: "html.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { id: 12, nome: "CSS3", imagem: "css.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { id: 13, nome: "GraphQL", imagem: "graphql.svg", link: "https://graphql.org/" },
        { id: 15, nome: "Postman", imagem: "postman.svg", link: "https://www.postman.com/" },
        { id: 16, nome: "Swagger", imagem: "swagger.svg", link: "https://swagger.io/" },
        { id: 14, nome: "Excel", imagem: "excel.svg", link: "https://www.microsoft.com/pt-br/microsoft-365/excel" },

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
  width: 44px; 
  height: 40px;
  margin: 0 10px; 
  transition: transform 0.3s ease-in-out;
}

.icone-tecnologia:hover {
  transform: scale(1.1); 
}
</style>