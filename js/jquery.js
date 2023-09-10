// // // main banner
// const slides = $(".bnr_Wrap .container li");
// let n = 0;
// function slide() {
//   slides.removeClass("on");
//   slides.eq(n).addClass("on");
//   n++;
//   // 변수+1
//   if (n >= slides.length) {
//     n = 0;
//   }
// }
// setInterval(() => {
//   slide();
// }, 2500);

// slides.eq(n).addClass("on");

var mainSl = $(".bnr_Wrap .container").bxSlider({
  mode: "horizontal",
  auto: true,
  speed: 1000,
  pause: 3000,
  controls: true,
  pager: true, // 페이지 표시기 사용
  pagerType: "short",
  pagerCustom: "#bx-pager",

  // onSlideAfter: function ($slideElement, oldIndex, newIndex) {
  //   mainSl.startAuto(); // 슬라이드 이동 후 자동 재생을 시작합니다.
  // },
  nextSelector: ".main_img_ctl .main_next",
  prevSelector: ".main_img_ctl .main_prev",
});

// 포트폴리오 닫기 버튼
$(".btn_close").on("click", function (e) {
  e.preventDefault();
  $(".popup").hide();
  $(".overlay").removeClass("open");
});

// main_prd_wrap
// setInterval(fnSlide, 4000);
// function fnSlide() {
//   $(".main_prd_wrap .inner ul").animate(
//     { "margin-left": "-430px" },
//     1200,
//     function () {
//       $(".main_prd_wrap .inner ul").css({ "margin-left": "0" });
//       $(".main_prd_wrap .inner ul li:first-child").insertAfter(
//         ".main_prd_wrap .inner ul li:last-child"
//       );
//     }
//   );
// }

$(".main_prd_wrap .inner ul").bxSlider({
  pager: true,
  speed: 1000,
  auto: true,
  pause: 2000,
  minSlides: 1,
  maxSlides: 2,
  moveSlides: 3,
  slideWidth: 800,
  controls: false,
});

// review_wrap
// setInterval(underSlide, 3000);
// function underSlide() {
//   $(".review_wrap .inner ul").animate(
//     { "margin-left": "-250px" },
//     1200,
//     function () {
//       $(".review_wrap .inner ul").css({ "margin-left": "0" });
//       $(".review_wrap .inner ul li:first-child").insertAfter(
//         ".review_wrap .inner ul li:last-child"
//       );
//     }
//   );
// }

$(".review_wrap .inner ul").bxSlider({
  mode: "horizontal",
  speed: 1000,
  auto: true,
  pause: 2000,
  minSlides: 2,
  maxSlides: 4,
  moveSlides: 4,
  slideWidth: 300,
  nextSelector: ".img_ctl .next",
  prevSelector: ".img_ctl .prev",
  controls: true,
  slideMargin: 20,
  adaptiveHeight: true,
});

$(".img_ctl .next").click(function () {
  slider.goToNextSlide();
  return false;
});

$(".img_ctl .prev").click(function () {
  var count = slider.getSlideCount();
  alert("Slide count: " + count);
  return false;
});

function pagerFix($bx, prv, nxt) {
  bx.stopAuto(true);
  bx.goToSlide(nxt);
  bx.stopAuto(false);
  bx.startAuto(true);
}

// m_footer
let footerList = $(".Right");
let footerBar = $(".link");
let footerLinks = $("li");
footerList.click(function () {
  footerLinks.toggleClass("active");
});

let footerLists = $(".right");
let footerBars = $(".num");
let footerLink = $(".none");
footerLists.click(function () {
  footerLink.toggleClass("active");
});

// m-aside
let hamMenuIcon = $("#ham_menu");
let navBar = $(".aside_wrap");
let navLinks = $("li");
hamMenuIcon.click(function () {
  navBar.toggleClass("active");
  hamMenuIcon.toggleClass("fa-times");
});

let category = $(".category_menu ul .line2");
let categoryMenu = $(".category_menu .dep2");
let menuLinks = $("li");
category.click(function () {
  categoryMenu.toggleClass("active");
});

$(".aside_slide").bxSlider({
  mode: "horizontal",
  speed: 1000,
  auto: true,
  autoHover: true,
  pause: 2000,
  controls: false,
  pager: false,
});

$(".dep2_banenr_wrap").bxSlider({
  mode: "horizontal",
  speed: 1000,
  auto: true,
  pause: 2000,
  controls: false,
  pager: true, // 페이지 표시기 사용
  pagerType: "short",
});

$(".custom-pager-link").click(function (e) {
  e.preventDefault();
  var index = $(this).index();
  slider.goToSlide(index);
});
