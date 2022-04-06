let hidebar = () => {
  let pos = document.documentElement.scrollTop;
  if (pos < 200) {
    document.getElementById("header").style.transform = "translateY(-200px)";
  } else {
    document.getElementById("header").style.transform = "translateY(0)";
  }
};

let shownav = () => {
  console.log("in");
  document.getElementById("header").style.transform = "translateY(0)";
};
let hidenav = () => {
  console.log("out");
  document.getElementById("header").style.transform = "translateY(-200px)";
};

document.getElementById("logo").addEventListener("mouseover", () => {
  console.log("in");
  shownav();
});
document.getElementById("header").addEventListener("mouseleave", () => {
  console.log("out");
  hidenav();
});
