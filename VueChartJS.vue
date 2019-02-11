<template>
  <section class="container">
    <h3>
      <p><b>Vue-chartjs:</b> vue-chartjs is a Chart.js wrapper that allows us to easily create reusable chart components. 
      <br/>Reusability means we can import the base chart class and extend it to create custom components.</p>
    </h3>
   <br><br>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h2><b style="color:#804d00">Group Stack Bar Chart</b></h2>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Bubble Chart</h3>
        <bubble-chart></bubble-chart>
      </div>
      <div class="column">
        <h3>Doughnut Chart</h3>
        <doughnut-chart>></doughnut-chart>  
      </div>
    </div>
  
  </section>
</template>

<script>
  import LineChart from '@/components/LineChart'
  import BubbleChart from '@/components/BubbleChart'
  import BarChart from '@/components/BarChart'
  import DoughnutChart from '@/components/DoughnutChart'

 
  export default {
    name: 'VueChartJS',
    components: {
      LineChart,
      BubbleChart,
      DoughnutChart,
      BarChart
    }
  }
</script>