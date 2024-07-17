<template>
    <div class="meu-nome">
      <h1>{{ nome }}</h1>
      <p>{{ introducao }}</p>
      <a href="https://www.linkedin.com/in/mariaeduardaabreu/" target="_blank">LinkedIn</a>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      nome: "Maria Eduarda Abreu",
      introducao: "Breve introdução sobre você.",
    };
  },
  methods: {
    goToLinkedIn() {
      window.location.href = "https://www.linkedin.com/in/mariaeduardaabreu/";
    }
  },
};
</script>
  
  <style scoped>
  .meu-nome {
    text-align: center;
  }
  
  .meu-nome h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  .meu-nome p {
    font-size: 1.2em;
    line-height: 1.5;
  }
  
  .meu-nome a {
    display: inline-block;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 15px;
  }
  </style>
  