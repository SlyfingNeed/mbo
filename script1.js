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
  const fuelEfficiency = 1;
  const tree=65;

  const carbonEmission = (mileage / fuelEfficiency * tree) * getCarbonFactor(vehicleType);

  // Display result
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('carbonResult').textContent = carbonEmission.toFixed(1) + ' g  CO2';
}

function getCarbonFactor(vehicleType) {
  // You might replace this with actual carbon factors based on vehicle type
  // For demonstration, just using arbitrary values
  switch (vehicleType) {
      case 'car':
          return 192;
      case 'car-d':
          return 171;
      case 'bus':
          return 105;
      case 'motor':
          return 103;
      case 'car-e':
          return 53;     
      default:
          return 3.0;
  }
}
