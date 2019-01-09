<template>
  <div class="dailypic">
    <h1>Astronomy Picture of the Day</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/MonthlyPics">Pictures of the Month</router-link>

    <div class="pic-container">
      <h3 class="date">{{ getDay() }}</h3>
      <img class="image" v-bind:src="pic.url" alt="Daily Astronomy Picture"/>
      <p class="explanation">{{ pic.explanation }}</p>
    </div>
  </div>
</template>

<script>
  import nasaData from '../assets/data'
  import apiKey from "../apiKey";

  export default {
    data() {
      return {
        pic: nasaData[0]
      }
    },
    methods: {
      getDay: function(){
        const today = new Date()
        const year = today.getFullYear()
        const day = today.getDate()
        const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
        const month = months[today.getMonth()]

        return `${month} ${day}, ${year}`
      },
      getDate: function(){
        const today = new Date()
        const year = String(today.getFullYear())
        let day = String(today.getDate())
        let month = String(today.getMonth()+1)

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${year}-${month}-${day}`
      },
    },
    // created() {
    //   const date = this.getDate()
    //   const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    //   this.$http.get(url).then(function(data){
    //     this.pic = data
    //   })
    // }
  }
</script>

<style>
</style>


