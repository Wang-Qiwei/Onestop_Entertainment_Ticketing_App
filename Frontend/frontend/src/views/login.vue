<template>
  <div class="container">
    <Header style="margin-bottom: 100px"></Header>

    <div class="block">
      <div>
        <p class="title">Log in</p>
        <p class="info">Email</p>
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item>
            <a-input
              v-decorator="[
                'mail',
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
          <a-form-item has-feedback>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ],
                },
              ]"
              type="password"
            />
          </a-form-item>

          <div style="margin-top:20px">
            <!-- <router-link to="/homepage"> -->
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                style="margin:20px auto;background:#7f2fc9;  width: 140px;
  height: 40px; font-size:18px"
              >
                Log in
              </a-button>
            </a-form-item>
            <!-- </router-link> -->
          </div>
        </a-form>
      </div>
      <a-button @click="test">test</a-button>
      <router-link to="/Register"
        ><p class="signin">Do not have an account? Sign up here</p></router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/homepage-headerlayout.vue";

import { mapMutations } from "vuex";
export default {
  components: {
    Header,
  },
  data() {
    return {
      mail: "",
      password: "",

      userToken: "",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
  },

  methods: {
    ...mapMutations(["changeLogin"]),
    test() {
      axios
        .post("http://localhost:9999/elec5619/test/test")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSubmit(e) {
      // let _this = this;
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          axios
            .post("http://localhost:9999/elec5619/sys/login", {
              mail: this.form.getFieldValue("mail"),
              password: this.form.getFieldValue("password"),
            })

            .then((res) => {
              console.log("token", res.data.data.Authorization);
              const token = res.data.data.Authorization;
              localStorage.setItem("token", token);
              axios.defaults.headers.common["Authorization"] = token;
              // _this.changeLogin({ Authorization: res.data.Authorization });
              // this.$store.commit(
              //   "mutations/changeLogin",
              //   res.data.data.Authorization
              // );
              // if (store.state.token) {
              //   this.$router.push("./homepage");
              // }
              if (res.data.success === true) {
                console.log("added the user to the contact list.");
                this.$router.push("/homepage");
                this.$message.success("Login Successed");
              } else if (res.data.success === false) {
                this.$message.error(
                  "Your email or password is incorrect. Please try again."
                );
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
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
