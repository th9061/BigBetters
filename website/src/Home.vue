<template>
  <div id="home">
    <section class="section">
      <div class="container">
        <h1 class="title">
          HOME PAGE
        </h1>
        <div class="column is-half is-offset-one-quarter">
          <div class="card">
            <div class="card-header-icon">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-header">
              <div class="card-header-title is-centered">
                John Smith
              </div>
            </div>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <progress class="progress is-success" value="60" max="100">60%</progress>
                <time datetime="2016-1-1">Due: 11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
          
        </div>


      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'home',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
