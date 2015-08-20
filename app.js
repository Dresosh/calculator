var buttons = document.querySelectorAll(".button");	
var readout = document.querySelector("#display");

var calculation = [];

for( i=0 ; i < buttons.length ; i++){
	buttons[i].addEventListener("click", clickBtn);
}

function clickBtn(){
	var btnVal = this.getAttribute("data-value");

	if(this.getAttribute("data-type") == 'number') {
		readout.innerText += btnVal;
	}

	if(this.getAttribute("data-type") == 'operator') {
		calculation.push(eval(readout.innerText));

		readout.innerText = '';
		//console.log(calculation)
	}

	if(this.getAttribute("data-type") == 'evaluator') {
		if(readout.innerText != ''){
			calculation.push(eval(readout.innerText));
		}
		var result = 1;
		for(var i = 0; i < calculation.length; i ++) {
			result += calculation[i];
		}
		readout.innerText = result;
	}
}


function add(val1,val2) {
	return val1 + val2;
}


console.log(5 == '5');
