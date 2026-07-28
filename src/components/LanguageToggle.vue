<template>
  <button
    class="language-toggle"
    type="button"
    @click="toggleLocale"
    :aria-label="i18nState.locale === 'pt' ? 'Switch to English' : 'Mudar para Português'"
  >
    {{ i18nState.locale === 'pt' ? 'EN' : 'PT' }}
  </button>
</template>

<script>
import { i18nState, toggleLocale } from '@/i18n'

export default {
  name: 'LanguageToggle',
  data() {
    return {
      i18nState
    }
  },
  methods: {
    toggleLocale
  }
}
</script>

<style scoped>
.language-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  height: 34px;
  flex-shrink: 0;
  padding: 0 8px;
  border-radius: 50px;
  border: 1px solid var(--border-color);
  background-color: var(--surface);
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 4px;
}

.language-toggle:hover {
  transform: scale(1.1);
  border-color: var(--accent-pink);
  color: var(--accent-pink);
  background-color: rgba(255, 143, 194, 0.18);
}
</style>
