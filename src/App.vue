<template>
  <div id="app">
    <TheNavegacao />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNavegacao from './components/TheNavegacao.vue';
import './styles.css'; 

export default {
  components: {
    TheNavegacao
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden; 
}

#app {
  text-align: center;
  color: #C0C0C0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: rgb(147,51,180);
background: -moz-radial-gradient(circle, rgba(147,51,180,1) 2%, rgba(63,50,78,1) 40%, rgba(64,48,87,1) 80%, rgba(39,27,54,1) 100%);
background: -webkit-radial-gradient(circle, rgba(147,51,180,1) 2%, rgba(63,50,78,1) 40%, rgba(64,48,87,1) 80%, rgba(39,27,54,1) 100%);
background: radial-gradient(circle, rgba(147,51,180,1) 2%, rgba(63,50,78,1) 40%, rgba(64,48,87,1) 80%, rgba(39,27,54,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9333b4",endColorstr="#271b36",GradientType=1);
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}


@media (max-width: 768px) {
  .content {
    padding: 10px; 
  }
}
</style>