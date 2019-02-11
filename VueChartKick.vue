<template>
  <section class="container">
    <h3>
        <p><b>vue-chartkick:</b> vue-chartkick is a Vue wrapper that allows you to create beautiful charts with one line.
        <br>We’ll be demonstrating the use of this library with four examples. We’ll be creating a line chart, bar chart, scatter chart and also use the download feature (downloadable charts).
        </p>
    </h3><br><br>
    <div class="columns">
      <div class="column">
        <h3>Agent-A: Line Chart</h3>
        <line-chart :data="chartData"></line-chart>
      </div>
      <div class="column">
       <h3>Agent-B: Downloadable Line Chart</h3>
        <line-chart :data="chartData" :download="true"></line-chart>
      </div>
    </div><br><br>
    <div class="columns">
      <div class="column">
        <h3>Agent-C: Scatter Chart</h3>
        <scatter-chart :data="[[170.0, 90.0],[175.0, 80.0],[180.0, 70.0],[185.0, 60.0],[190.0, 75.0],[195.0, 60.0]]"></scatter-chart> 
      </div>
      <div class="column">
         <h3>Agent-D: Bar Chart</h3>
        <bar-chart :data="[['Duke', 1322], ['Pulsar', 1492],['Ignitor',120 ],['Ducati', 1592]]"></bar-chart>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'VueChartKick',
    data () {
      return {
        chartData: [['KTM Duke', 44], ['Pulsar', 27], ['Ignitor', 60], ['Ducati', 55], ['Dio', 37]]
      }
    }
  }
</script>