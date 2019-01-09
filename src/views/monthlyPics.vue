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
      getDate: function(){
        const today = new Date()
        const year = String(today.getFullYear())
        let day = String(today.getDate())
        let month = String(today.getMonth()+1)

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${year}-${month}-${day}`
      },
      getFirstDay: function(){
        const today = new Date()
        const year = String(today.getFullYear())
        let month = String(today.getMonth()+1)

        if (month.length < 2) month = '0' + month;

        return `${year}-${month}-01`
      }
    },
    created() {
      const startDate = this.getFirstDay()
      const endDate = this.getDate()
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
      this.$http.get('url....where...we..get..pic').then(function(data) {
        this.days = data
      })
    }
  }

</script>

<style>

</style>

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-07-08