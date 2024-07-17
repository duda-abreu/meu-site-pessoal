<template>
    <div class="certificados">
      <h2>Certificados</h2>
      <ul>
        <li v-for="certificado in certificados" :key="certificado.id">
          {{ certificado.nome }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      certificados: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .certificados {
    margin: 20px;
  }
  .certificados ul {
    list-style-type: none;
    padding: 0;
  }
  .certificados li {
    margin: 5px 0;
  }
  </style>
  
  