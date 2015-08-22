var button = document.querySelectorAll(".button");
var display = document.querySelector("#display");
var memory = [];

for( var i = 0 ; i < button.length ; i++ ){
	button[i].addEventListener("click", clickKey);
}

function clickKey (){
	var btnVal = this.getAttribute("data-value");
	// console.log(btnVal);
	if (this.getAttribute("data-type") == "operator") {
		// console.log("NUMBER")
		display.innerText += btnVal;
	}

	if (this.getAttribute("data-type") == "evaluator") {
		// console.log("EVALUATE")
		display.innerText = eval(display.innerText)
		// clearDispl();		
	};

	if(this.getAttribute("data-type") == "clear") {
		// console.log("CLEAR")
		clearDispl();
	}

	if(this.getAttribute("data-type") == "sqrt") {
		memory.push(display.innerText);
		var x = memory.pop();
		// console.log("x is " + x);
		display.innerText = Math.sqrt(x);
	}
}


function clearDispl(){
	display.innerText = "";
}