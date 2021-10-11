<template>
  <div>
    <body>
      <header>
        <div class="header-inner">
          <a href="index.html" class="h-logo"></a>
          <a
            href="index.html"
            class="h-p"
            style="font-family: fantasy; color: white"
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
      <div class="container">
        <div class="user_info">
          <img src="../assets/img/imgPC-header/avatar.png" />
          <h2>User Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Adipisci autem consectetur corporis
            culpa deleniti dolores mollitia perferendis, perspiciatis sint sunt
            suscipit ullam, vel voluptatibus. Aperiam laboriosam mollitia optio
            reiciendis.
          </p>
          <div class="interior">
            <a class="dialog" href="#open-modal">Edit Profile -></a>
          </div>
          <div id="open-modal" class="modal-window">
            <div>
              <a href="#" title="Close" class="modal-close">Close</a>
              <h1>Edit Profile</h1>
              <form>
                <div class="group">
                  <input type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>New User Name</label>
                </div>
                <div class="group">
                  <input type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>New Description</label>
                </div>
              </form>
              <a href="#" title="Close" class="save-close">SAVE</a>
            </div>
          </div>
        </div>
        <div class="ticket_info">
          <h2 style="text-align: left; margin-left:5%;">MY TICKETS</h2>
          <div class="tickets_list">
            <img src="../assets/img/u103.png" alt="" />
            <div class="info">
              <h2>Name: XXXXX</h2>
              <h2>Time: 2021-10-01</h2>
              <h2>Location: SYDNEY OPERA HOUSE</h2>
            </div>
            <div class="qr">
              <h3>State: Incoming</h3>
							<img src="../assets/img/qr.png" alt="" />
            </div>
          </div>
					<div class="tickets_list">
            <img src="../assets/img/u104.png" alt="" />
            <div class="info">
              <h2>Name: XXXXX</h2>
              <h2>Time: 2021-10-01</h2>
              <h2>Location: SYDNEY OPERA HOUSE</h2>
            </div>
            <div class="qr">
              <h3>State: Incoming</h3>
							<img src="../assets/img/qr.png" alt="" />
            </div>
          </div>
					<div class="tickets_list">
            <img src="../assets/img/u106.png" alt="" />
            <div class="info">
              <h2>Name: XXXXX</h2>
              <h2>Time: 2021-10-01</h2>
              <h2>Location: SYDNEY OPERA HOUSE</h2>
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
    </body>
  </div>
</template>

<script>
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
  position: relative;
  margin-bottom: 45px;
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
}
input:focus {
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
input:focus ~ label,
input:valid ~ label {
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
input:focus ~ .bar:before,
input:focus ~ .bar:after {
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
input:focus ~ .highlight {
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
