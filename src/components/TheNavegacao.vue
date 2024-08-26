<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <img src="@/assets/home.svg" alt="Home" class="nav-icon"/> Início
        </router-link>
      </li>
      <li>
        <router-link to="/sobre">
          <img src="@/assets/about.svg" alt="Sobre Mim" class="nav-icon"/> Sobre Mim
        </router-link>
      </li>
      <li>
        <router-link to="/certificados">
          <img src="@/assets/certificate.svg" alt="Certificados" class="nav-icon"/> Certificados
        </router-link>
      </li>
      <li>
        <router-link to="/skills">
          <img src="@/assets/skills.svg" alt="Skills" class="nav-icon"/> Skills
        </router-link>
      </li>
      <li>
        <router-link to="/experiencias">
          <img src="@/assets/experience.svg" alt="Experiências" class="nav-icon"/> Experiências
        </router-link>
      </li>
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
  background-color: transparent;
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  margin: 0 15px;
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

a {
  color: #C0C0C0;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  font-family: 'Figtree', sans-serif;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, color 0.3s ease; 
}

a:hover {
  transform: scale(1.1); 
  color: #fff; /* muda a cor ao passar o mouse */
  text-decoration: none; 
}

a:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  transition: background-color 0.3s ease;
}


</style>