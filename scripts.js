window.onload = function() {

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var firstNumber = [];
var secondNumber = [];
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var clear = document.getElementById('clear');
var display = document.getElementById('display');
var adding = false;
var subtracting = false;
var multiplying = false;
var dividing = false;
var equals = document.getElementById('equals');

clear.onclick = function() {
	firstNumber = [];
	secondNumber = [];
	display.innerHTML = " ";
	adding = false;
	subtracting = false;
	multiplying = false;
	dividing = false;
	
};
one.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(1);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 1;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(1);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 1;
	} else {
		return nil;
	}
	
};

two.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(2);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 2;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(2);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 2;
	} else {
		return nil;
	}
};

three.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(3);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 3;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(3);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 3;
	} else {
		return nil;
	}
};

four.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(4);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 4;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(4);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 4;
	} else {
		return nil;
	}
};

five.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(5);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 5;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(5);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 5;
	} else {
		return nil;
	}
};

six.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(6);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 6;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(6);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 6;
	} else {
		return nil;
	}
};

seven.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(7);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 7;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(7);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 7;
	} else {
		return nil;
	}
};

eight.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(8);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 8;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(8);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 8;
	} else {
		return nil;
	}
};

nine.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(9);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 9;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(9);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 9;
	} else {
		return nil;
	}
};

zero.onclick = function() {
	if ((adding == false) && (multiplying == false) && (dividing == false) && (subtracting == false)) {
	firstNumber.push(0);
	var firstN = firstNumber.join('');
	console.log(firstN);
	display.innerHTML = display.innerHTML + 0;
	} else if ((adding == true) || (multiplying == true) || (dividing == true) || (subtracting == true)) {
		secondNumber.push(0);
		var secondN = secondNumber.join('');
		console.log(secondN);
		display.innerHTML = display.innerHTML + 0;
	} else {
		return nil;
	}
};

add.onclick = function() {
	adding = true;
	multiplying = false;
	subtracting = false;
	dividing = false;	
	display.innerHTML = "+";
	
	
		
};

multiply.onclick = function() {
	multiplying = true;
	adding = false;
	subtracting = false;
	dividing = false;
	display.innerHTML = "X";
};

subtract.onclick = function() {
	subtracting = true;
	adding = false;
	dividing = false;
	multiplying = false;
	display.innerHTML = "-";
};

divide.onclick = function() {
	dividing = true;
	subtracting = false;
	multiplying = false;
	adding = false;
	display.innerHTML = "/";
};

equals.onclick = function() {
	var firstN = firstNumber.join('');
	var secondN = secondNumber.join('');
	if (adding == true) {
	display.innerHTML = parseInt(firstN) + parseInt(secondN);
	} else if (subtracting == true) {
		display.innerHTML = parseInt(firstN) - parseInt(secondN);
	} else if (multiplying == true) {
		display.innerHTML = parseInt(firstN) * parseInt(secondN);
	} else if (dividing == true) {
		display.innerHTML = parseInt(firstN) / parseInt(secondN);
	} else {
		display.innerHTML = "error";
	};
};
	 







};