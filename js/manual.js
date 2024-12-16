// js/manual.js
const medicines = [];

function addMedicine() {
  const medicineName = document.getElementById("medicineName").value.trim();
  const quantity = parseInt(document.getElementById("quantity").value);

  if (medicineName && quantity > 0) {
    medicines.push({ name: medicineName, quantity });
    updateMedicineList();
    document.getElementById("medicineName").value = "";
    document.getElementById("quantity").value = "";
  } else {
    alert("Please enter valid medicine details!");
  }
}

function updateMedicineList() {
  const medicineList = document.getElementById("medicineList");
  medicineList.innerHTML = medicines
    .map((med, index) => `
      <p>${med.name} - ${med.quantity}
         <button onclick="removeMedicine(${index})">Remove</button>
      </p>`)
    .join("");
}

function removeMedicine(index) {
  medicines.splice(index, 1);
  updateMedicineList();
}

function proceedToCart() {
  if (medicines.length > 0) {
    localStorage.setItem("medicines", JSON.stringify(medicines));
    alert("Medicines added to cart!");
    window.location.href = "cart.html";
  } else {
    alert("Add at least one medicine before proceeding.");
  }
}