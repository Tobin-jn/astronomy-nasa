<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/jupiter.jpg">
    <HelloWorld msg="Daily Astronomer"/>
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
