import Vue from "vue";
import App from "./App.vue";
import { Button } from "ant-design-vue";
// import {
//   Button,
//   Input,
//   Layout,
//   DatePicker,
//   Icon,
//   Table,
//   Menu,
//   Upload,
//   message,
//   Row,
//   Col,
//   Radio,
//   Select,
//   Form,
//   Divider,
//   Checkbox,
//   Spin,
//   InputNumber,
//   List,
//   Popover,
// } from "ant-design-vue";

import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.component(Button);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
