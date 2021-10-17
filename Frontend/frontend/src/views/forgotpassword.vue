<template>
  <div class="container">
    <Header style="margin-bottom: 100px"></Header>

    <div class="block">
      <div>
        <p class="title">Forgot password</p>
        <p class="alert">
          Enter your user account's verified email address <br />We will send
          you a verification code
        </p>
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item style="margin:20px auto" v-bind="formItemLayout">
            <a-input
              placeholder="Enter your Email address"
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
            />
            <a-button class="but">Send verification code</a-button>
          </a-form-item>
          <a-form-item v-bind="formItemLayout">
            <p class="info">Verification Code*</p>
            <a-input class="code"></a-input>
          </a-form-item>
          <router-link to="/passreset">
            <a-button class="verify">Verify</a-button></router-link
          >
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.ant-input {
  width: 400px;
  height: 41px;
}
.code {
  width: 400px;
  float: left;
  margin-left: 240px;
}
.but {
  width: 140px;
  height: 40px;
  padding: 2px 2px 2px 2px;
  border-radius: 5px;
  background-color: #7f2fc9;
  box-sizing: border-box;
  font-family: "ArialMT", "Arial", sans-serif;
  color: #ffffff;
  text-align: center;
  line-height: normal;
  margin-left: 20px;
  font-size: 13px;
}
.container {
  width: 100%;
  height: 1200px;
  background: linear-gradient(
    0deg,
    rgba(242, 242, 242, 1) 1%,
    rgba(194, 128, 255, 1) 50%,
    rgba(88, 0, 170, 1) 99%
  );
}
.block {
  width: 1052px;
  height: 520px;
  padding: 2px 2px 2px 2px;
  border: 1px solid #797979;
  background-color: #ffffff;
  margin: 0 auto;
}
.title {
  margin: 20px auto;
  width: 327px;
  height: 39px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial-BoldMT", "Arial Bold", "Arial", sans-serif;
  font-weight: bold;
  color: #7f2fc9;
  text-align: left;
  line-height: normal;
  font-size: 34px;
}
.alert {
  font-size: 20px;
  font-weight: bold;
  width: 550px;
  margin: 10px auto;
  text-align: left;
}
.info {
  height: 21px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "ArialMT", "Arial", sans-serif;
  font-weight: 700;
  color: #7f2fc9;
  text-align: left;
  line-height: normal;
  font-size: 18px;
  margin-left: 245px;
}

.verify {
  width: 160px;
  height: 50px;
  padding: 2px 2px 2px 2px;
  border-radius: 5px;
  background-color: #7f2fc9;
  box-sizing: border-box;
  font-family: "ArialMT", "Arial", sans-serif;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: normal;
  font-size: 20px;
  margin-top: 30px;
}
</style>
