const slides = $(".bnrWarp .container li");
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
