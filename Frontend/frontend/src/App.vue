<template>
  <div id="app">
    <Register></Register>
  </div>
</template>

<script>
import Vue from "vue";
import Register from "./pages/register.vue";
export default Vue.extend({
  name: "register",
  components: {
    Register,
  },
});
</script>
