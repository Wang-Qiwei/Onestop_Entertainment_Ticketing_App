<template>
  <div id="app">
    <Homepage></Homepage>
    <!-- <Register></Register> -->
  </div>
</template>

<script>
import Vue from "vue";
// import Register from "./pages/register.vue";
import Homepage from "./pages/homepage.vue";
export default Vue.extend({
  name: "home",
  components: {
    Homepage,
  },
});
</script>
