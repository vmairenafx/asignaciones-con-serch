function getPeople(done) {
  const results = fetch("https://reqres.in/api/users?delay=3");

  results
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

function showPeople() {
  let spinner = document.getElementById("spinner");
  let dataContainer = document.querySelector("main");

  const storedData = JSON.parse(localStorage.getItem("storedData"));
  const storedTime = localStorage.getItem("storedTime");

  //Valida que la info almacenada en el local storage su tiempo sea menor a 1 minuto
  if (storedData && storedTime && Date.now() - storedTime < 60000) {
    const timeLeft = Math.ceil((60000 - (Date.now() - storedTime)) / 1000);
    alert(
      `Datos obtenidos del almacenamiento local. Quedan ${timeLeft} segundos.`
    );
    dataContainer.innerHTML = "";
    // Mostrar las tarjetas desde el almacenamiento local sin mostrar el spinner
    displayStoredData(dataContainer, storedData);
  } else {
    // Mostrar el spinner mientras se obtienen los datos
    spinner.style.display = "flex";
    setTimeout(() => {
      spinner.style.display = "none";
    }, 3500);
    localStorage.removeItem("storedData"); // Elimina los datos del localStorage al transcurrir el tiempo
    localStorage.removeItem("storedTime");
    dataContainer.innerHTML = ""; // Limpia el contenedor antes de agregar nuevas tarjetas

    getPeople((data) => {
      data.data.forEach((person) => {
        const article = document.createRange().createContextualFragment(`
                  <article class="card m-3 bg-dark border border-3 border-light" style="width: 18rem;">
                      <img src="${person.avatar}" class="card-img-top rounded-circle border border-4 border-light m-2" alt="persona">
                      <div class="card-body">
                          <h5 class="card-title text-white">${person.first_name} ${person.last_name}</h5>
                          <p class="card-text text-white">${person.email}.</p>
                      </div>
                  </article>
              `);
        dataContainer.append(article);
      });

      // Guardar datos en el localStorage
      localStorage.setItem("storedData", JSON.stringify(data.data));
      localStorage.setItem("storedTime", Date.now());
    });
  }
}

function displayStoredData(container, data) {
  data.forEach((person) => {
    const article = document.createRange().createContextualFragment(`
      <article class="card m-3 bg-dark border border-3 border-light" style="width: 18rem;">
      <img src="${person.avatar}" class="card-img-top rounded-circle border border-4 border-light m-2" alt="persona">
      <div class="card-body">
          <h5 class="card-title text-white">${person.first_name} ${person.last_name}</h5>
          <p class="card-text text-white">${person.email}.</p>
      </div>
  </article>
      `);
    container.append(article);
  });
}
