function opoov2(){
	const email = document.getElementById('log_Email');
	const parol = document.getElementById('Parol');
	const pochtareg = localStorage.getItem('pochta')
	const Pasreg = localStorage.getItem('Pas')
	const submitButton = document.getElementById('submit');


	if (email.value.length === 0){
		document.getElementById("opov2").innerHTML="Ошибка! Не заполнено поле “Email“";
		log_Email.style.borderColor='red';
	document.querySelector(".opov2").style.display = "block";
	}
	else if (parol.value.length === 0){
		document.getElementById("opov2").innerHTML="Ошибка! Не заполнено поле “Email“";
		parol.style.borderColor='red';
	document.querySelector(".opov2").style.display = "block";
	} else if (email.value != pochtareg && parol.value != Pasreg) {
		document.getElementById("opov2").innerHTML="Ошибка! Не совпадают данные";
		log_Email.style.borderColor='red';
		document.querySelector(".opov2").style.display = "block";
		parol.style.borderColor='red';
		document.querySelector(".opov2").style.display = "block";
	}
	else if ( email.value.length > 0 &&  parol.value.length > 0) {

	window.location.href='profil.html';

}

}	

	
	