<template>
  <div id="container">
    <head lang="en">
      <title>Tok-Tickets</title>
    </head>
    <body>
      <header>
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
          <a-select class="h-city header-li-wh">
            <a-select-option :value="0">Sydney</a-select-option>
            <a-select-option :value="1">Melbourne）</a-select-option>
            <a-select-option :value="2">Canberra</a-select-option>
            <a-select-option :value="3">Brisbane</a-select-option>
          </a-select>
          <nav>
            <ul>
              <li><a href="index.html" class="header-li-wh">Home</a></li>
              <li><a href="musical.html" class="header-li-wh">Musical</a></li>
              <li><a href="festival.html" class="header-li-wh">Festival</a></li>
              <li><a href="concert.html" class="header-li-wh">Concert</a></li>
            </ul>
          </nav>
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
            <router-link to="/login" class="header-li-wh">
              <img src="../assets/img/imgPC-header/avatar.png" />
              <span></span>
              <p>Login</p>
            </router-link>
          </div>
        </div>
      </header>

      <div id="main_div">
        <a-carousel autoplay>
          <div>
            <img
              class="carouslpic"
              src="../assets/img/post.png"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <img
              class="carouslpic"
              src="../assets/img/u113.png"
              width="100%"
              height="600"
            />
          </div>
        </a-carousel>
      </div>

      <section>
        <div class="section-left">
          <ul>
            <li style="margin-top: 15px; margin-bottom: -15px">
              Currently showing (55)
            </li>
          </ul>
          <ul>
            <li>
              <a href="info.html">
                <img src="../assets/img/u103.png" alt="" />
              </a>
              <ul class="pic-txt">
                <li>NAME1</li>
                <li><i>2021-10-01</i></li>
              </ul>

              <div>
                <router-link to="/buyticket">BUY TICKETS</router-link>
              </div>
            </li>
            <li>
              <a href="">
                <img src="../assets/img/u104.png" alt="" />
              </a>
              <ul class="pic-txt">
                <li>NAME2</li>
                <li><i>2021-10-01</i></li>
              </ul>

              <div>
                <router-link to="/buyticket">BUY TICKETS</router-link>
              </div>
            </li>
            <li>
              <a href="info.html">
                <img src="../assets/img/u105.png" alt="" />
              </a>
              <ul class="pic-txt">
                <li>NAME1</li>
                <li><i>2021-10-01</i></li>
              </ul>

              <div>
                <router-link to="/buyticket">BUY TICKETS</router-link>
              </div>
            </li>
            <li>
              <a href="info.html">
                <img src="../assets/img/u106.png" alt="" />
              </a>
              <ul class="pic-txt">
                <li>NAME1</li>
                <li><i>2021-10-01</i></li>
              </ul>

              <div>
                <router-link to="/buyticket">BUY TICKETS</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <a href="info.html">
                <img src="../assets/img/u116.png" alt="" />
              </a>
              <ul class="pic-txt">
                <li>NAME1</li>
                <li><i>2021-10-01</i></li>
              </ul>

              <div>
                <router-link to="/buyticket">BUY TICKETS</router-link>
              </div>
            </li>
            <li>
              <a href="info.html">
                <img src="../assets/img/u117.png" alt="" />
              </a>
              <ul class="pic-txt">
                <li>NAME1</li>
                <li><i>2021-10-01</i></li>
              </ul>

              <div>
                <router-link to="/buyticket">BUY TICKETS</router-link>
              </div>
            </li>
            <li>
              <a href="info.html">
                <img src="../assets/img/u118.png" alt="" />
              </a>
              <ul class="pic-txt">
                <li>NAME1</li>
                <li><i>2021-10-01</i></li>
              </ul>

              <div>
                <router-link to="/buyticket">BUY TICKETS</router-link>
              </div>
            </li>
            <li>
              <a href="info.html">
                <img src="../assets/img/u128.png" alt="" />
              </a>
              <ul class="pic-txt">
                <li>NAME1</li>
                <li><i>2021-10-01</i></li>
              </ul>

              <div>
                <router-link to="/buyticket">BUY TICKETS</router-link>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div class="footer">
        <p>COMP 5619 - Group 10</p>
      </div>
    </body>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
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
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 605px;
  line-height: 605px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
header {
  background: rgb(90, 24, 177);
  width: 100%;
  height: 80px;
  outline: 1px solid #fcf9f9;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
header a {
  text-decoration: none;
  color: #d8d8d8;
}
header .header-inner {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
header .header-inner .header-li-wh {
  width: 80px;
  height: 80px;
}
header .header-inner .header-li-wh p {
  color: #d8d8d8;
}

header .header-inner img {
  width: 60px;
  height: 60px;
  margin-left: -15px;
}
header .header-inner .h-p {
  width: 100px;
  height: 13px;
  font-size: 14px;
  margin-left: -24px;
}
header .header-inner .h-city {
  height: 100%;
  text-align: right;
  line-height: 80px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 0px solid transparent;
  color: #d8d8d8;
  width: 100px;
}
header .header-inner .h-city:hover {
  outline: 1px solid #d8d8d8;
}
header .header-inner .h-city:hover span {
  transform: rotateZ(180deg);
}
header .header-inner nav {
  margin-left: 40px;
}
header .header-inner nav ul {
  display: flex;
  text-align: center;
}
header .header-inner nav ul a {
  display: inline-block;
  line-height: 80px;
}
header .header-inner nav ul a:hover {
  background: #9e6edd;
  color: #d8d8d8;
}

header .header-inner form {
  position: relative;
}
header .header-inner form input[type="search"] {
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
header .header-inner form input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  position: relative;
  height: 29px;
  width: 28px;
  content: "X";
  border-radius: 50%;
  /* background: url("../assets/img/imgPC-header/1520917472(1).png") no-repeat; */
}
header .header-inner form input[type="submit"] {
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
header .header-inner .h-user-info a {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;
}
header .header-inner .h-user-info a img {
  width: 40px;
  height: 40px;
}
header .header-inner .h-user-info a span {
  display: inline-block;
  margin-left: 5px;
  border-top: 4px solid #d8d8d8;
  border-right: 4px solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 4px solid transparent;
  transition: 0.3s;
}
header .header-inner .h-user-info a p {
  opacity: 0;
  position: absolute;
  top: 80px;
  left: 20px;
  font-size: 14px;
  color: #d8d8d8;
}
header .header-inner .h-user-info a:hover {
  outline: 1px solid #d8d8d8;
}
header .header-inner .h-user-info a:hover span {
  transform: rotateZ(180deg);
}
header .header-inner .h-user-info a:hover p {
  opacity: 1;
  top: 60px;
  transition: 0.2s;
}

#main_div {
  margin: 80px 0 20px 0;
  position: relative;
  width: 100%;
  height: 600px;
  background-image: linear-gradient(rgb(90, 24, 177), #9e6edd);
}

.carouslpic {
  overflow: hidden;
  bottom: 20px;
  right: 10px;
  color: #fff;
}
/* #main_div_img {
    margin: 0;
    padding: 0px;
    }

    #main_div_num li {
    border: #fff solid 1px;
    float: left;
    margin: 0px 5px;
    padding: 3px 10px;
    } */
.numsover {
  background-color: rgb(90, 24, 177);
  color: #fff;
}

section {
  width: 100%;
  background-image: linear-gradient(
    rgba(88, 0, 170, 1),
    rgba(194, 128, 255, 1)
  );
  display: flex;
  justify-content: space-between;
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
