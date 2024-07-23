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

a {
  color: #533153; /* Cor do texto */
  text-decoration: none; /* Remove sublinhado do link */
  font-size: 0.8em; /* Tamanho da fonte reduzido */
  display: flex; /* Usar flexbox para alinhamento interno */
  align-items: center; /* Alinhar texto e ícone verticalmente */
  font-weight: bold; /* Fonte em negrito */
}

a.active {
  text-decoration: underline; /* Sublinhado para link ativo */
}
</style>
