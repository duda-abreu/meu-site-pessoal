<template>
    <div class="bio">
      <p>{{ biografia }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      biografia: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .bio {
    margin: 20px;
    text-align: center;
  }
  </style>
  