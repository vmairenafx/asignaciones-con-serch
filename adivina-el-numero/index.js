  function startGuessing() {
    let min = 1;
    let max = 100;
    let guess;
  
    while (min <= max) {
      guess = Math.floor((min + max) / 2);
      let confirmed = confirm(`Tu número es: ${guess}?`);
  
      if (confirmed) {
        document.getElementById('result').innerHTML = `<div class="alert alert-success" role="alert">¡Tu número es ${guess}! ¡Excelente elección!</div>`;
        break;
      } else {
        let higher = confirm(`¿Es mayor a: ${guess}?`);
        if (higher) {
          min = guess + 1;
        } else {
          max = guess - 1;
        }
      }
    }
  }
  