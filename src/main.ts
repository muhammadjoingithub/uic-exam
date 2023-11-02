import './assets/index.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


import { createI18n } from 'vue-i18n'


const i18n = createI18n({
  legacy: false,
  locale: 'uz',
  messages: {
    uz: require('../locales/uz.json'),
    ru: require('../locales/ru.json'),
    en: require('../locales/en.json')
  }
})

createApp(App).use(i18n).mount('#app')
