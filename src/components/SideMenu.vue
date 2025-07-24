<template>
  <div>
    <button class="menu-hamburger" @click="toggleMenu" aria-label="Abrir menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav v-if="menuAberto" class="side-menu" @click.self="toggleMenu">
      <ul>
        <li><a href="#inicio" @click="toggleMenu">Início</a></li>
        <li><a href="#experiencias" @click="toggleMenu">Experiências</a></li>
        <li><a href="#skills" @click="toggleMenu">Skills</a></li>
        <li><a href="#certificados" @click="toggleMenu">Certificados</a></li>


      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      menuAberto: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuAberto = !this.menuAberto;
    },
  },
};
</script>

<style scoped>
.menu-hamburger {
  position: fixed;
  top: 15px;
  right: 15px;
  width: 28px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1100;
  background: transparent;
  border: none;
  padding: 0;
}

.menu-hamburger span {
  display: block;
  height: 3px;
  background-color: #C0C0C0;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}

.menu-hamburger:hover span {
  background-color: #9333b4;
}

.side-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 170px;
  height: 100vh;
  background-color: rgba(39, 27, 54, 0.95);
  box-shadow: -2px 0 5px rgba(0,0,0,0.4);
  padding: 50px 20px 20px 20px;
  z-index: 1050;
  display: flex;
  flex-direction: column;
}

.side-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.side-menu a {
  color: #C0C0C0;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Figtree', sans-serif;
  font-size: 1.1em;
  transition: color 0.3s ease;
}

.side-menu a:hover {
  color: #9333b4;
}
</style>
