<template>
    <div>
      <img v-rotate-image="{ links: ['link1', 'link2', 'link3'], gap: 3000 }">
    </div>
  </template>
  
  <script>
  import ImageRotate from '/ImageRotate';
  
  export default {
    directives: {
      ImageRotate,
    },
    data() {
      return {
        // ...
      }
    },
    computed: {
      // ...
    },
    methods: {
      // ...
    },
  }
  </script>
  