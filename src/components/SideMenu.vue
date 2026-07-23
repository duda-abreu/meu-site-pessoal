<template>
  <header class="navbar-wrapper">
    <nav class="floating-nav">
      <router-link to="/" class="nav-link">
        HOME
      </router-link>

      <router-link to="/experiencias" class="nav-link">
        EXPERIÊNCIAS
      </router-link>

      <router-link to="/skills" class="nav-link">
        SKILLS
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}

.floating-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #111111;
  padding: 10px 24px;
  border-radius: 50px;
  border: 1px solid #2e2e2e;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.nav-link {
  color: #a0a0a0;
  text-decoration: none;
  font-family: 'IBM Plex Mono', monospace, sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link.router-link-exact-active {
  color: #ffffff;
  font-weight: 700;
}

.nav-link.router-link-exact-active::before {
  content: '•';
  margin-right: 6px;
  color: #ffffff;
}
</style>