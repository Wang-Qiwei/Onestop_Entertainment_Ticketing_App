<template>
  <div id="container">
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
        <a-select placeholder="Sydney" class="city">
          <a-select-option :value="0">Sydney</a-select-option>
          <a-select-option :value="1">Melbourne）</a-select-option>
          <a-select-option :value="2">Canberra</a-select-option>
          <a-select-option :value="3">Brisbane</a-select-option>
        </a-select>
        <div class="classification">
          <a href="index.html" class="header-li-wh">Home</a>
          <a href="musical.html" class="header-li-wh">Musical</a>
          <a href="festival.html" class="header-li-wh">Festival</a>
          <a href="concert.html" class="header-li-wh">Concert</a>
        </div>
        <form action="" target="_blank">
          <input
            type="search"
            class="header-search"
            maxlength="64px"
            placeholder="Search..."
          />
          <input type="submit" value="" />
        </form>

        <div class="h-user-info">
          <router-link to="/login">
            <img class="avatar" src="../assets/img/imgPC-header/avatar.png" />
            <span class="wtf"></span>
            <p class="avap">Login</p>
          </router-link>
        </div>
      </div>
    </div>
    <div id="main_div">
      <a-carousel autoplay>
        <div>
          <img class="carouslpic" src="../assets/img/post.png" />
        </div>
        <div>
          <img class="carouslpic" src="../assets/img/u113.png" />
        </div>
      </a-carousel>
    </div>

    <div
      class="cardcontainer"
      style="background-color: #ececec; padding: 20px;"
    >
      <a-row type="flex" justify="center" align="middle" :gutter="16">
        <a-col :span="8" v-for="item in mdata" :key="item.id">
          <a-card
            bordered
            class="card"
            hoverable
            style="width:330px; height:470px;"
          >
            <img
              slot="cover"
              style="width:100%; height:400px;"
              :src="item.link"
            />
            <a-card-meta>
              <template slot="description">
                <a class="cardbut">BUY</a>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
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
      mdata: [
        {
          title: "shit1",
          date: "2020-10-21",
          link:
            "https://d1icd6shlvmxi6.cloudfront.net/gsc/BVLB1W/9c/ac/32/9cac324022f845749db540f71d56061a/images/_musical/u28.png?token=fe363e720bdbb816deaf252d421fcf6173898060543b80268f1cb8d870acfd4a&pageId=46cbbccf-7575-4509-98c7-dcb36db09f16",
        },
        {
          title: "shit2",
          date: "2020-10-21",
          link:
            "https://d1icd6shlvmxi6.cloudfront.net/gsc/BVLB1W/9c/ac/32/9cac324022f845749db540f71d56061a/images/_musical/u29.png?token=74c8c293c7b4a427ab45acccac1afde2a5c677e25e1cbe70e7559c9dd8f8f854&pageId=46cbbccf-7575-4509-98c7-dcb36db09f16",
        },
        {
          title: "shit3",
          link: "../assets/img/u118.png",
          date: "2020-10-21",
        },
        {
          title: "shit1",
          link: "/src/assets/img/u116.png",
          date: "2020-10-21",
        },
        {
          title: "shit2",
          link: "../assets/img/u117.png",
          date: "2020-10-21",
        },
        {
          title: "shit3",
          link: "../assets/img/u118.png",
          date: "2020-10-21",
        },
      ],
      cityList: [
        {
          value: "0",
          label: "Sydney",
        },
        {
          value: "1",
          label: "Melbourne",
        },
        {
          value: "2",
          label: "Canberra",
        },
        {
          value: "3",
          label: "Brisbane",
        },
      ],
      email: "",
      code: "",
    };
  },

  methods: {
    init() {
      axios({
        method: "post",
        url: "http://localhost:9999/elec5619/main/list",
        data: {
          classification: this.classification,
          limit: 20,
          location: this.location,
          offset: 0,
        },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.success === true) {
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.card {
  margin: 50px;
  background: rgb(90, 24, 177);
}
.cardate {
  position: absolute;
  bottom: 50px;
  margin: 0 auto;
  text-align: center;
}
.cardimg {
  width: 100%;
  height: 60%;
}
.cardbut {
  color: white;
  font-weight: bolder;
  font-size: 17px;

  background: rgb(90, 24, 177);
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 605px;
  line-height: 605px;
  background: #364d79;
  overflow: hidden;
}
.a-card {
  display: inline-block;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.carouslpic {
  overflow: hidden;
  height: 600px;
  width: 100%;
  bottom: 20px;
  right: 10px;
  color: #fff;
}

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
  width: 100px;
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

#main_div {
  margin: 80px 0 20px 0;
  position: relative;
  width: 100%;
  height: 600px;
  background-image: linear-gradient(rgb(90, 24, 177), #9e6edd);
}

.cardcontainer {
  background-image: linear-gradient(
    rgba(88, 0, 170, 1),
    rgba(194, 128, 255, 1)
  );

  margin-bottom: 15px;
}
.section-left {
  margin-top: -14px;
  margin-left: 7%;
  width: 84%;
  margin-bottom: 15px;
}
.section-left > ul {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.section-left > ul > li {
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 15px;
}
.section-left > ul:nth-child(1) > li {
  color: #ffffff;
  margin-bottom: 15px;
}
.section-left > ul:nth-child(1) > li > a {
  font-size: 14px;
  color: #ffffff;
}
.section-left > ul:nth-child(1) > li > a:hover {
  text-shadow: 1px 1px 1px black;
}
.section-left > ul > li > a > img {
  width: 235px;
  height: 315px;
}

@keyframes f47 {
  0% {
    opacity: 0.6;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
    box-shadow: 2px 4px 10px black;
    border-top-right-radius: 30px;
  }
}
.section-left > ul > li > a > img:hover {
  animation: f47 linear 1.5s infinite;
}
.section-left > ul {
  text-align: center;
  margin-bottom: 30px;
}
.section-left > ul > li > div {
  width: 235px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  background: #8400ff;
  padding: 7px 0;
}
.section-left > ul > li > div:hover {
  background: rgb(90, 24, 177);
}
.section-left > ul > li > div:hover a {
  color: white;
  text-shadow: 2px 2px 5px black;
}
.section-left > ul > li > div > a {
  font-size: 14px;
  color: white;
}
.section-left > ul > li {
  position: relative;
}
.section-left > ul > li > img {
  position: absolute;
  top: 3px;
  left: -3px;
  width: 235px;
}
.pic-txt {
  display: flex;
  position: absolute;
  top: 290px;
  width: 235px;
  padding: 3px 0;
  /*left: 38px;*/
  background: rgba(0, 0, 0, 0.22);
}
.pic-txt > li {
  color: white;
  font-weight: 700;
  font-size: 14px;
}
.pic-txt > li:nth-child(1) {
  padding-right: 40%;
}
.pic-txt > li:nth-child(2) {
  color: #ffb40b;
}
.pic-txt > li > span {
  font-size: 12px;
}
.footer {
  width: 100%;
  background-image: linear-gradient(rgba(194, 128, 255, 1), white);
  padding-top: -10px;
  margin-top: -30px;
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
