<template>
  <div class="container">
    <Header style="margin-bottom: 100px"></Header>

    <div class="block">
      <div>
        <p class="title">Password Reset</p>

        <a-form :form="form" @submit="handleSubmit">
          <p class="info">New Password</p>
          <a-form-item v-bind="formItemLayout" has-feedback>
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
          <a-form-item v-bind="formItemLayout" has-feedback>
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
          <router-link to="/login"
            ><a-button class="but">Confirm</a-button></router-link
          >
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import axios from "axios";
export default {
  components: {
    Header,
  },
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "userRegister" });
  },
  methods: {
    async checkEmail() {
      const { form } = this;
      axios
        .post(
          "/api/PatientERecruitment/sys/checkMail",
          form.getFieldValue("email")
        )
        .then((response) => {
          console.log(response);
          this.uploading = false;
          if (!response.data.success) {
            // alert("The email has been used.");
            this.$message.error("The email has been used.");
            this.uploading = false;
            this.checkedEmail = false;
            // return false;
          } else {
            console.log(response.data.success);
            this.checkedEmail = true;
            // return true;
          }
        })
        .catch((error) => {
          console.log("Email checking failed.");
          console.log(error);
          this.uploading = false;
          this.$message.error("Email checking failed.");
        });
    },

    async handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const { form } = this;
          this.uploading = true;
          axios
            .post(
              "/api/PatientERecruitment/sys/checkMail",
              form.getFieldValue("email")
            )
            .then((response) => {
              console.log(response);
              if (!response.data.success) {
                // alert("The email has been used.");
                this.$message.error("The email has been used.");
                this.checkedEmail = false;
                // return false;
              } else {
                this.uploading = false;
                console.log(response.data.success);
                this.checkedEmail = true;
                // return true;
              }
              const validationPassed = this.checkedEmail;
              if (validationPassed === true) {
                // post request for applicant registration
                console.log(validationPassed);
                if (form.getFieldValue("role") === "1") {
                  const date = form.getFieldValue("optional").format();
                  const cleanedDate = date.substring(0, 10);

                  let data = {
                    name: form.getFieldValue("fullname"),
                    mail: form.getFieldValue("email"),
                    password: form.getFieldValue("password"),
                    verificationCode: "",
                    roleId: form.getFieldValue("role"),
                    birthday: cleanedDate,
                  };

                  this.$store
                    .dispatch("register", data)
                    .then((res) => {
                      this.uploading = false;
                      if (res.data.success) {
                        this.$router.push("/user/login");
                      } else if (res.data.code === 30016) {
                        this.$message.error("Verification did not pass.");
                      } else {
                        this.$message.error("Register failed.");
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                      this.$message.error(
                        "Register failed or verification did not pass."
                      );
                      this.uploading = false;
                    });
                }

                // post request for health worker registration
                if (form.getFieldValue("role") === "2") {
                  let data = {
                    name: form.getFieldValue("fullname"),
                    mail: form.getFieldValue("email"),
                    password: form.getFieldValue("password"),
                    verificationCode: form.getFieldValue("optional"),
                    roleId: form.getFieldValue("role"),
                    birthday: "",
                  };

                  this.$store
                    .dispatch("register", data)
                    .then((res) => {
                      this.uploading = false;
                      if (res.data.success) {
                        this.$router.push("/user/login");
                      } else if (res.data.code === 30016) {
                        this.$message.error("Verification did not pass.");
                      } else {
                        console.log(res.data.code);
                        this.$message.error("Register failed.");
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                      this.$message.error(
                        "Register failed or verification did not pass."
                      );
                      this.uploading = false;
                    });
                }

                // post request for project owner registration
                if (form.getFieldValue("role") === "3") {
                  let data = {
                    name: form.getFieldValue("fullname"),
                    mail: form.getFieldValue("email"),
                    password: form.getFieldValue("password"),
                    verificationCode: form.getFieldValue("optional"),
                    roleId: form.getFieldValue("role"),
                    birthday: "",
                  };

                  this.$store
                    .dispatch("register", data)
                    .then((res) => {
                      this.uploading = false;
                      if (res.data.success) {
                        this.$router.push("/user/login");
                      } else if (res.data.code === 30016) {
                        this.$message.error("Verification did not pass.");
                      } else {
                        console.log(res.data.code);
                        this.$message.error("Register failed.");
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                      this.$message.error(
                        "Register failed or verification did not pass."
                      );
                      this.uploading = false;
                    });
                }

                // post request for admin registration
                if (form.getFieldValue("role") === "4") {
                  let data = {
                    name: form.getFieldValue("fullname"),
                    mail: form.getFieldValue("email"),
                    password: form.getFieldValue("password"),
                    verificationCode: form.getFieldValue("optional"),
                    roleId: form.getFieldValue("role"),
                    birthday: "",
                  };

                  this.$store
                    .dispatch("register", data)
                    .then((res) => {
                      this.uploading = false;
                      if (res.data.success) {
                        this.$router.push("/user/login");
                      } else if (res.data.code === 30016) {
                        this.$message.error("Verification did not pass.");
                      } else {
                        console.log(res.data.code);
                        this.$message.error("Register failed.");
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                      this.$message.error(
                        "Register failed or verification did not pass."
                      );
                      this.uploading = false;
                    });
                }
              }
            })
            .catch((error) => {
              console.log("Email checking failed.");
              console.log(error);
              this.uploading = false;
              this.$message.error("Email checking failed.");
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
