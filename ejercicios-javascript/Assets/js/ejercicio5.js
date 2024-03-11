let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

document.getElementById("initial-array").innerHTML = `${people}`;

function showArray (arr){
     document.getElementById("result-1").innerHTML = `Final Array: ${arr}`;
}

// Print all people
console.log(people);

// Remove "Dani" from the array
people.splice(people.indexOf("Dani"), 1);

// Remove "Juan" from the array
people.splice(people.indexOf("Juan"), 1);

// Move "Luis" to the front of the array
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

// Add your name to the end of the array
people.push("Victor");

// Using a loop, iterate through the array and exit after console.log "Maria"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}
showArray(people.join(", "));

// Get the indexOf where "Maria" is located
console.log(people.indexOf("Maria"));
