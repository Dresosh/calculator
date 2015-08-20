var buttons = document.querySelectorAll(".button");	


for( i=0 ; i < buttons.length ; i++){
	buttons[i].addEventListener("click", clickBtn);
}



function clickBtn(){
	var btnVal = this.getAttribute("data-value");
	console.log(btnVal)

	
	if(btnVal === 1){
		console.log("this is 1")
	}else{
		console.log("this is not 1")
	}
}

