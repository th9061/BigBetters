<template>
  <div id="navbar">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://localhost:8080/home">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </div>

      <div class="navbar-start">
        <a class="navbar-item" href="http://localhost:8080/social">
          <span class="icon is-large">
            <i class="fas fa-3x fa-users"></i>
          </span>
        </a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item">
          <a class="navbar-item">
            <span class="icon is-large">
              <i class="fas fa-3x fa-info-circle"></i>
            </span>
          </a>
        </a>
        <a class="navbar-item">
          <a class="navbar-item">
            <span class="icon is-large">
              <i class="fas fa-3x fa-user-circle"></i>
            </span>
          </a>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>

</style>
