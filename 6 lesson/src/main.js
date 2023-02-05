import { createApp } from 'vue'
import App from './App.vue'
import PostEditor from './components/PostEditor.vue'

import './assets/main.css'

createApp(App).mount('#app')

Vue.component('post-editor', PostEditor);

new Vue({
  el: '#app'
});

