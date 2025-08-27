<template>
  <div class="tecnologias">
    <h2>Skills</h2>
    <div class="icones-tecnologias">
      <div 
        v-for="tecnologia in tecnologias" 
        :key="tecnologia.id" 
        class="tecnologia-item"
      >
        <a 
          :href="tecnologia.link" 
          target="_blank" 
          rel="noopener noreferrer"
          :aria-label="`Learn more about ${tecnologia.nome}`"
          class="tecnologia-link"
        >
          <img 
            :src="require(`@/assets/${tecnologia.imagem}`)" 
            :alt="tecnologia.nome" 
            class="icone-tecnologia"
          >
          <span class="tecnologia-nome">{{ tecnologia.nome }}</span>
        </a>
      </div>
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
        { id: 4, nome: "Node.js", imagem: "nodejs.svg", link: "https://nodejs.org/" },
        { id: 5, nome: "React", imagem: "react.svg", link: "https://reactjs.org/" },
        { id: 6, nome: "SQL", imagem: "sql.svg", link: "https://en.wikipedia.org/wiki/SQL" },
        { id: 7, nome: "Cloud", imagem: "cloud.svg", link: "https://aws.amazon.com/what-is-cloud-computing/" },
        { id: 8, nome: "Docker", imagem: "docker.svg", link: "https://www.docker.com/" },
        { id: 10, nome: "Git/GitHub", imagem: "git.svg", link: "https://git-scm.com/" },
        { id: 11, nome: "HTML5", imagem: "html.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { id: 12, nome: "CSS3", imagem: "css.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { id: 13, nome: "GraphQL", imagem: "graphql.svg", link: "https://graphql.org/" },
        { id: 14, nome: "Postman", imagem: "postman.svg", link: "https://www.postman.com/" },
        { id: 15, nome: "Swagger", imagem: "swagger.svg", link: "https://swagger.io/" },
        { id: 16, nome: "Excel", imagem: "excel.svg", link: "https://www.microsoft.com/pt-br/microsoft-365/excel" },

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
  max-width: 100%;
  overflow: hidden;
}

.tecnologias h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: #ffffff;
}

.icones-tecnologias {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0 10px;
}

.tecnologia-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}

.tecnologia-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.icone-tecnologia {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;
  margin-bottom: 8px;
}

.tecnologia-nome {
  font-size: 0.85rem;
  color: #C0C0C0;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  max-width: 80px;
  word-break: break-word;
}

.tecnologia-item:hover .icone-tecnologia {
  transform: scale(1.1);
}

.tecnologia-item:hover .tecnologia-nome {
  opacity: 1;
}

@media (max-width: 768px) {
  .tecnologia-nome {
    opacity: 1;
    font-size: 0.75rem;
  }
  
  .icones-tecnologias {
    gap: 15px;
  }
  
  .icone-tecnologia {
    width: 40px;
    height: 40px;
  }
}
</style>