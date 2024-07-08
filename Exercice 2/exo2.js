const square = document.querySelectorAll(".square")  // Sélectionne tout les .square et les stocke dans la variable squares.
const result = document.querySelector(".result") // Sélectionne .result et le stocke dans la variable result.

square.forEach((square) => {   // Pour chaque square ajoute un ecouteur d'evenement click à chaque square
  square.addEventListener("click", () => {
    const bgColor = getComputedStyle(square).backgroundColor // Obtient la couleur de fond du carré cliqué.
    result.style.backgroundColor = bgColor; // Applique cette couleur de fond au conteneur de résultat.
    result.innerHTML = bgColor; // Affiche la couleur de fond en texte dans le conteneur de résultat.
  })
})