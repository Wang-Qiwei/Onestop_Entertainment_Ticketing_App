<template>
  <div class="container">
    <Header style="margin-bottom: 100px"></Header>

    <div class="block">
      <div>
        <p class="title">Log in</p>
        <a-form :form="form" @submit="handleSubmit">
          <p class="info">Email</p>
          <a-form-item v-bind="formItemLayout">
            <a-input
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
          </a-form-item>

          <p class="info">
            Password
            <router-link to="/forgotpass"
              ><font class="forget">Forgot password ?</font></router-link
            >
          </p>
          <a-form-item v-bind="formItemLayout" has-feedback>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      validator: validateToNextPassword,
                    },
                  ],
                },
              ]"
              type="password"
            />
          </a-form-item>
        </a-form>
        <div style="margin-top:20px">
          <router-link to="/homepage">
            <a-button
              type="primary"
              html-type="submit"
              style="margin:20px auto;background:#7f2fc9;  width: 140px;
  height: 40px; font-size:18px"
            >
              Sign in
            </a-button>
          </router-link>
        </div>
      </div>

      <router-link to="/Register"
        ><p class="signin">Do not have an account? Sign up here</p></router-link
      >
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
  width: 486px;
  height: 41px;
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
  width: 114px;
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
  margin-left: 283px;
  margin-top: 20px;
}
.forget {
  float: right;
  font-size: 16px;
  color: rgb(9, 105, 218);
  margin-right: 270px;
}
.signin {
  font-size: 18px;

  color: #7f2fc9;
}
</style>
