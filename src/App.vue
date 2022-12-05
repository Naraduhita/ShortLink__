<template>
  <div>
  <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/home/Home.vue";
import Regis from "./components/login/Regis.vue";
import Dashboard from "./components/home/Dashboard.vue";

export default {
  components: {
    Home,
    Regis,
    Dashboard,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
