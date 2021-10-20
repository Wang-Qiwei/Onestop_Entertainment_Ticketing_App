<template>
  <div>
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

          <Select v-model="model1" class="h-city header-li-wh">
            <Option
              v-for="item in cityList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
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
      <div class="container">
        <div class="top">
          <div class="left">
            <img src="../assets/img/u103.png" alt="" />
            <div>
              <h1>Name</h1>
              <p>Money</p>
              <p>Subject</p>
              <p>Location,/120min</p>
              <p>2021-10-01 Sydney Release</p>
              <div class="interior">
                <a class="dialog" href="#open-modal">
                  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;BUY TICKETS &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;</a
                >
              </div>
              <div id="open-modal" class="modal-window">
                <div>
                  <a href="#" title="Close" class="modal-close">Close</a>
                  <!-- <h1>BUY TICKETS</h1> -->
                  <form>
                    <div class="group">
                      <img src="../assets/img/alipay.jpeg" alt="" />
                      <h1>
                        <span style="color: grey; font-family: Times New Roman"
                          >Amount: </span
                        ><b style="font-family: Times New Roman">100$</b>
                      </h1>
                      <h1>
                        <span style="color: grey; font-family: Times New Roman"
                          >Order: 198555</span
                        >
                      </h1>
                      <h1>
                        <span style="color: grey; font-family: Times New Roman"
                          >Description: Alipay Payment</span
                        >
                      </h1>
                      <div class="payqr">
                        <img src="../assets/img/payqr.png" alt="" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="segmentation"></div>
        <div class="description">
          <h2>DESCRIPTION</h2>
          <p class="txt">
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Adipisci autem consectetur corporis
            culpa deleniti dolores mollitia perferendis, perspiciatis sint sunt
            suscipit ullam, vel voluptatibus. Aperiam laboriosam mollitia optio
            reiciendis. Labore nihil quo sed. Culpa earum hic ipsa, libero
            magnam sed? Dignissimos dolores fugit labore modi quas quasi
            reiciendis ut voluptates.
          </p>
        </div>
        <br />
        <div class="segmentation"></div>
        <div class="roles">
          <h2>PERFORMERS</h2>
          <div class="roles_line">
            <img src="../assets/img/roles.jpeg" alt="" />
            <p class="txt">
              Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Adipisci autem consectetur
              corporis culpa deleniti dolores mollitia perferendis, perspiciatis
              sint sunt suscipit ullam, vel voluptatibus. Aperiam laboriosam
              mollitia optio reiciendis. Labore nihil quo sed. Culpa earum hic
              ipsa, libero magnam sed? Dignissimos dolores fugit labore modi
              quas quasi reiciendis ut voluptates.Lorem ipsum dolor sit amet,
              consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Adipisci autem consectetur corporis culpa deleniti dolores
              mollitia perferendis, perspiciatis sint sunt suscipit ullam, vel
              voluptatibus. Aperiam laboriosam mollitia optio reiciendis. Labore
              nihil quo sed. Culpa earum hic ipsa, libero magnam sed?
              Dignissimos dolores fugit labore modi quas quasi reiciendis ut
              voluptates.
            </p>
          </div>
          <br />
        </div>
        <!-- <div class="segmentation"></div> -->
      </div>

      <div class="footer">
        <p>COMP 5619 - Group 10</p>
      </div>
    </body>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
};
</script>
<style scoped>
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
.container {
  position: relative;
  margin-top: 80px;
  width: 100%;
  height: 400px;
  background-image: linear-gradient(
    rgba(88, 0, 170, 1),
    rgba(194, 128, 255, 1)
  );
}
.container > div:nth-child(1) {
  width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50px;
  left: 32%;
}
.left {
  display: flex;
  text-align: left;
}
.left > img {
  margin-right: 100px;
  border: 2px solid white;
  width: 235px;
}
.left > div > h1 {
  color: white;
  padding-top: 10px;
  font-size: 36px;
  line-height: 48px;
}
.left > div > p {
  color: white;
  font-size: 24px;
  line-height: 48px;
}
.left > div > p:nth-child(3) {
  padding-top: 5px;
}
/* .left > div > div > button {
  margin-top: 20px;
  width: 313px;
  height: 40px;
  margin-right: 10px;
  background: #8400ff;
  color: white;
  padding: 7px 20px;
  border-radius: 7px;
  border: 1px solid #8400ff;
  box-sizing: border-box;
  font-family: "Arial Regular", "Arial", sans-serif;
  font-weight: 700;
  line-height: normal;
}
.interior > button > a{
	color: white;
	font-family: "Arial Regular", "Arial", sans-serif;
  font-weight: 700;
} */
.interior {
  margin-top: 20px;
}
.dialog {
  background: #8400ff;
  color: white;
  padding: 7px 20px;
  border-radius: 7px;
  border: 1px solid #8400ff;
  box-sizing: border-box;
  font-family: "Arial Regular", "Arial", sans-serif;
  font-weight: 700;
  line-height: normal;
  font-size: 24px;
}
.dialog:hover {
  box-sizing: border-box;
  background: rgb(90, 24, 177);
  text-shadow: 2px 2px 5px black;
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
  width: 500px;
  position: absolute;
  top: 50%;
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
  text-align: center;
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
  position: relative;
  margin-bottom: 45px;
}
.group > img {
  height: 100px;
  margin-left: 23%;
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
.payqr {
  width: 350px;
  height: 350px;
  position: relative;
  margin-top: 25px;
  margin-left: 11%;
  border-top: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
}
.payqr > img {
  height: 347px;
  width: 348px;
}
.container2 {
  width: 100%;
  background: rgba(194, 128, 255, 1);
}
.segmentation {
  width: 84%;
  margin-left: 7%;
  border-bottom: 2px solid #e2e2e2;
}
.description {
  width: 85%;
  margin-left: 7%;
  text-align: left;
}
.description > h2 {
  color: white;
  font-size: 28px;
  padding-left: 5px;
  margin: 26px 0;
  border-left: 3px solid rgba(88, 0, 170, 1);
}
.txt {
  font-size: 20px;
}
.roles {
  width: 85%;
  margin-left: 7%;
  text-align: left;
}
.roles > h2 {
  color: white;
  font-size: 28px;
  padding-left: 5px;
  margin: 26px 0;
  border-left: 3px solid rgba(88, 0, 170, 1);
}
.roles_line {
  text-align: left;
  display: flex;
}
.roles_line > img {
  display: flex;
  border: 2px solid white;
  width: 150px;
  height: 200px;
}
.roles_line > p {
  display: flex;
  margin-left: 50px;
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
