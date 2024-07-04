const square = document.querySelectorAll(".square")
console.log(square)
const result = document.querySelector(".result")

// console.log(block)
square.forEach((square) => {
  square.addEventListener("click", () => {

    const bgcolor = getComputedStyle(square).backgroundColor
    result.style.backgroundColor = bgcolor;
    result.innerHTML = bgcolor;
  })
})



//recup ma property color pour la mettre aux autres