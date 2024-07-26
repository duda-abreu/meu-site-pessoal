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
  width: 100%; /* Ajusta a largura para toda a largura da tela */
  background-color: transparent; /* Fundo transparente */
  color: #fff; /* Cor do texto */
  padding: 10px 0; /* Padding na vertical */
  display: flex; /* Usar flexbox para o layout */
  justify-content: center; /* Centralizar itens horizontalmente */
  align-items: center; /* Alinhar itens verticalmente no centro */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra opcional */
}

ul {
  display: flex; /* Flexbox para o layout da lista */
  list-style: none; /* Remove marcadores de lista */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

li {
  display: flex; /* Flexbox para o item da lista */
  align-items: center; /* Alinhar itens verticalmente no centro */
  margin: 0 15px; /* Espaçamento entre os itens */
}

.nav-icon {
  width: 20px; /* Tamanho dos ícones */
  height: 20px; /* Tamanho dos ícones */
  margin-right: 8px; /* Espaçamento entre o ícone e o texto */
}

a:hover {
  position: relative; /* Allow positioning of the pseudo-element */
}

a:hover::after {
  content: ''; /* Empty content for the pseudo-element */
  position: absolute; /* Absolute positioning within the link */
  bottom: 0; /* Position at the bottom of the link */
  left: 0;
  width: 100%; /* Cover the entire width of the link */
  height: 2px; /* Height of the underline */
  background-color: #34263e; /* Desired underline color */
  box-shadow: none; /* Remove the box shadow */
  transition: background-color 0.3s ease; /* Smooth transition */
}

a {
  color: #C0C0C0; /* Text color */
  text-decoration: none; /* Remove underline */
  font-size: 0.8em; /* Font size */
  font-weight: bold; /* Bold font weight */
  display: flex; /* Flexbox for alignment */
  align-items: center; /* Vertical alignment */
}

a.active {
  text-decoration: underline; /* Sublinhado para link ativo */
}
</style>
