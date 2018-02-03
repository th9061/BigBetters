<template>
  <div id="social">
    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered">
          Social
        </h1>

        <!-- Alternative 2 column formatting -->
        <!-- <div class="columns">
          <div class="column is-half">
            <GoalCard 
              v-for="(bet, index) in group"
              v-bind:key="bet.id"
              v-bind="bet"
            >
            </GoalCard>
          </div>
          <div class="column is-half">
            <GoalCard 
              v-for="(bet, index) in group"
              v-bind:key="bet.id"
              v-bind="bet"
            >
            </GoalCard>
          </div>
        </div> -->

        <div class="column is-half is-offset-one-quarter">
          
          <GoalCard 
            v-for="(bet, index) in group"
            v-bind:key="bet.id"
            v-bind="bet"
          >
          </GoalCard>
          
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import GoalCard from './GoalCard.vue'

export default {
  name: 'social',
  components: {
    GoalCard
  },
  data () {
    return {
      group: [
        {
          id: 1,
          profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
          name: 'Victor',
          goal: 'Wake up early',
          betAmount: 10,
          deadline: 'Feb 30, 2018',
          progress: 5,
        },
        {
          id: 2,
          profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
          name: 'Jerry',
          goal: 'Eat healthy',
          betAmount: 5,
          deadline: 'Feb 10, 2018',
          progress: 60,
        },
        {
          id: 3,
          profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
          name: 'Clara',
          goal: '5k run 3 times/week',
          betAmount: 50,
          deadline: 'Aug 15, 2018',
          progress: 80,
        },
        {
          id: 4,
          profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
          name: 'Ray',
          goal: 'Meal prep every Sunday',
          betAmount: 20,
          deadline: 'Mar 4, 2018',
          progress: 45,
        }
      ],
    }
  }
}
</script>

<style>

</style>
