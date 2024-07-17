<template>
    <div class="minhas-experiencias">
      <h2>Minhas Experiências</h2>
      <ul>
        <li v-for="experiencia in experiencias" :key="experiencia.id">
          <h3>{{ experiencia.titulo }}</h3>
          <p>{{ experiencia.empresa }}</p>
          <p>{{ experiencia.periodo }}</p>
          <ul>
            <li v-for="responsabilidade in experiencia.responsabilidades" :key="responsabilidade">
              {{ responsabilidade }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experiencias: [
          {
            id: 1,
            titulo: "Desenvolvedor Web",
            empresa: "Empresa 1",
            periodo: "2020-01-01 - 2022-03-31",
            responsabilidades: [
              "Desenvolvimento de front-end com Vue.js, React e Angular",
              "Criação de APIs RESTful com Node.js e Express",
              "Implementação de banco de dados com PostgreSQL e MongoDB",
            ],
          },
          {
            id: 2,
            titulo: "Analista de Dados",
            empresa: "Empresa 2",
            periodo: "2022-04-01 - Presente",
            responsabilidades: [
              "Coleta e limpeza de dados de diversas fontes",
              "Análise de dados com Python e R",
              "Criação de visualizações de dados com Tableau e Power BI",
            ],
          },
          // Add more experiences here
        ],
      };
    },
    methods: {
      // Add any additional methods here
    },
  };
  </script>
  
  <style scoped>
  .minhas-experiencias {
    margin-top: 30px;
  }
  
  .minhas-experiencias h2 {
    text-align: center;
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  
  .minhas-experiencias ul {
    list-style: none;
    padding: 0;
  }
  
  .minhas-experiencias li {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  
  .minhas-experiencias h3 {
    font-size: 1.4em;
    margin-top: 0;
  }
  
  .minhas-experiencias p {
    margin-top: 5px;
  }
  
  .minhas-experiencias ul ul {
    margin-left: 20px;
  }
  </style>
  