const txtAnim = document.querySelector("h2");

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
