// js/main.js
async function fetchMedicineInfo(medicine) {
    const response = await fetch(`https://api.rxnorm.nlm.nih.gov/REST/rxcui/${medicine}/property`);
    const data = await response.json();
    console.log(data);
  }