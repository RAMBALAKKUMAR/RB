<template>
    <section><p align="left">
        <center><b>Comparisons:</b>
So now that we’ve gone through the three Vue.js wrappers for Chart.js, what are the pros and cons of each?
</center><br><br>
<b style="color:blue">vue-chartjs:</b>
vue-chartjs is perhaps the most powerful of the three wrappers.
 It gives so much room for flexibility and also ships with a reactivity feature
  (the ability to re-render a chart automatically if there’s been a change in the data).
<br>
A con for the wrapper would be that configuring the chart can be somewhat complex at the beginning,
 due to the various options available, and also because you have to create an external file to hold the configuration for the wrapper.
<br><br>
<b style="color:blue">vue-charts:</b>
vue-chartjs is a pretty good Chart.js wrapper. It’s very easy to set up, unlike vue-chartjs. 
 It doesn’t require you to create separate components to process data and render charts. 
 All the data required for the chart can be instantiated in the Vue instance, as seen in the examples above.
 It also ships with a reactivity feature (the ability to render a chart automatically if there’s been a change in the data set) without a need for mixins.
<br><br>
<b style="color:blue">vue-chartkick:</b>
vue-chartkick is also a pretty good Chart.js wrapper. It may be the wrapper with the easiest path to usage among the three Chart.js wrappers.
The data set for the chart can be added in two different ways in vue-chartkick. We can do something like <b>bar-chart :data="[['Work', 1322], ['Play', 1492]]"</b>(opening and closing tag),
 in which the data is added inline, or <b>line-chart :data="chartData"</b>(opening and closing tag), and we declare the chartData array in the Vue data object as seen above in the examples.
 It also ships with an awesome feature that allows you to download your charts as an image — something that the other wrappers lack.
<br>
<b style="color:red">Note:</b> The only disadvantage of vue-chartkick is that it doesn’t support reactivity out of the box.
   </p> </section>
</template>
