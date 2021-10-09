<template>
  <div class="container">
    <img class="img " src="../assets/img/sign_in/u1.png" />
    <img class="img " src="../assets/img/sign_in/u2.png" />
    <img class="img " src="../assets/img/sign_in/u3.png" />

    <h1 class="title">Create Account</h1>

    <!-- <div class="form-container">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item v-bind="formItemLayout" label="E-mail">
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
        <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
          <a-input-password
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password',
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
        <a-form-item
          v-bind="formItemLayout"
          label="Confirm Password"
          has-feedback
        >
          <a-input
            v-decorator="[
              'confirm',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password',
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
        <a-form-item v-bind="formItemLayout" label="Full Name">
          <a-input
            v-decorator="[
              'fullname',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your full name',
                    whitespace: true,
                  },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item
          label="Please choose the appropirate role for your register"
          class="radio-group"
        >
          <a-radio-group
            v-decorator="[
              'role',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please select your role',
                  },
                ],
              },
            ]"
          >
            <a-radio :style="radioStyle" value="1"> Applicant </a-radio>
            <a-date-picker
              v-if="this.form.getFieldValue('role') === '1'"
              v-decorator="['optional', dateConfig]"
              placeholder="Date of Birth"
            />

            <a-radio :style="radioStyle" value="2"> Health Worker </a-radio>
            <a-input
              v-if="this.form.getFieldValue('role') === '2'"
              v-decorator="['optional', config]"
              placeholder="Verification Code"
            ></a-input>

            <a-radio :style="radioStyle" value="3"> Project Owner </a-radio>
            <a-input
              v-if="this.form.getFieldValue('role') === '3'"
              v-decorator="['optional', config]"
              placeholder="Verification Code"
            ></a-input>
            <a-radio :style="radioStyle" value="4"> Admin </a-radio>

            <a-input
              v-if="this.form.getFieldValue('role') === '4'"
              v-decorator="['optional', config]"
              placeholder="Verification Code"
            ></a-input>
          </a-radio-group>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'agreement',
              {
                valuePropName: 'checked',
                rules: [
                  {
                    required: true,
                    message:
                      'Please tick the checkbox after reading the agreement',
                  },
                ],
              },
            ]"
          >
            I have read the
            <a class="agreement" href=""> agreement </a>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button
            class="btn"
            type="primary"
            html-type="submit"
            v-if="!uploading"
          >
            Register
          </a-button>
          <div class="spin-container" v-else>
            <a-spin tip="Processing your request..." />
          </div>
        </a-form-item>
      </a-form>
    </div> -->
    <!-- <router-view></router-view>
    <router-link to="/user/login">Have an account?Login now</router-link> -->
  </div>
</template>

<script></script>

<style scoped>
.container {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 428px;
  height: 926px;
  background: linear-gradient(
    0deg,
    rgba(242, 242, 242, 1) 1%,
    rgba(194, 128, 255, 1) 50%,
    rgba(88, 0, 170, 1) 99%
  );
}
.title {
  /* 测试用完删除 */
  margin-top: 166px;

  font-family: "Lato-Regular", "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 53px;
  color: #f2f2f2;
  line-height: 71px;
}
.img {
  float: right;
  margin: 5px;
  width: 18px;
  height: 18px;
}
</style>
