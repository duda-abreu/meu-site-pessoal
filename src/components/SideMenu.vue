<template>
  <header class="navbar-wrapper">
    <nav class="floating-nav">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        class="nav-link"
        :class="{ 'nav-link-active': activeSection === item.id }"
        @click.prevent="scrollToSection(item.id)"
      >
        {{ item.label }}
      </a>
      <ThemeToggle />
      <LanguageToggle />
    </nav>
  </header>
</template>

<script>
import ThemeToggle from '@/components/ThemeToggle.vue'
import LanguageToggle from '@/components/LanguageToggle.vue'
import { i18nState } from '@/i18n'

const NAV_LABELS = {
  pt: { home: 'HOME', 'sobre-mim': 'SOBRE MIM', experiencias: 'EXPERIÊNCIAS', skills: 'SKILLS' },
  en: { home: 'HOME', 'sobre-mim': 'ABOUT ME', experiencias: 'EXPERIENCE', skills: 'SKILLS' }
}

export default {
  name: 'SideMenu',
  components: {
    ThemeToggle,
    LanguageToggle
  },
  data() {
    return {
      i18nState,
      sectionIds: ['home', 'sobre-mim', 'experiencias', 'skills'],
      activeSection: 'home',
      observer: null
    }
  },
  computed: {
    navItems() {
      const labels = NAV_LABELS[this.i18nState.locale]
      return this.sectionIds.map(id => ({ id, label: labels[id] }))
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(
      this.handleIntersect,
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    this.sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) this.observer.observe(el)
    })
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id
        }
      })
    },
    scrollToSection(id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
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
  background-color: var(--surface);
  padding: 10px 24px;
  border-radius: 50px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 20px var(--shadow-color);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-family: 'IBM Plex Mono', monospace, sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 20px;
}

.nav-link:hover {
  color: var(--accent-pink);
  background: rgba(255, 143, 194, 0.16);
}

.nav-link.nav-link-active {
  color: var(--accent-pink);
  font-weight: 700;
}

.nav-link.nav-link-active::before {
  content: '⟡';
  margin-right: 6px;
  color: var(--accent-blue);
}

@media (max-width: 640px) {
  .navbar-wrapper {
    top: 10px;
    width: calc(100% - 20px);
  }

  .floating-nav {
    gap: 4px;
    padding: 8px 14px;
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    justify-content: flex-start;
  }

  .floating-nav::-webkit-scrollbar {
    display: none;
  }

  .nav-link {
    font-size: 0.68rem;
    padding: 4px 6px;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .nav-link.nav-link-active::before {
    margin-right: 3px;
  }
}
</style>