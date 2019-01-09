<template>
  <div class="dailypic">
    <h1>Astronomy Picture of the Day</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/MonthlyPics">Pictures of the Month</router-link>

    <div class="pic-container">
      <h3 class="date">{{ getDate() }}</h3>
      <img class="image" v-bind:src="pic.url" alt="Daily Astronomy Picture"/>
      <p class="explanation">{{ pic.explanation }}</p>
    </div>
  </div>
</template>

<script>
  import nasaData from '../assets/data'

  export default {
    data() {
      return {
        pic: nasaData[0]
      }
    },
    methods: {
      getDate: function(){
        const today = new Date()
        const year = today.getFullYear()
        const day = today.getDate()
        const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
        const month = months[today.getMonth()]

        return `${month} ${day}, ${year}`
      }
    },
    // created() {
    //   this.$http.get('http...url...api...date').then(function(data){
    //     this.pic = data
    //   })
    // }
  }
</script>

<style>
</style>


