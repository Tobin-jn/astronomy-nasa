<template>
  <div class="home">
    <HelloWorld msg="Daily Astronomer"/>

    <button class="daily-btn btn">
      <router-link to="/DailyPic">Picture of the Day</router-link>
    </button>
    <button class="monthly-btn btn">
      <router-link to="/MonthlyPics">Pictures of the Month</router-link>
    </button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style>
.home {
  margin: 0;
  height: 100vh;
  background-image: url("../assets/jupiter.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>




