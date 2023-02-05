<template>
    <div>{{ data.text }}: {{ data.value }}%</div>
  </template>
  
  <script>
  export default {
    props: ['data']
  };
  </script>
  