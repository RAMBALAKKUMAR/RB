<template>
  <section class="container">
    <h3>
        <p><b>vue-charts:</b> vue-charts takes a very different approach to building charts from vue-chartjs.
         <br>It doesn’t require you to create separate components to process data and render the chart.</p>
    </h3><br><br>
    <div><h1 style="color:#001a00">Sample Reoprt Dashboard</h1></div>
    <div class="columns">
      <div class="column">
        <h3>Data Binding Line Chart</h3>
        <!--Data Binding Line Chart Example-->
        <form @submit.prevent="addData">
        <input placeholder="Add a Data" v-model="dataentry">
        <input placeholder="Add a Label" v-model="datalabel">
        <button type="submit">Submit</button>
        </form>
        <chartjs-line :labels="labels" :data="dataset" :bind="true"></chartjs-line>

      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <chartjs-bar></chartjs-bar>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Radar Chart</h3>
        <chartjs-radar></chartjs-radar>
      </div>
      <div class="column">
        <h3>Line Chart</h3>
       <chartjs-line></chartjs-line>
      </div>
    </div>
   
  </section>
</template>


<script>
  export default {
    name: 'VueCharts',
    data () {
      return {
        labels: ['KTM','Pulsar','Ignitor','Apache','Dio'],
        dataset: [65, 59, 80, 81, 56]
      }
    },
    methods: {
        addData () {
            this.dataset.push(this.dataentry)
            this.labels.push(this.datalabel)
            this.datalabel = ''
            this.dataentry = ''
        }
    }
}
</script>