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
