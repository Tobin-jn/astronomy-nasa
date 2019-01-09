<template>
  <div class="monthlyPics">
    <h1>This is MONTHLY page</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/DailyPic">Picture of the Day</router-link>

    <div v-for="day in days" class='day-card'>
      <h4> {{day.date}} </h4>
      <img v-bind:src="day.url" class="day-image" alt="Picture of the Day" width="200" />
    </div>
  </div>
</template>

<script>
  import nasaData from '../assets/data'

  export default {
    data() {
      return {
        days: nasaData
      }

    },
    methods: {

    },
    // created() {
    //   this.$http.get('url....where...we..get..pic').then(function(data) {
    //     const dayPics = [...this.days, data]
    //     this.days = dayPics
    //   })
    // }
  }

</script>

<style>

</style>