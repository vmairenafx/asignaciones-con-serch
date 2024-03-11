const numbers = [10, 50, 100, 150];

const doubles = numbers.map( duplicate => duplicate*2);

function showResults(){
    document.getElementById("initial-array").innerHTML = `${numbers}`;
    document.getElementById("result").innerHTML = `${doubles}`;
}
showResults();


