<template>
  <div class="dailypic">
    <h1>Astronomy Picture of the Day</h1>
    <router-link to="/"><img class="home-btn" src="../assets/home-icon.png" alt="Home Icon" /></router-link>
    <div class="pic-container">
      <h3 class="date">{{ getDay() }}</h3>
      <img class="image" v-bind:src="pic.url" alt="Daily Astronomy Picture" />
      <p class="explanation">{{ pic.explanation }}</p>
    </div>
    
    <button class="monthly-pic-btn">
      <router-link to="/MonthlyPics">Pictures of the Month</router-link>
    </button>

  </div>
</template>

// width="800"
<script>
  import nasaData from '../assets/data'
  import apiKey from "../apiKey";

  export default {
    data() {
      return {
        pic: nasaData[1]
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
  .dailypic {
    margin: 0;
    background-image: url("../assets/pluto.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .pic-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .date {
    color: #fff;
    padding: 30px 0 15px 0;
  }

  .image {
    width: 80%;
    box-shadow: 0 0 6px 0 #fff;
    border: 3px solid #fff;

  }

  .explanation {
    color: #fff;
    padding: 20px 70px 20px 70px;
    text-align: center;
  }
</style>