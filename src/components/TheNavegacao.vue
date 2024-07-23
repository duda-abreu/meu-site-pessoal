<template>
  <nav>
    <ul>
      <li><router-link to="/">Início</router-link></li>
      <li><router-link to="/sobre">Sobre Mim</router-link></li>
      <li><router-link to="/certificados">Certificados</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
      <li><router-link to="/experiencias">Experiências</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavegacao'
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #5D2510;
  color: #fff;
  padding: 10px;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
}

a {
  color: #fff;
  text-decoration: none;
}

a.active {
  text-decoration: underline;
}
</style>
