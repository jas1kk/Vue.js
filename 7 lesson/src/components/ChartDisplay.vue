<template>
    <div>
      <div v-for="(data, index) in chartData" :key="index" :style="{ width: data.value + '%' }">{{ data.text }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['chartData']
  };
  </script>
  
  <style scoped>
    div {
      display: inline-block;
      height: 20px;
      background-color: lightgray;
      text-align: center;
    }
  </style>
  