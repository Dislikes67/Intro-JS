const square = document.querySelectorAll(".square")  // Sélectionne tout les .square et les stocke dans la variable squares.
const result = document.querySelector(".result") // Sélectionne .result et le stocke dans la variable result.

square.forEach((square) => {   // Pour chaque square ajoute un ecouteur d'evenement click à chaque square
  square.addEventListener("click", () => {
    const bgcolor = getComputedStyle(square).backgroundColor // Obtient la couleur de fond du carré cliqué.
    result.style.backgroundColor = bgcolor; // Applique cette couleur de fond au conteneur de résultat.
    result.innerHTML = bgcolor; // Affiche la couleur de fond en texte dans le conteneur de résultat.
  })
})