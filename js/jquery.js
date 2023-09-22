$("a").on("click", () => {
  return false;
});
// 포트폴리오 닫기 버튼
$(".btn_close").on("click", function (e) {
  e.preventDefault();
  $(".popup").hide();
  $(".overlay").removeClass("open");
});

$(".main_prd_wrap .inner ul").bxSlider({
  pager: true,
  speed: 1500,
  auto: true,
  pause: 3000,
  minSlides: 1,
  maxSlides: 3,
  moveSlides: 1,
  slideWidth: 800,
  infiniteLoop: true,
  controls: false,
});

$(".review_wrap .inner ul").bxSlider({
  mode: "horizontal",
  speed: 1500,
  auto: true,
  pause: 3000,
  minSlides: 2,
  maxSlides: 4,
  moveSlides: 4,
  slideWidth: 270,
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
  infiniteLoop: true,
  autoHover: true,
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

var mainSl = $(".bx_sli").bxSlider({
  mode: "horizontal",
  auto: true,
  speed: 1000,
  pause: 3000,
  controls: true,
  pager: true, // 페이지 표시기 사용
  pagerType: "short",
  pagerCustom: "#bx-pager",
  nextSelector: ".main_img_ctl .main_next",
  prevSelector: ".main_img_ctl .main_prev",
  infiniteLoop: true,
  autoHover: true,
});
