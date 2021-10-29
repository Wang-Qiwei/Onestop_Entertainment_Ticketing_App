<template>
  <div>
    <div class="header">
      <title>Tok-Tickets</title>
      <div class="header-inner">
        <router-link to="/homepage">
          <img class="img" src="../assets/img/normal_u2.png" alt="" />
        </router-link>
        <router-link
          to="/homepage"
          class="h-p"
          style="font-family: fantasy; color: white"
          >Tok-Tickets
        </router-link>

        <div class="classification">
          <a href="/homepage" class="header-li-wh">Home</a>
        </div>

        <div class="h-user-info">
          <router-link to="/login">
            <img class="avatar" :src="avataurl" />
            <span class="wtf"></span>
            <p class="avap">Login</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="user_info">
        <img :src="avataurl" />
        <h2>{{ username }}</h2>
      </div>
      <div class="ticket_info">
        <h2 style="text-align: left; margin-left: 5%">MY TICKETS</h2>

        <div class="tickets_list" v-for="item in this.data" :key="item.id">
          <img :src="item.posterurl" />
          <div class="info">
            <h2>Name: {{ item.name }}</h2>
            <h2>Time: {{ item.time }}</h2>
            <h2>Location: {{ item.address }}</h2>
          </div>
          <div class="qr">
            <h3>State: Incoming</h3>
            <img src="../assets/img/qr.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>COMP 5619 - Group 10</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      name: "",
      desc: "",
      imgurl: [],
      data: [],
      posterurl: "",
      username: "",
      avataurl: require("../assets/img/my/u195.png"),
      cityList: [
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Melbourne",
          label: "Melbourne",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
        {
          value: "Brisbane",
          label: "Brisbane",
        },
      ],
      model1: "",
    };
  },
  created() {
    (this.email = localStorage.getItem("email")), console.log(this.email);
    this.my();
  },
  methods: {
    my() {
      axios({
        method: "post",
        url: "http://localhost:9999/elec5619/main/personalCenter",
        data: { email: this.email },
      })
        .then((res) => {
          let mydata = res.data.data;
          this.username = mydata.name;
          this.data = mydata.tickets;
          for (let i in this.data) {
            this.name = this.data[i].name;
            this.posterurl = this.data[i].postURL;
            this.time = this.data[i].time;
            this.address = this.data[i].address;
            this.imgurl.push(this.posterurl);
          }
          console.log("连接数组", this.imgurl);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.header {
  background: rgb(90, 24, 177);
  width: 100%;
  height: 80px;
  outline: 1px solid #fcf9f9;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
a {
  text-decoration: none;
  color: #d8d8d8;
}
.header-inner {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.header-li-wh {
  margin: 10px;
  width: 114px;
  height: 36px;
  font-weight: bold;
  font-size: 16px;
}
p {
  color: #d8d8d8;
}

img {
  width: 60px;
  height: 60px;
  margin-left: -15px;
}
.h-p {
  width: 100px;
  height: 13px;
  font-size: 14px;
  margin-left: -24px;
}
.city {
  line-height: 80px;
  cursor: pointer;
  background: rgb(90, 24, 177);
  margin: 0 10px;
  color: #d8d8d8;
  width: 300px;
}
.city:hover {
  outline: 1px solid #d8d8d8;
}
.city:hover span {
  transform: rotateZ(180deg);
}
.header-inner {
  margin-left: 40px;
}
.header-inner nav ul {
  display: flex;
  text-align: center;
}
.header-inner nav ul a {
  display: inline-block;
  line-height: 80px;
}
.header-inner nav ul a:hover {
  background: #9e6edd;
  color: #d8d8d8;
}

.header-inner form {
  position: relative;
}
.header-search {
  display: inline-block;

  width: 478px;
  height: 40px;
  margin-left: 65px;
  outline: none;
  padding: 0 40px 0 20px;
  overflow: hidden;
  border: 1px solid #d8d8d8;
  border-radius: 30px;
  color: #333333;
}
.header-inner form input[type="submit"] {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  outline: none;
  background-color: #9e6edd;
  background-image: url("../assets/img/imgPC-header/data_image_3.png");
  position: absolute;
  top: 0;
  right: 0;
}
.h-user-info {
  display: inline-block;
  position: absolute;
  right: 30px;
}
.avatar {
  width: 40px;
  height: 40px;
}
.wtf {
  display: inline-block;
  margin-left: 5px;
  border-top: 4px solid #d8d8d8;
  border-right: 4px solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 4px solid transparent;
  transition: 0.3s;
}
.avap {
  opacity: 0;
  position: absolute;
  top: 80px;
  left: 20px;
  font-size: 14px;
  color: #d8d8d8;
}
.container {
  position: relative;
  margin-top: 80px;
  width: 100%;
  height: 650px;
  background-image: linear-gradient(
    rgba(88, 0, 170, 1),
    rgba(194, 128, 255, 1)
  );
}
.user_info {
  float: left;
  margin: 0 auto;
  position: absolute;
  width: 15%;
  top: 50px;
  left: 13%;
  border-radius: 7px;
  border: 1px solid white;
  box-sizing: border-box;
}
.ticket_info {
  float: right;
  margin: 0 auto;
  position: absolute;
  width: 57%;
  top: 50px;
  left: 30%;
  border-radius: 7px;
  border: 1px solid white;
  box-sizing: border-box;
}
.user_info > img {
  margin-top: 20px;
  margin-bottom: 20px;
}
.user_info > h2 {
  margin-bottom: 20px;
  color: white;
  font-size: 24px;
  padding-left: 10px;
  padding-right: 10px;
}
.user_info > p {
  margin-bottom: 20px;
  color: white;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
}
.ticket_info > h2 {
  margin-bottom: 10px;
  margin-top: 10px;
  color: white;
  font-size: 24px;
  padding-left: 10px;
  padding-right: 10px;
}
.dialog {
  text-decoration: underline;
  margin-bottom: 5px;
  padding-right: 10px;
  float: right;
}
.modal-window {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
}
.modal-window:target {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.modal-window > div {
  width: 800px;
  position: absolute;
  top: 30%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 2em;
  background: #ffffff;
}
.modal-window header {
  font-weight: bold;
}
.modal-window h1 {
  font-size: 150%;
  margin: 0 0 15px;
}
.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
}
.modal-close:hover {
  color: black;
}
.save-close {
  color: rgba(88, 0, 170, 1);
}
.save-close:hover {
  color: rgba(194, 128, 255, 1);
}
.group {
  float: left;
  width: 100%;
  margin: 10px;
  font-size: 16px;
}
.group > input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
}
.group > input:focus {
  outline: none;
}
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.group > input:focus ~ label,
.group > input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: rgba(88, 0, 170, 1);
}
.bar {
  position: relative;
  display: block;
  width: 100%;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: rgba(88, 0, 170, 1);
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}
.group > input:focus ~ .bar:before,
.group > input:focus ~ .bar:after {
  width: 50%;
}
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
.group > input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}
@-webkit-keyframes inputHighlighter {
  from {
    background: rgba(88, 0, 170, 1);
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: rgba(88, 0, 170, 1);
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: rgba(88, 0, 170, 1);
  }
  to {
    width: 0;
    background: transparent;
  }
}
.tickets_list {
  width: 90%;
  margin-left: 5%;
  height: 155px;
  border-bottom: 2px solid rgb(177, 176, 176);
  margin-bottom: 20px;
}
.tickets_list > img {
  width: 100px;
  height: 135px;
  float: left;
  margin-left: 5%;
}
.info {
  margin-bottom: 23px;
  margin-left: 30%;
  width: 40%;
  position: absolute;
}
.info > h2 {
  margin-bottom: 23px;
  color: white;
  font-size: 20px;
  text-align: left;
}
.qr {
  float: right;
  margin-left: 70%;
  width: 20%;
  position: absolute;
}
.qr > img {
  width: 100px;
  height: 100px;
}
.qr > h3 {
  margin-bottom: 5px;
  color: white;
  font-size: 18px;
  /* text-align: left; */
}

.footer {
  width: 100%;
  background-image: linear-gradient(rgba(194, 128, 255, 1), white);
}
.footer > p {
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  padding-top: 50px;
  padding-bottom: 50px;
}

/* `XHTML, HTML4, HTML5 Reset
----------------------------------------------------------------------------------------------------*/
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
dialog,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
font,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
main,
mark,
menu,
meter,
nav,
object,
ol,
output,
p,
pre,
progress,
q,
rp,
rt,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video,
xmp {
  border: 0;
  margin: 0;
  padding: 0;
  font-size: 100%;
}

html,
body {
  height: 100%;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  /*
  Override the default (display: inline) for
  browsers that do not recognize HTML5 tags.

  IE8 (and lower) requires a shiv:
  http://ejohn.org/blog/html5-shiv
*/
  display: block;
}

b,
strong {
  /*
  Makes browsers agree.
  IE + Opera = font-weight: bold.
  Gecko + WebKit = font-weight: bolder.
*/
  font-weight: bold;
}

img {
  color: transparent;
  font-size: 0;
  vertical-align: middle;
  /*
  For IE.
  http://css-tricks.com/ie-fix-bicubic-scaling-for-images
*/
  -ms-interpolation-mode: bicubic;
}

ol,
ul {
  list-style: none;
}

li {
  /*
  For IE6 + IE7:

  "display: list-item" keeps bullets from
  disappearing if hasLayout is triggered.
*/
  display: list-item;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td,
caption {
  font-weight: normal;
  vertical-align: top;
  text-align: left;
}

q {
  quotes: none;
}

q:before,
q:after {
  content: "";
  content: none;
}

sub,
sup,
small {
  font-size: 75%;
}

sub,
sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
svg {
  overflow: hidden;
}
/*  For IE9. Without, occasionally draws shapes
  outside the boundaries of <svg> rectangle.
*/
/**/
.clearfix:before,
.clearfix:after {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
</style>
