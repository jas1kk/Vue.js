<template>
  <div>
    <img :src="`https://picsum.photos/id/${id}/300/300`"/>
    <img :src="`https://picsum.photos/id/${id}/300/300`"/>
    <img :src="`https://picsum.photos/id/${id}/300/300`"/>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>