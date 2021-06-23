const form = document.getElementById("form");
const formRange = document.getElementById("form_range");
const sliderRail = document.getElementById("slider_rail");

const formChackbox = document.getElementById("form_checkbox");

formRange.addEventListener("change", (e) => {
   sliderRail.style.width = e.target.value * 25 + "%";
});

formChackbox.addEventListener("change", (e) => {
   console.log(e.target.checked );
});

form.addEventListener("submit", (e) => {
   e.preventDefault();
});
