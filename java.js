<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>JavaScript</title>
</head>
<body>
<button id="clickIt">Click here</button>
<div id="div-id-1">Text strony</div>
<p id="demo"></p>
<div>
Liczba 1 <input type="text" id="liczba1"><br><br> Liczba 2 <input type="text" id="liczba2"><br><br> <button onclick="dodaj ()">DODAJ</button>
<button id="dodaj">DODAJ EventListener</button> <p id="wynik"></p>
</div>
<script>
// alert("Hello world!")
// prompt ("jak masz na imię?")
//console.log("I am console your browser, hello!")
//DOM
document.write("I am function write in DOM")
document.write("<h4>I am function write in DOM</h4>")
//my fuction
function myWrite (myAttribute) {
}
document.write (myAttribute);
myWrite("<h1 class='element-h1'>Hello</h1>");
myWrite("<br>");
myWrite("<p>Wold!</p>");
myWrite("<br>")
let myElement = document.getElementById("div-id-1");
document.getElementById("div-id-1").innerHTML += "<div style='color:blue;'>It is add innerHTML</div>"; document.getElementById("div-id-1") .style.color = "red";
myElement.style. fontSize = "30px";
// varible
let num= 1.45;
let str = "string";
let bool = true; console.log(num); console.log(str); console.log (bool);
//
let firstNum = 17;
let secondNum = 24;
//firstNum = 1000+ firstNum;
firstNum += 100;
console.log (firstNum);
firstNum++;
console.log(firstNum);
firstNum--;
console.log(firstNum);
document.write("Wynik dodawanie: ", firstNum + secondNum, "<br>");
document.write("Wynik reszta z dzielenia: ", firstNum & secondNum, "<br>");
document.write ("Wynik mnożenia: ", firstNum secondNum, "<br>"); document.write ("Wynik dzielenia: ", firstNum / secondNum, "<br>");
// function +
function summ (a, b) {
return a + b;
}
document.write ("Wynik funkcji summ: summ (firstNum, secondNum))
// Listener and function
function myFunction () {
document.getElementById("demo").innerHTML += "We clicked!<br>";
}
document.getElementById("clickIt").addEventListener("click", myFunction)
//onclick="dodaj ()"
function dodaj () {
}
let liczbal=parseInt (document.getElementById("liczbal").value);
let liczba2=parseInt(document.getElementById("liczba2").value); let wynikSum=liczba1+liczba2;
document.getElementById("wynik").innerHTML=wynikSum;
//addEventListener("click", dodajEventListener)
function dodaj EventListener() {
let liczbal=parseInt (document.getElementById("liczbal").value); let liczba2=parseInt (document.getElementById("liczba2").value); let wynikSum=liczbal+liczba2;
document.getElementById("wynik").innerHTML=wynikSum;
}
document.getElementById("dodaj") .addEventListener("click", dodaj EventListener)
</script>
</body> </html>
