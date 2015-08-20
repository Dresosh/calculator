var button = document.querySelectorAll(".button");

for( i=0 ; i < button.length ; i++ ){
	button[i].addEventListener("click", clickKey);
}

function clickKey (){
	var btnVal = this.getAttribute("date-value");
}