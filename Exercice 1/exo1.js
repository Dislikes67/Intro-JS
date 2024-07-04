const addBtn = document.querySelector("#alertButton");
addBtn.addEventListener('click', getAlertButtonProperties);

function getAlertButtonProperties(){
    const square = document.querySelector(".square")

    const style = window.getComputedStyle(square)
    const bgColorValue = style.getPropertyValue("background-color")
    console.log(bgColorValue)

    // alert("-Background color:" + " " + bgColorValue + "\n" + ) 
    alert(`
        -Background color: ${bgColorValue}
        dada                                    //template literal



    
        `) 
}



















//arg event

// getComputedStyle