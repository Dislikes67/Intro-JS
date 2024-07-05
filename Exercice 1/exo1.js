const addBtn = document.querySelector("#alertButton"); //Recupère le alerbutton
addBtn.addEventListener('click', getAlertButtonProperties); //ajoute un ecouteur d'event (sur le click on appele le alertbutton)

function getAlertButtonProperties(){        //Creation de la fonction de l'appel de bouton alert
    const square = document.querySelector(".square") // creation de la constante square (on la recupere dans le css .square)
    const style = window.getComputedStyle(square) // création de la constante pour l'utilisation du getComputedStyle sur notre square

    //getComputedStyle : method interface returns a string containing the value of a specified CSS property.

    const bgColorValue = style.getPropertyValue("background-color")
    const colorTxt = style.getPropertyValue("color")
    const heightValue = style.getPropertyValue("height")       // appel de toutes les infos en les nommant et en leurs assignant le getPropertyValue pour récuperer la valeur
    const widthValue = style.getPropertyValue("width")
    const displayType = style.getPropertyValue("display")
    const fontFamilyType = style.getPropertyValue("font-family")

    // alert("-Background color:" + " " + bgColorValue + "\n" + ) 
    // Utilisation de template literal pour interpreter les espaces et les retours à la ligne
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