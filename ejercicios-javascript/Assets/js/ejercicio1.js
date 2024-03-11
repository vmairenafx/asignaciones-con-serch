
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
 let phrase = arr.join(" ");
  return phrase;
}


function showArray(){

    document.getElementById("initial-array").innerHTML = `${arr}`;
    document.getElementById("result").innerHTML = `${printOutString()}`;

}
showArray();

