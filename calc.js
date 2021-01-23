"use strict";
//getElementByIdでHTMLから要素をもらう
let result = document.getElementById("result");
function calAdd(elem) 
{
  let rnd=Math.random();
  
  result.value = result.value + elem.value;
}
function calc() {
  result.value = new Function("return " + result.value)();
}

function calMind(elem)
{

}