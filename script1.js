function calculateEmissions() {
      const distance = parseFloat(document.getElementById('distance').value);
      const fuelType = document.getElementById('fuelType').value;
      const fuelConsumed = parseFloat(document.getElementById('fuelConsumed').value);

      let emissionFactor;
      // Emission factors per fuel type (values are illustrative)
      switch (fuelType) {
        case 'petrol':
          emissionFactor = 2.31; // gCO2 per km
          break;
        case 'diesel':
          emissionFactor = 2.68; // gCO2 per km
          break;
        case 'cng':
          emissionFactor = 1.91; // gCO2 per km
          break;
        case 'electric':
          emissionFactor = 0; // gCO2 per km for electric vehicles
          break;
        default:
          emissionFactor = 0;
      }
};