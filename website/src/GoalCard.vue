<template>
  <div id="goalcard" class="section">

    <article class="media">
      <figure class="media-left">
        <p id="" class="image is-128x128">
          <img id="profilePicture" :src="profilePicture">
        </p>
        <p class="has-text-centered">
          <strong>{{ name }}</strong>
        </p>                
      </figure>
      <div class="media-content">
        <div class="content has-text-centered">
          <p class="is-size-3">
            ${{ betAmount }} 
          </p>
          <p>
            <strong>Goal: </strong>{{ goal }} 
          </p>
          <p>
            <strong>Deadline: </strong>{{ deadline }}
          </p>
          <progress class="progress is-success" :value="progress"  max="100"></progress>
        </div>
      </div>
    </article>

  </div>
</template>

<script>
export default {
  name: 'goalcard',
  props: [
    'id', 
    'profilePicture', 
    'name',
    'goal',
    'betAmount',
    'deadline',
    'progress'
  ]
}
</script>

<style>

#profilePicture {
  border-radius: 100%;
}

.section {
    padding: 1rem 0.5rem;
}

.content p:not(:last-child) {
  margin-bottom: 0.5rem;
}

</style>

<!-- Buttons for liking and replying (extra) -->
<!-- 
<nav class="level is-mobile">
  <div class="level-left">
    <a class="level-item">
      <span class="icon is-small"><i class="fas fa-heart"></i></span>
    </a>
    <a class="level-item">
      <span class="icon is-small"><i class="fas fa-reply"></i></span>
    </a>
  </div>
</nav> 
-->