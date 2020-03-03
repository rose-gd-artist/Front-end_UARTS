// equals.addEventListener("click", function(){
// 	if ( plus sign clicked){
// 		adding()
// 	} else if( minus sign clicked){
// 		subtract()
// 	}
// })               
       

// logic for above - Click on screen 1 enter a number, then click on screen 2 enter a number.
// Click on 1 of 4 math buttons (+, -, *, /), 
// then click = button to calculate answer in screen 3.

// Teacher said I can place the 4 math functions above the result function.
// In the result function use if else statements with arguments within the parentheses.
// Within the curly brackets execute the particular math function to perform the action.



//these are the variables i created


var calcScreen1 = document.getElementById("calcScreen1");

var calcScreen2 = document.getElementById("calcScreen2");

var calcScreen3 = document.getElementById("calcScreen3");

var addition = document.getElementById("add");

var subtract = document.getElementById("subtract");

var multiply = document.getElementById("multiply");

var divide = document.getElementById("divide");

var equals = document.getElementById("equals");

var mathOperators;

addition.addEventListener("click", function () {
	mathOperators = "+"
})

subtract.addEventListener("click", function () {
	mathOperators = "-"
})

multiply.addEventListener("click", function () {
	mathOperators = "*"
})

divide.addEventListener("click", function () {
	mathOperators = "/"
})

equals.addEventListener("click", function () {
	if(mathOperators == "+") {
		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
	} else if (mathOperators == "-") {
		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
	} else if (mathOperators == "*") {
		calcScreen3.innerHTML = (parseInt(calcScreen1.value) * parseInt(calcScreen2.value))
	} else if (mathOperators == "/") {
		calcScreen3.innerHTML = (parseInt(calcScreen1.value) / parseInt(calcScreen2.value))
	} 
})



//////////////////////////


///////////try out after field 1 + operator + field 2 -- result in field 3

//calcScreen3.innerHTML = parseInt(0)

// equals.onclick = function() {mathResult()};

// function mathResult(){
// 	if (addition === addition){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// 	} else if (subtract === subtract) {
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
// 	} else if (multiply === multiply) {
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) * parseInt(calcScreen2.value))
// 	} else if (divide === divide) {
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) / parseInt(calcScreen2.value))
// 	} else {
// 		calcScreen1.innerHTML = "Number 1"; calcScreen2.innerHTML = "Number 2"; calcScreen3.innerHTML = "Result";
// 	}
// }

///////////////////////

// equals.onclick = function() {mathResult()};

// function mathResult(){
// 	if (addition){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// 	} else if (subtract){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
// 	}
// }

/////////////////////

// equals.onclick = function() {mathResult()};

// function mathResult(){
// 	if (addition){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// 	} else if (subtract){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
// 	}
// }


//////////////////////

// equals.onclick = function() {mathResult()};

// function mathResult(){
// 	if (equals === addition){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// 	} else if (subtract){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
// 	}
// }


///////////////////////////


// equals.onclick = function() {addResult(), subtractResult()};

// function addResult(){
// 	var addition = document.getElementById("add");

// 	if (addition){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// 	}
// }

// function subtractResult(){
// 	var subtract = document.getElementById("subtract");

// 	if (subtract){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
// 	}
// }


///////////////////////////////////


// if (addition) {
// 	calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// }

// function addResult(){
// 	var addition = document.getElementById("add");

// 	if (addition){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// 	}
// }

// function subtractResult(){
// 	var subtract = document.getElementById("subtract");

// 	if (subtract){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
// 	}
// }

// function mathResult(){
// 	var addition = document.getElementById("add");

// 	var subtract = document.getElementById("subtract");

// 	var multiply = document.getElementById("multiply");

// 	var divide = document.getElementById("divide");


// 	if (addition){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// 	} else if (subtract){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
// 	}
// }




////////////////////////////////////



// equals.onclick = function() {addResult()};

// function addResult(){
// 	if (addition){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// 	}
// }

// equals.onclick = function() {subtractResult()};

// function subtractResult(){
// 	if (subtract){
// 		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
// 	}
// }

////////////////////////////

// addition.addEventListener("click", function() {
// 	calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// })

// function addFunction(){
// calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// }

/////////////////////////

// equals.addEventListener("click", function(){
// 	if (){
// 		calcScreen3.innerHTML = parseInt(1)
// 	} //else if( minus sign clicked){
// 		//subtract()
// 	//}
// })  

////////////////////////

// add.addEventListener("click", function() {
// 	calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
// }) 







                           
                           




