<template>
  <div>
    <chart-data v-for="(data, index) in chartData" :key="index" :data="data"></chart-data>
    <chart-display :chartData="chartData"></chart-display>
  </div>
</template>

<script>
import ChartData from './ChartData.vue';
import ChartDisplay from './ChartDisplay.vue';

export default {
  components: {
    ChartData,
    ChartDisplay
  },
  data() {
    return {
      chartData: [
        { text: 'Data 1', value: 20 },
        { text: 'Data 2', value: 30 },
        { text: 'Data 3', value: 50 }
      ]
    };
  }
};
</script>

