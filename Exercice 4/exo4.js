const square = document.querySelectorAll(".square")
const result = document.querySelector(".container")
square.forEach((square) => {
    square.addEventListener("click", ()  => {
        const bgColor = getComputedStyle(square).backgroundColor
        result.style.backgroundColor = bgColor;
        square.classList.toggle("active")
    })
})