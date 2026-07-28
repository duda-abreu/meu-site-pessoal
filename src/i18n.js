import { reactive, watch } from 'vue'

const STORAGE_KEY = 'locale'

export const i18nState = reactive({
  locale: localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'pt'
})

export function setLocale(locale) {
  i18nState.locale = locale
  localStorage.setItem(STORAGE_KEY, locale)
}

export function toggleLocale() {
  setLocale(i18nState.locale === 'pt' ? 'en' : 'pt')
}

watch(
  () => i18nState.locale,
  locale => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'
  },
  { immediate: true }
)
