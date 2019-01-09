<template>
  <div class="monthlyPics">
    <h1>{{this.month}} Astronomy Pictures</h1>
    <router-link to="/"><img class="home-btn" src="../assets/home-icon.png" alt="Home Icon" /></router-link>
    <div class="card-container">
      <div v-for="day in days" class='day-card' :key="day.id" >
        <h4> {{getDay(day.date)}} </h4>
        <img v-bind:src="day.url" class="day-image" alt="Picture of the Day" width="200" />
      </div>
    </div>
    <button class="daily-pic-btn">
      <router-link to="/DailyPic">Picture of the Day</router-link>
    </button>
  </div>
</template>

// import apiKey from "../apiKey";

<script>
import nasaData from "../assets/data";

export default {
  data() {
    return {
      days: nasaData,
      month: ""
    };
  },
  methods: {
    getDay: function(today) {
      const year = today.slice(0, 4);
      const day = today.slice(8, 10);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const month = months[today.slice(5, 7) - 1];
      this.month = month;

      return `${month} ${day}, ${year}`;
    }
    // getDate: function(){
    //   const today = new Date()
    //   const year = String(today.getFullYear())
    //   let day = String(today.getDate())
    //   let month = String(today.getMonth()+1)

    //   if (month.length < 2) month = '0' + month;
    //   if (day.length < 2) day = '0' + day;

    //   return `${year}-${month}-${day}`
    // },
    // getFirstDay: function(){
    //   const today = new Date()
    //   const year = String(today.getFullYear())
    //   let month = String(today.getMonth()+1)

    //   if (month.length < 2) month = '0' + month;

    //   return `${year}-${month}-01`
    // }
  }
  // created() {
  //   const startDate = this.getFirstDay()
  //   const endDate = this.getDate()
  //   const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
  //   this.$http.get(url).then((data) => {
  //     this.days = data
  //   }, (error) => {
  //     console.log("Error", error)
  //   })
  //   .catch((error) => {
  //     console.log("Caught Error", error)
  //   })
  // }
};
</script>

<style>
.card-container {
  margin: 60px 40px 40px 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}

.day-card {
  box-shadow: 0 0 6px 0 #ffffff;
  margin: 10px;
}

h1 {
  text-align: center;
  color: #fff;
  margin: 0;
  padding-top: 20px;
}

h4 {
  text-align: center;
  color: #fff;
}

.home-btn {
  width: 70px;
  position: absolute;
  top: 20px;
  right: 20px;
}

.monthlyPics {
  margin: 0;
  background-image: url("../assets/pluto.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.monthly-pic-btn,
.daily-pic-btn {
  background-color: #4a6298;
  font-size: 22px;
  box-shadow: 0 0 6px 0 #4a6298;
  border: 3px solid #4a6298;
  color: #93a5cb;
  text-shadow: 0 0 2px #4a6298;
}

.monthly-pic-btn:hover,
.daily-pic-btn:hover {
  background-color: #93a5cb;
  text-shadow: 0 0 2px #93a5cb;
  box-shadow: 0 0 6px 0 #fff;
  border: 3px solid #93a5cb;
  color: #4a6298;
}
</style>
