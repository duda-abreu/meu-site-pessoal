<template>
    <div class="sobre-container">
      <div class="sobre-texto">
        <h1>Sobre Mim</h1>
        <p>
          Olá! Eu sou a Maria Eduarda Abreu, mas pode me chamar de Duda. Sou estudante de Ciência da Computação pela Universidade do Estado do Rio de Janeiro.
        </p>
        <p>
          Estou apaixonada por tecnologia e aprendizado contínuo. Clique em <a @click="abrirModal('certificados')">Certificados</a> para ver mais detalhes sobre minhas conquistas e certificações.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      abrirModal(modalType) {
        // Lógica para abrir o modal
      }
    }
  }
  </script>
  
  <style scoped>
  .sobre-container {
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  .sobre-texto h1 {
    font-size: 2em;
    color: #333;
  }
  
  .sobre-texto p {
    font-size: 1.2em;
    margin-top: 10px;
  }
  
  a {
    color: #942f18;
    text-decoration: none;
    font-weight: bold;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  