<script>
  //Importing Line class from the vue-chartjs wrapper
  import { Line } from 'vue-chartjs'

  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Duke', 'Ignitor', 'Pulsar', 'Apache', 'FZ', 'Dio'],
          datasets: [
            {
              label: '2017 Reports',
              backgroundColor: 'aqua',
              pointBackgroundColor: '#000',
              borderWidth: 5,
              pointBorderColor: '#249EBF',
              showLine:true,//bydefault true. If false, the line is not drawn for this dataset.
               
              //Data to be represented on y-axis
              data: [40, 90, 30, 40, 50, 80]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
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