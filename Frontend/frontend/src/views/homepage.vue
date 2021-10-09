<template>
  <div>
    <head lang="en">
      <title>Tok-Tickets</title>
    </head>
    <body>
      <header>
        <div class="header-inner">
          <a href="index.html" class="h-logo"></a>
          <a
            href="index.html"
            class="h-p"
            style="font-family:fantasy; color: white;"
            >Tok-Tickets</a
          >

          <div class="h-city header-li-wh">
            <p>Sydeny<span></span></p>
          </div>
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
            <a href="denglu.html" class="header-li-wh">
              <img src="../assets/img/imgPC-header/avatar.png" />
              <span></span>
              <p>Login</p>
            </a>
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

        <!--太复杂没必要 antd一个走马灯组件就能实现>-->
        <!-- <ul id="main_div_img">
          <li>
            <img src="../assets/img/post.png" width="100%" height="600" />
          </li>
          <li>
            <img src="../assets/img/u113.png" width="100%" height="600" />
          </li>
        </ul>

        <ul id="main_div_num">
          <li>1</li>
          <li>2</li>
        </ul> -->
      </div>

      <section>
        <div class="section-left">
          <ul>
            <li>Currently showing (55)</li>
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
                <a href="">BUY TICKETS</a>
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
                <a href="">BUY TICKETS</a>
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
                <a href="">BUY TICKETS</a>
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
                <a href="">BUY TICKETS</a>
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
                <a href="">BUY TICKETS</a>
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
                <a href="">BUY TICKETS</a>
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
                <a href="">BUY TICKETS</a>
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
                <a href="">BUY TICKETS</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <p>COMP 5619 - Group 10</p>
      </footer>
    </body>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // imageAutoChange() {
    //   var $imgs = document.getElementByid("#main_div_img li");
    //   var $nums = document.getElementByid("#main_div_num li");
    //   var isStop = false;
    //   var index = 0;
    //   $nums
    //     .eq(index)
    //     .addClass("numsover")
    //     .siblings()
    //     .removeClass("numsover");
    //   $imgs.eq(index).show();
    //   $nums
    //     .mouseover(function() {
    //       isStop = true;
    //       this.addClass("numsover")
    //         .siblings()
    //         .removeClass("numsover");
    //       index = $nums.index(this);
    //       $imgs.eq(index).show("slow");
    //       $imgs
    //         .eq(index)
    //         .siblings()
    //         .hide("slow");
    //     })
    //     .mouseout(function() {
    //       isStop = false;
    //     });
    //   setInterval(function() {
    //     if (isStop) return;
    //     if (index >= 2) index = -1;
    //     index++;
    //     $nums
    //       .eq(index)
    //       .addClass("numsover")
    //       .siblings()
    //       .removeClass("numsover");
    //     $imgs
    //       .eq(index)
    //       .show("slow")
    //       .siblings()
    //       .hide("slow");
    //   }, 2000);
    // },
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

header .header-inner .h-logo {
  width: 40px;
  height: 40px;
  background: url("../assets/img/imgPC-header/ticket-32.png") no-repeat;
}
header .header-inner .h-p {
  width: 100px;
  height: 18px;
}
header .header-inner .h-city {
  height: 100%;
  text-align: center;
  line-height: 80px;
  margin-left: 5px;
  cursor: pointer;
}
header .header-inner .h-city span {
  display: inline-block;
  vertical-align: 4px;
  margin-left: 5px;
  transition: all linear 0.3s;
  border-top: 4px solid #d8d8d8;
  border-right: 4px solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 4px solid transparent;
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
  background-image: linear-gradient(#9e6edd, #9198e5);
  display: flex;
  justify-content: space-between;
}
.section-left {
  margin-top: 20px;
  margin-left: 7%;
  width: 84%;
}
.section-left > ul {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.section-left > ul:nth-child(1) > li {
  color: #ffffff;
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
