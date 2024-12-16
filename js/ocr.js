// js/ocr.js
document.getElementById("uploadForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const file = document.getElementById("prescriptionFile").files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = async function () {
        const base64Image = reader.result.split(',')[1];
  
        // OCR API call (replace with your API endpoint)
        const response = await fetch("https://api.ocr.space/parse/image", {
          method: "POST",
          headers: {
            "apikey": "YOUR_API_KEY",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            base64Image: `data:image/png;base64,${base64Image}`,
            isOverlayRequired: false
          })
        });
  
        const result = await response.json();
        const medicines = result.ParsedResults[0].ParsedText.split("\n");
        document.getElementById("results").innerHTML = medicines
          .map(medicine => `<p>${medicine}</p>`)
          .join("");
      };
      reader.readAsDataURL(file);
    }
  });