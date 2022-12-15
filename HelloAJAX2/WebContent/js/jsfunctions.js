function showHello(str){
	var request = new XMLHttpRequest() // NON PER IE
	//request = ActiveXObject() //per Explorer
	request.onreadystatechange = function (){
		if(this.readyState == 4 && this.status == 200){
			console.log(request.responseText);
		}
	}
	request.open("GET","saluto?user="+str, true); // Setto la chiamata al server
	request.send(); //Invio della richiesta
}