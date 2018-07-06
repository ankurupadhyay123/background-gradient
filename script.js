var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function displayGradientProperty() {
	console.log("sfdfdfd");
	css.textContent = body.style.background + ";";	
}

function generateRandomColor() {
	color1Value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	color2Value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

	color1.value = color1Value;
	color2.value = color2Value;
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandomColor);

window.onload = function() {
	setGradient();
}