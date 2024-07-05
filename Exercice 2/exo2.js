const square = document.querySelectorAll(".square")
const result = document.querySelector(".result")

square.forEach((square) => {
  square.addEventListener("click", () => {
    const bgcolor = getComputedStyle(square).backgroundColor
    result.style.backgroundColor = bgcolor;
    result.innerHTML = bgcolor;
  })
})


















//recup ma property color pour la mettre aux autres