<template>
  <div class="container">
    <Header style="margin-bottom: 100px"></Header>

    <div class="block">
      <div>
        <p class="title">Password Reset</p>

        <a-form :form="form" @submit="handleSubmit">
          <p class="info">New Password</p>
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
          <p class="info">
            Confirm New Password*
          </p>
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
            <a-button html-type="submit" class="but">Confirm</a-button>
          </a-form-item>
        </a-form>
      </div>
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
      email: "",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "userRegister" });
  },
  created() {
    this.getParams();
  },
  methods: {
    getParams() {
      this.email = this.$route.query.email;
      console.log(this.email);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          axios
            .post("http://localhost:9999/elec5619/sys/reset", {
              email: this.email,
              password: this.form.getFieldValue("password"),
            })
            .then((res) => {
              if (res.data.success === true) {
                this.$router.push("/login");
                this.$message.success("Passsword Reset Successed");
              } else {
                this.$message.error("Reset failed,Please try again.");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
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
  height: 520px;
  padding: 2px 2px 2px 2px;
  border: 1px solid #797979;
  background-color: #ffffff;
  margin: 0 auto;
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
  margin: 40px auto;
  font-size: 20px;
}
.title {
  margin: 20px auto;
  width: 263px;
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
