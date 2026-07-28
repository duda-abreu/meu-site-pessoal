<template>
  <button
    class="theme-toggle"
    type="button"
    @click="toggleTheme"
    :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
  >
    {{ isDark ? '☀' : '☾' }}
  </button>
</template>

<script>
const THEME_KEY = 'theme'

export default {
  name: 'ThemeToggle',
  data() {
    return {
      isDark: false
    }
  },
  mounted() {
    this.isDark = localStorage.getItem(THEME_KEY) === 'dark'
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      localStorage.setItem(THEME_KEY, this.isDark ? 'dark' : 'light')
      this.applyTheme()
    },
    applyTheme() {
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light')
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background-color: var(--surface);
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 4px;
}

.theme-toggle:hover {
  transform: scale(1.1);
  border-color: var(--accent-pink);
  color: var(--accent-pink);
  background-color: rgba(255, 143, 194, 0.18);
}
</style>
