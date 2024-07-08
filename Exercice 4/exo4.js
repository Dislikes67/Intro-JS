// Select all elements with the class 'square'
const square = document.querySelectorAll(".square")
// Select the container element
const result = document.querySelector(".container")
// Store the default background color of the container
const defaultBgColor = getComputedStyle(result).backgroundColor;

// Add a click event listener to each square
square.forEach((square) => {
    square.addEventListener("click", ()  => {
        // Get the background color of the clicked square
        const bgColor = getComputedStyle(square).backgroundColor

        // Toggle the background color of the container
        if (result.style.backgroundColor === bgColor) {
            result.style.backgroundColor = defaultBgColor;
        } else {
            result.style.backgroundColor = bgColor;
        }
        
        // Set the background color of the container to the color of the clicked square
        result.style.backgroundColor = bgColor;
        // Get the child [array] of the square
        square.childNodes[0].classList.toggle("activeImg")
        // Toggle the 'active' class on the square
        square.classList.toggle("active")
    })
})