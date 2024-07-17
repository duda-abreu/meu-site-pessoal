<template>
    <div class="meus-certificados">
      <h2>Meus Certificados</h2>
      <ul>
        <li v-for="certificado in certificados" :key="certificado.id">
          <h3>{{ certificado.nome }}</h3>
          <p>{{ certificado.instituicao }}</p>
          <p>Data de Conclusão: {{ certificado.data }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        certificados: [
          { id: 1, nome: "Certificado 1", instituicao: "Instituição 1", data: "2020-01-01" },
          { id: 2, nome: "Certificado 2", instituicao: "Instituição 2", data: "2021-02-02" },
          // Add more certificates here
        ],
      };
    },
    methods: {
      // Add any additional methods here
    },
  };
  </script>
  
  <style scoped>
  .meus-certificados {
    margin-top: 30px;
  }
  
  .meus-certificados h2 {
    text-align: center;
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  
  .meus-certificados ul {
    list-style: none;
    padding: 0;
  }
  
  .meus-certificados li {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  
  .meus-certificados h3 {
    font-size: 1.4em;
    margin-top: 0;
  }
  
  .meus-certificados p {
    margin-top: 5px;
  }
  </style>
  