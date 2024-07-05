document.querySelectorAll(".square").forEach(square => {  //Sélectionne tous les éléments avec la classe square et boucle sur chacun.
    square.addEventListener('click', () => {
        square.classList.toggle("active") //Recupère la classe .active


        // const computedStyle = getComputedStyle(square); //Récupère le style calculé du carré.
        // if (computedStyle.transform === 'matrix(1, 0, 0, 1, 0, 0)' || computedStyle.transform === 'none') { //Vérifie si il est à l'état initial (voir déf matrice)
        //     // Applique la transformation
        //     square.style.width = '180px';
        //     square.style.height = '180px';
        //     square.style.backgroundColor = '#AA716C';
        //     square.style.transform = 'rotate(360deg)';
        // } else {           //Si le carré est déjà transformé
        //     // remet à l'état initial
        //     square.style.width = '200px';
        //     square.style.height = '200px';
        //     square.style.backgroundColor = 'rgb(79, 133, 79)';
        //     square.style.transform = 'rotate(0deg)';
        // }


    });
});