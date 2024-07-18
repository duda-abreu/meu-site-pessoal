<template>
    <div class="meu-nome">
      <h1>{{ nome }}</h1>
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
  </style>
  