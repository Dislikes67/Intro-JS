const square = document.querySelectorAll(".square")
const result = document.querySelector(".container")
square.forEach((square) => {
    square.addEventListener('click', ()  => {
        const bgcolor = getComputedStyle(square).backgroundColor
        result.style.backgroundColor = bgColor.backgroundColor;
        square.classList.toggle("active")
    })
})