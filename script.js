function showCalculator() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('calculator').classList.remove('hidden');
}

function nextQuestion() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => question.classList.add('hidden'));

    const nextQuestion = document.getElementById('question' + (parseInt(getCurrentQuestionNumber()) + 1));
    if (nextQuestion) {
        nextQuestion.classList.remove('hidden');
    } else {
        calculateCarbon();
    }
}

function getCurrentQuestionNumber() {
    const questions = document.querySelectorAll('.question');
    for (let i = 0; i < questions.length; i++) {
        if (!questions[i].classList.contains('hidden')) {
            return questions[i].id.replace('question', '');
        }
    }
    return null;
}

function calculateCarbon() {
    const vehicleType = document.getElementById('vehicleType').value;
    const mileage = parseFloat(document.getElementById('mileage').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);

    // Simple carbon calculation (for demonstration purposes)
    const carbonEmission = (mileage / fuelEfficiency) * getCarbonFactor(vehicleType);

    // Display result
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('carbonResult').textContent = carbonEmission.toFixed(2) + ' kg CO2';
}

function getCarbonFactor(vehicleType) {
    // You might replace this with actual carbon factors based on vehicle type
    // For demonstration, just using arbitrary values
    switch (vehicleType) {
        case 'sedan':
            return 2.5;
        case 'suv':
            return 3.5;
        case 'truck':
            return 4.5;
        default:
            return 3.0;
    }
}
