// // main banner
const slides = $(".bnr_Wrap .container li");
let n = 0;
function slide() {
  slides.removeClass("on");
  slides.eq(n).addClass("on");
  n++;
  // 변수+1
  if (n >= slides.length) {
    n = 0;
  }
}
setInterval(() => {
  slide();
}, 2500);

slides.eq(n).addClass("on");

// $(".bnr_Wrap .container").bxSlider({
//   mode: "horizontal",
//   auto: true,
//   pause: 3000,
//   speed: 1000,
//   pager: true,
//   controls: true,
// });

// 포트폴리오 닫기 버튼
$(".btn_close").on("click", function (e) {
  e.preventDefault();
  $(".popup").hide();
  $(".overlay").removeClass("open");
});

// main_prd_wrap
setInterval(fnSlide, 4000);
function fnSlide() {
  $(".main_prd_wrap .inner ul").animate(
    { "margin-left": "-430px" },
    1200,
    function () {
      $(".main_prd_wrap .inner ul").css({ "margin-left": "0" });
      $(".main_prd_wrap .inner ul li:first-child").insertAfter(
        ".main_prd_wrap .inner ul li:last-child"
      );
    }
  );
}
// review_wrap
setInterval(underSlide, 3000);
function underSlide() {
  $(".review_wrap .inner ul").animate(
    { "margin-left": "-250px" },
    1200,
    function () {
      $(".review_wrap .inner ul").css({ "margin-left": "0" });
      $(".review_wrap .inner ul li:first-child").insertAfter(
        ".review_wrap .inner ul li:last-child"
      );
    }
  );
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
  pagerCustom: ".custom-pager",
});

$(".custom-pager-link").click(function (e) {
  e.preventDefault();
  var index = $(this).index();
  slider.goToSlide(index);
});
