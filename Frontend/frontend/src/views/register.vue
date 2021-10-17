<template>
  <div class="container">
    <Header style="margin-bottom: 100px"></Header>

    <div class="block">
      <p class="title">Sign up to TokTickets</p>
      <div>
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

          <p class="info">Password*</p>
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
          <p class="info">Confirm Password*</p>
          <a-form-item v-bind="formItemLayout" has-feedback>
            <a-input
              v-decorator="[
                'confirm',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                },
              ]"
              type="password"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <p class="info">First Name*</p>
          <a-input />
          <p class="info">Last Name*</p>
          <a-input />
          <p class="info">Date of Birth*</p>
          <a-input />
        </a-form>
        <a-checkbox
          style="font-size:18px; margin-top:30px"
          v-decorator="['agreement', { valuePropName: 'checked' }]"
        >
          I have read the
          <a href="" style="color:#7f2fc9">
            agreement
          </a>
        </a-checkbox>
        <div style="margin-top:20px">
          <a-button
            type="primary"
            html-type="submit"
            style="margin-left: 20px; background:#7f2fc9;  width: 140px;
  height: 40px;"
          >
            Sign up
          </a-button>
        </div>
      </div>

      <!-- <router-link to="/login"><p class="signin">SIGN IN</p></router-link> -->
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
  height: 820px;
  padding: 2px 2px 2px 2px;
  border: 1px solid #797979;
  background-color: #ffffff;
  margin: 0 auto;
}
.title {
  margin: 20px auto;
  width: 351px;
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
</style>
