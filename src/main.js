import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { messages, registerI18n } from './locales/index.js'
import './styles.css'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  missingWarn: false,
  fallbackWarn: false
})

registerI18n(i18n)

createApp(App).use(i18n).mount('#app')
