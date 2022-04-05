const txtAnim = document.querySelector("#typewriter");

new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 20,
})
  .changeDelay(50)
  .typeString('<span style="color:#E93119">GRAPHISTE</span>')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<span style="color:#8DB5AD">WEB DESIGNER</span>')
  .pauseFor(1000)
  .deleteChars(12)
  .typeString('<span style="color:#FFF">MOTION DESIGNER</span>')
  .pauseFor(1000)
  .deleteChars(15)
  .start();

document.getElementById("scrollToTop").addEventListener("click", () => {
  window.scrollTo(0, 0);
});
document.getElementById("scrollToTop").style.cursor = "pointer";

/*-----------SCROLLPROGRESS-------------*/

let scrollPercentage = () => {
  let scrollProgress = document.getElementById("scrollToTop");
  let scrollWhite = document.getElementById("scrollProgress");
  let scrollImg = document.getElementById("scrollImg");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.background = `conic-gradient(#e93119 ${scrollValue}%,rgba(0,0,0,0) ${scrollValue}%)`;

  if (scrollValue > 20) {
    scrollImg.style.opacity = 1;
  } else {
    scrollImg.style.opacity = 0;
  }

  if (scrollValue > 25) {
    scrollProgress.style.opacity = 1;
    scrollWhite.style.opacity = 1;
  } else {
    scrollProgress.style.opacity = 0;
    scrollWhite.style.opacity = 0;
  }
};
window.onscroll = scrollPercentage;

/*----------PORTFOLIO----------*/
let carouselWidth = $(".carousel-inner")[0].scrollWidth;
let cardWidth = $(".carousel-item").width();
let scrollPosition = 0;
$(".carousel-control-next").on("click", function () {
  if (scrollPosition < carouselWidth - cardWidth * 4) {
    //check if you can go any further
    scrollPosition += cardWidth; //update scroll position
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
  }
});
$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  }
});

let multipleCardCarousel = document.querySelector("#carouselPortfolio");
if (window.matchMedia("(min-width: 768px)").matches) {
  //rest of the code
  let carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
