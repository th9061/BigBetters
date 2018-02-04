<template>
	<transition name="fade">
	  <div id="navhelp" class="modal is-active" v-if="visible">
	    <div class="modal-background"></div>
	    <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">About Better</p>
          <button class="delete" aria-label="close" v-on:click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="has-text-centered">
	          <a :href="gitHubLink" target="_blank">
	            Visit our GitHub!
	          </a>
          </p>
        </section>
      </div>

	  </div>
	</transition>
</template>

<script>
export default {
  name: 'navhelp',
  props: ['visible'],
  data () {
  	return {
	  	gitHubLink: 'https://github.com/th9061/BigBetters'
  	}
  },
  methods: {
    closeModal: function () {
      this.$emit('closeModal');
    }
  }
}
</script>

<style>

</style>
