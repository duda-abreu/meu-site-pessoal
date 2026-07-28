<template>
  <footer class="site-footer">
    <p>&copy; 2026 - {{ i18nState.locale === 'pt' ? 'Criado por' : 'Created by' }} Maria Eduarda Abreu</p>
  </footer>
</template>

<script>
import { i18nState } from '@/i18n'

export default {
  name: 'SiteFooter',
  data() {
    return { i18nState }
  }
}
</script>

<style scoped>
.site-footer {
  width: 100%;
  padding: 24px 0;
  text-align: center;
  color: var(--text-secondary, #a0a0a0);
  font-size: 0.85rem;
  border-top: 1px solid var(--border-color, #2e2e2e);
}
</style>
