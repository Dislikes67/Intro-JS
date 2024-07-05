const addBtn = document.querySelector("#alertButton");
addBtn.addEventListener('click', getAlertButtonProperties);

function getAlertButtonProperties(){
    const square = document.querySelector(".square")

    const style = window.getComputedStyle(square)
    const bgColorValue = style.getPropertyValue("background-color")
    const colorTxt = style.getPropertyValue("color")
    const heightValue = style.getPropertyValue("height")
    const widthValue = style.getPropertyValue("width")
    const displayType = style.getPropertyValue("display")
    const fontFamilyType = style.getPropertyValue("font-family")

    // alert("-Background color:" + " " + bgColorValue + "\n" + ) 
    alert(`
    Class : square
        -Background color : ${bgColorValue}
        -Color : ${colorTxt}
        -Height : ${heightValue}
        -Width : ${widthValue}
        -Display : ${displayType}
        -Display : ${fontFamilyType}
        `) 
}



















//arg event

// getComputedStyle