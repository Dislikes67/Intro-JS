// Sélectionner tous les éléments avec la classe "square"
const squares = document.querySelectorAll(".square");

// Sélectionner l'élément avec la classe "container"
const result = document.querySelector(".container");

// Stocker la couleur de fond par défaut du conteneur
const defaultBgColor = "rgb(192, 191, 190)"; // Utilise la couleur par défaut du CSS
const defaultBgImage = "none"; // Pas d'image de fond par défaut

// Ajouter un écouteur d'événement de clic à chaque "square"
squares.forEach((square) => {
    square.addEventListener("click", () => {
        // Déterminer la couleur ou le dégradé de fond pour le "square" cliqué
        let bgColor;
        let isGradient = false;

        // Vérifier si le carré cliqué est l'Instagram (id="inst")
        if (square.id === "inst") {
            bgColor = "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)";
            isGradient = true; // Marque que c'est un dégradé
        } else {
            bgColor = getComputedStyle(square).backgroundColor; // Obtenir la couleur de fond du carré
        }

        // Obtenir la couleur et l'image de fond actuelles du conteneur
        const currentBgColor = getComputedStyle(result).backgroundColor;
        const currentBgImage = getComputedStyle(result).backgroundImage;

        // Basculer la couleur de fond ou le dégradé du conteneur
        if (isGradient) {
            if (currentBgImage !== 'none') {  // Si la couleur de fond actuelle correspond à la couleur du carré
                result.style.backgroundImage = defaultBgImage;  // Remettre la couleur de fond par défaut
                result.style.backgroundColor = defaultBgColor;  // Remettre l'image de fond par défaut (aucune)
            } else {
                result.style.backgroundImage = bgColor;  // Appliquer la couleur de fond du carré
                result.style.backgroundColor = "";  // Supprimer l'image de fond pour éviter les conflits
            }
        } else {
            if (currentBgColor === bgColor) {
                result.style.backgroundColor = defaultBgColor;
                result.style.backgroundImage = defaultBgImage;
            } else {
                result.style.backgroundColor = bgColor;
                result.style.backgroundImage = "";
            }
        }

         // Toggle la classe 'activeImg' sur l'élément img à l'intérieur du carré cliqué
        const img = square.querySelector("img");
        img.classList.toggle("activeImg");

        // Toggle la classe 'active' sur le carré cliqué
        square.classList.toggle("active");

        // Toggle la visibilité de la légende
        const caption = square.querySelector(".caption");
        caption.classList.toggle("showCaption");
    });
});
