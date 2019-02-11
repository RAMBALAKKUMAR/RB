<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Bar } from 'vue-chartjs'

  //Exporting this so it can be used in other components
  export default {
    extends: Bar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['2016', '2017', '2018','2019'],
          datasets: [
            {
              label: 'Duke Bike',
              backgroundColor: '#9933ff',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: [12, 19, 10, 20],
              stack:'bike'
            },
             {
              label: 'Pulsar Bike',
              backgroundColor: '#00b300',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#9933ff',
              //Data to be represented on y-axis
              data: [8, 22, 30, 40],
              stack:'bike'
            },
             {
              label: 'Ducati Bike',
              backgroundColor: '#4a4a4a',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#9933ff',
              //Data to be represented on y-axis
              data: [18, 32, 20, 45],
              stack:'bike'
            },
            {
              label: 'BMW Car',
              backgroundColor: 'red',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#9933ff',
              //Data to be represented on y-axis
              data: [11, 22, 30, 40],
              stack:'car'
            },
            {
              label: 'Suzuki Car',
              backgroundColor: '#999966',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#9933ff',
              //Data to be represented on y-axis
              data: [25, 11, 13, 45],
              stack:'car'
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {styleMode:true,
          scales: {
            yAxes: [{className: 'highcharts-color-0',
              ticks: {
                // beginAtZero: true,
                 stepSize: 25
                //  maxTicksLimit: 8
              },
              gridLines: {
                display: true
              },
              //stacked:false
            }],
            xAxes: [ 
              {className: 'highcharts-color-0',
              //stacked: false,
              categoryPercentage: 0.5,
              barPercentage: 1,
              gridLines: 
              {
                display: false
              }
            }]
          },
          legend:
          { 
            display: true
          },
        // column:
        // {
        //   stacking:'normal'
        // },
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

<style>
/* Link the series colors to axis colors */
.highcharts-color-0 {
	fill: #7cb5ec;
	stroke: #7cb5ec;
}
.highcharts-axis.highcharts-color-0 .highcharts-axis-line {
	stroke: #7cb5ec;
}
.highcharts-yaxis .highcharts-axis-line {
	stroke-width: 2px;
}

</style>
