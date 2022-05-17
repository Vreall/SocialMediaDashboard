const switchBtn = document.querySelector(".mode__slider");
function switchMode() {
  document.body.classList.toggle("body__light");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.toggle("card__light");
  });
  const primeTexts = document.querySelectorAll(".PrimTextDarkMode");
  primeTexts.forEach((text) => {
    text.classList.toggle("PrimTextLightMode");
  });
  const secTexts = document.querySelectorAll(".SecTextDarkModeColor");
  secTexts.forEach((text) => {
    text.classList.toggle("SecTextLightModeColor");
  });
  document.querySelector(".topBgc").classList.toggle("TopBgcLight");
}

switchBtn.addEventListener("click", switchMode);
