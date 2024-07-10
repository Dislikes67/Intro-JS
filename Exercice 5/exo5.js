function convertToFrancs() {
    // Get the input field and the result/error divs
    const euroInput = document.getElementById('euroInput');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    // Clear previous results and errors
    resultDiv.textContent = '';
    errorDiv.textContent = '';

    // Get the input value
    const euros = euroInput.value;

    // Check if the input is a valid number
    if (isNaN(euros)) {
        errorDiv.textContent = 'Vous devez saisir une valeur numérique.';
        return;
    }

    // Convert euros to francs
    const francs = euros * 6.55957;

    // Display the result
    resultDiv.textContent = `${francs.toFixed(2)} francs`;
}