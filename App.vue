
<template>

  <div id="app">
        <img src="./assets/rb_logo.png"/>
        <h2>Welcome to Wisdomleaf Technologies</h2>
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/chartjs">vue-chartjs</router-link></li>
        <li><router-link to="/charts">vue-charts</router-link></li>
        <li><router-link to="/chartkick">vue-chartkick</router-link></li>
        <li><router-link to="/Compare">Comparision</router-link></li>
        <li><router-link to="/About">About Us</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  height: 90px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}

#nav ul {
  list-style-type: none;
  padding: 0;
}

#nav ul li {
  display: inline-block;
  margin: 0 10px;
}

h1 {
  font-size: 1.75em;
}

h2 {
  line-height: 2.5em;
  font-size: 1.25em;
}
</style>