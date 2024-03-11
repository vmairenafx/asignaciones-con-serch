const arr = [2,4,6,8,10];
const sum = arr.reduce( (accumulator, currentValue) => accumulator + currentValue );
const product = arr.reduce( (accumulator, currentValue) => accumulator * currentValue );

document.getElementById("initial-array").innerHTML= `${arr}`;
document.getElementById("sum-result").innerHTML= `The sum is: ${sum}`;
document.getElementById("product-result").innerHTML= `The multiplication is: ${product}`;
 

