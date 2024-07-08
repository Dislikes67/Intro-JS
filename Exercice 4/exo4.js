const squares = document.querySelectorAll(".square");
    // Select the container element
    const result = document.querySelector(".container");

    // Store the default background color of the container
    const defaultBgColor = getComputedStyle(result).backgroundColor;

    // Add a click event listener to each square
    squares.forEach((square) => {
        square.addEventListener("click", () => {
            // Get the background color of the clicked square
            const bgColor = getComputedStyle(square).backgroundColor;
            
            // Toggle the background color of the container
            if (result.style.backgroundColor === bgColor) {
                result.style.backgroundColor = defaultBgColor;
            } else {
                result.style.backgroundColor = bgColor;
            }

            // Toggle the 'activeImg' class on the img element inside the clicked square
            const img = square.querySelector("img");
            img.classList.toggle("activeImg");

            // Toggle the 'active' class on the square
            square.classList.toggle("active");
        });
    });

    //Pour integrer le gradiant mettre juste background et non background colo