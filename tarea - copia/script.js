function calculate() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
  
    for (let i = 1; i <= 5; i++) {
      let result;
      switch (i) {
        case 1:
          result = numero1 + numero2;
          resultsDiv.innerHTML += `En la iteración 1: SUMA = ${result}<br>`;
          break;
        case 2:
          result = numero1 - numero2;
          resultsDiv.innerHTML += `En la iteración 2: RESTA = ${result}<br>`;
          break;
        case 3:
          result = numero1 * numero2;
          resultsDiv.innerHTML += `En la iteración 3: MULTIPLICACIÓN = ${result}<br>`;
          break;
        case 4:
          if (numero2 !== 0) {
            result = numero1 / numero2;
            resultsDiv.innerHTML += `En la iteración 4: DIVISIÓN = ${result}<br>`;
          } else {
            resultsDiv.innerHTML += `En la iteración 4: No es posible dividir por 0<br>`;
          }
          break;
        case 5:
          result = numero1 % numero2;
          resultsDiv.innerHTML += `En la iteración 5: MOD(%) = ${result}<br>`;
          break;
        default:
          break;
      }
    }
  }
  
  