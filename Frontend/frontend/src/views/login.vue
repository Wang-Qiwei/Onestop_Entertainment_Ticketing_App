<template>
  <div class="container">
    <div class="tit">
      <h1 class="title">
        Welcome <br />
        Back
      </h1>
    </div>

    <p class="info">Email</p>
    <a-input
      class="input"
      v-decorator="[
        'email',
        {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        },
      ]"
    >
    </a-input>
    <img src="../assets/img/normal_u7.svg" alt="" />

    <p class="info">Password</p>
    <a-input
      v-decorator="[
        'password',
        { rules: [{ required: true, message: 'Please input your Password!' }] },
      ]"
    ></a-input>
    <img src="../assets/img/normal_u7.svg" alt="" />
    <p class="signup">SIGN IN</p>
    <img class="arrow" src="../assets/img/normal_u13.png" alt="" />

    <router-link to="/register"><p class="signin">SIGN UP</p></router-link>

    <router-link to="/register"
      ><p class="forget">FORGET PASSWORD?</p></router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ant-input {
  background: transparent;
  border: 1px solid transparent;
  margin: 0;
  width: 340px;
}
.container {
  position: absolute;
  margin-left: 40%;
  top: 0;
  width: 428px;
  height: 926px;
  background: linear-gradient(
    0deg,
    rgba(242, 242, 242, 1) 1%,
    rgba(194, 128, 255, 1) 50%,
    rgba(88, 0, 170, 1) 99%
  );
}
.tit {
  margin: 166px 104px 71px 31px;
}
.title {
  /* 测试用完删除 */
  font-family: "Lato-Regular", "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 53px;
  color: #f2f2f2;
  line-height: 71px;
  text-align: left;
}

.img {
  float: right;
  margin: 5px;
  width: 18px;
  height: 18px;
}
.info {
  font-size: 22px;
  width: 60px;
  height: 26px;
  margin-left: 31px;
  margin-bottom: 0;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Regular", "Arial", sans-serif;
  font-weight: 700;
  color: #ffffff;
  text-align: left;
  line-height: normal;
}

.signup {
  font-size: 29px;
  width: 120px;
  height: 33px;
  opacity: 0.95;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Regular", "Arial", sans-serif;
  font-weight: 700;
  color: #f2f2f2;
  text-align: left;
  line-height: normal;
  margin-left: 61px;
  position: absolute;
  top: 705px;
}
.signin {
  font-size: 20px;
  width: 100px;
  height: 23px;
  opacity: 0.63;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Regular", "Arial", sans-serif;
  font-weight: 700;
  text-decoration: underline;
  color: #7f7f7f;
  text-align: left;
  line-height: normal;
  position: absolute;
  top: 846px;
  left: 40px;
}
.forget {
  font-size: 20px;
  width: 250px;
  height: 23px;
  opacity: 0.63;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Regular", "Arial", sans-serif;
  font-weight: 700;
  text-decoration: underline;
  color: #7f7f7f;
  text-align: left;
  line-height: normal;
  position: absolute;
  top: 846px;
  right: 15px;
}
.arrow {
  width: 58px;
  height: 58px;
  opacity: 0.74;
  position: absolute;
  top: 693px;
  right: 81px;
}
</style>
