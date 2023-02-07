<template>
  <div>
    <router-link to="/">Main</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-view />
  </div>
</template>

<script>
import Main from './Main.vue'
import Gallery from './Gallery.vue'
import Contacts from './Contacts.vue'

export default {
  components: {
    Main,
    Gallery,
    Contacts
  }
}
</script>
