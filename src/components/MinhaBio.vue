<template>
    <div class="minha-bio">
      <h2>Minha Biografia</h2>
      <p>{{ bio }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bio: "Sua biografia detalhada aqui.", // Replace with your bio content
      };
    },
    methods: {
      // Add any additional methods here
    },
  };
  </script>
  
  <style scoped>
  .minha-bio {
    margin-top: 30px;
  }
  
  .minha-bio h2 {
    text-align: center;
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  
  .minha-bio p {
    font-size: 1.2em;
    line-height: 
  