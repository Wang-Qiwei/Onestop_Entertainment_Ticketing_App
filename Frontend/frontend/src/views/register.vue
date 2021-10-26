<template>
  <div class="container">
    <Header style="margin-bottom: 100px"></Header>

    <div class="block">
      <p class="title">Sign up to TokTickets</p>
      <div>
        <a-form :form="form" @submit="handleSubmit">
          <p class="info">Email</p>
          <a-form-item>
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
            ></a-input>
          </a-form-item>

          <p class="info">Password*</p>
          <a-form-item has-feedback>
            <a-input-password
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
                    {
                      min: 8,
                      message: 'Your password must between 8 and 16 characters',
                    },
                    {
                      max: 16,
                      message: 'Your password must between 8 and 16 characters',
                    },
                  ],
                },
              ]"
              type="password"
            />
          </a-form-item>
          <p class="info">Confirm Password*</p>
          <a-form-item has-feedback>
            <a-input-password
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
          <a-form-item>
            <p class="info">Username</p>
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [{ required: true }],
                },
              ]"
            ></a-input>
          </a-form-item>
          <!-- <p class="info">Date of Birth*</p>
          <a-input /> -->
          <a-form-item>
            <a-checkbox
              style="font-size:18px; margin-top:30px"
              v-decorator="['agreement', { valuePropName: 'checked' }]"
            >
              I have read the
              <a href="" style="color:#7f2fc9">
                agreement
              </a>
            </a-checkbox>
          </a-form-item>
          <div style="margin-top:20px">
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                style="margin-left: 20px; background:#7f2fc9;  width: 140px;
  height: 40px;"
              >
                Sign up
              </a-button>
            </a-form-item>
            <a href="/login">Already have an account? Login</a>
          </div>
        </a-form>
      </div>

      <!-- <router-link to="/login"><p class="signin">SIGN IN</p></router-link> -->
    </div>
  </div>
</template>
<script>
import Header from "../components/homepage-headerlayout.vue";
import axios from "axios";
export default {
  components: {
    Header,
  },
  data() {
    return {
      // email: "",
      // name: "",
      // password: "",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "userRegister" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      axios
        .post(
          "http://localhost:9999/elec5619/sys/register",

          {
            email: this.form.getFieldValue("email"),
            password: this.form.getFieldValue("password"),
            name: this.form.getFieldValue("name"),
          }
        )
        .then((response) => {
          console.log(response);
          if (!response.data) {
            // alert("The email has been used.");
            this.$message.error("The email has been used.");
          } else if (response.data.success) {
            this.$router.push("/login");
            this.$message.success("Sign up Successed");
          } else {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log("Email checking failed.");
          console.log(error);
          this.$message.error("Email checking failed.");
        });
    },

    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },

    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Passwords are not the same");
      } else {
        callback();
      }
    },

    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
  },
};
</script>

<style scoped>
.ant-input {
  width: 486px;
}
.ant-input-password {
  width: 486px;
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
  height: 920px;
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
