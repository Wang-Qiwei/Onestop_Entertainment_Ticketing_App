<template>
  <div class="header">
    <img class="img" src="../assets/img/normal_u2.png" alt="" />
    <p class="TokTickets">TokTickets</p>

    <!-- <a-input-search
      placeholder="Search"
      class="header-search"
      size="large"
      @search="onSearch"
    > 
      <a-button slot="enterButton">
        <img src="../assets/img/normal_search.svg"
      /></a-button>
    </a-input-search>-->
    <router-link to="/homepage">
      <img class="img-home" src="../assets/img/normal_u8.png" alt="" />
    </router-link>
  </div>
</template>
<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 84px;
  padding: 2px 2px 2px 2px;
  background-color: #8400ff;
  box-sizing: border-box;
}

.img {
  width: 84px;
  height: 84px;
  position: absolute;
  left: 84px;
}
.img-home {
  position: absolute;
  right: 57px;
  top: 20px;
  width: 41px;
  height: 41px;
}

.TokTickets {
  width: 165px;
  height: 37px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial-BoldMT", "Arial Bold", "Arial", sans-serif;
  font-weight: bold;
  font-size: 32px;
  margin-top: 24px;
  color: #ffffff;
  text-align: left;
  line-height: normal;
  position: absolute;
  left: 173px;
}
.header-search {
  width: 291px;
  height: 40px;
  position: absolute;
  right: 225px;
  top: 20px;
  background-color: #fff;
}
</style>
