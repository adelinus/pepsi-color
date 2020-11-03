let imgs = document.querySelectorAll(".thumb img");
let colors = ["#0062be", "#e60c2c", "#1e1e1e"];

imgs.forEach((item) => {
  item.addEventListener("click", imgSlider);
});

function imgSlider(event) {
  document.querySelector(".pepsi").src = event.target.src;
}

function changeBgColor(color) {
  let sec = document.querySelector(".sec");
  sec.style.backgroundColor = color;
  console.log(sec.style.backgroundColor);
}
