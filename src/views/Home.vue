<template>
  <div class="home">
    <h1 class="heading">Daily Astronomer</h1>
    <div class="button-container">
      <button>
        <router-link to="/DailyPic">Picture of the Day</router-link>
      </button>
      <button>
        <router-link to="/MonthlyPics">Pictures of the Month</router-link>
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: "home",
};
</script>

<style scoped>
.home {
  margin: 0;
  height: 100vh;
  background-image: url("../assets/jupiter.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.heading {
  color: white;
  font-size: 2.2em;
  padding: 30px 0 0 30px;

}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  top: 70vh;
}

button {
  background-color: #2f4552;
  box-shadow: 0 0 6px 0 #2f4552;
  border: 3px solid #2f4552;
  color: #2f4552;
  text-shadow: 0 0 2px #2f4552;
  padding: 20px;
  margin: 15px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto Slab', serif;
  cursor: pointer;
  width: 300px;
  overflow: hidden;
  transition: 0.8s ease;
}

button:hover {
  background-color: #7d715d;
  text-shadow: 0 0 2px #7d715d;
  box-shadow: 0 0 6px 0 #7d715d;
  border: 3px solid #7d715d;
}

a {
  color: black;
  text-decoration: none;
}

</style>




