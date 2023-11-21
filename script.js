document.addEventListener("DOMContentLoaded", function() {
    const tipoSeguro = document.getElementById("tipoSeguro");
    const valorMostrado = document.getElementById("valorMostrado");
  
    tipoSeguro.addEventListener("change", function() {
      switch (tipoSeguro.value) {
        case "basico":
          valorMostrado.textContent = "500";
          break;
        case "intermedio":
          valorMostrado.textContent = "1000";
          break;
        case "premium":
          valorMostrado.textContent = "1500";
          break;
        default:
          valorMostrado.textContent = "500";
      }
    });
  });
  