function convertToFrancs() {
    const input = document.getElementById('euroInput').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    
    // Effacer les messages précédents
    resultElement.innerText = '';
    errorElement.innerText = '';
    
    // Vérifier si l'entrée est un nombre
    if (isNaN(input)) {
        errorElement.innerText = 'Veuillez entrer une valeur numérique.';
        return;
    }

    const euroValue = parseFloat(input);
    if (isNaN(euroValue)) {
        errorElement.innerText = 'Veuillez entrer une valeur numérique.';
        return;
    }

    const francValue = euroValue * 6.55957; // Taux de conversion historique : 1 euro = 6.55957 francs français
    resultElement.innerText = `${euroValue} euros = ${francValue.toFixed(2)} francs`;
}