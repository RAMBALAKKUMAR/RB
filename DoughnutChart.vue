<script>
  //Importing Doughnut class from the vue-chartjs wrapper
  import { Doughnut } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Doughnut,
    data () {
      return {
        //put your datacollection like data,color,label as shown below:
        datacollection: {
          labels: ['KTM','Pulsar','Ignitor','Apache','Dio'],
          datasets: [
            {
              
              hoverBorderWidth:3,
              hoverBorderColor:"purple",
              hoverBackgroundColor:["#F84B0A","#3E4650","#AE7112","#43604E","#3FB6F6"],
              backgroundColor:["#ff0066","#9933ff","#009933","aqua","blue"],
              data:[20,30,15,21,15]
            }
          ]
        },
      //PUT Options data like chart's title, legend's position, and so on.
        options: {
          title:{
          display:true,
          position:"bottom",
          text:"No. of Bikes have been sold in 2019"
        },
          legend: {
            position:'right',
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>