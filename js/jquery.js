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

$(".btn_close").on("click", function (e) {
  e.preventDefault();
  $(".popup").hide();
  $(".overlay").removeClass("open");
});

//
// setInterval(topSlide, 3000);
// function topSlide() {
//   $(".dep2_banenr_wrap ").animate(
//     { "margin-left": "-320px" },
//     1200,
//     function () {
//       $(".dep2_banenr_wrap ").css({ "margin-left": "0" });
//       $(".dep2_banenr_wrap>img:first-child").insertAfter(
//         ".dep2_banenr_wrap>img:last-child"
//       );
//     }
//   );
// }

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

let hamMenuIcon = $("#ham_menu");
let navBar = $(".aside_wrap");
let navLinks = $("li");
hamMenuIcon.click(function () {
  navBar.toggleClass("active");
  hamMenuIcon.toggleClass("fa-times");
});

let category = $(".category_menu ul .line2");
let categoryMenu = $(".category_menu .dep2");
let menuLinks = $(".dep2");
category.click(function () {
  categoryMenu.toggleClass("active");
});
