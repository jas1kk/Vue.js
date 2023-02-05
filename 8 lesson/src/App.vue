<template>
  <div>
    <img v-rotate-image="{ links: ['link1', 'link2', 'link3'], gap: 3000 }">
  </div>
</template>

<script>
import ImageRotate from './image-rotate'

export default {
  directives: {
    ImageRotate,
  },
  // ...
}
</script>

