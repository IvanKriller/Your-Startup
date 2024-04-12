function opoov1(){
var pas = document.getElementById('Parol').value;	
var pochta = document.getElementById('Email').value;
if (pochta == ''){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Email“";
Email.style.borderColor='red';
document.querySelector(".opov1").style.display = "block";
}
else if (pas == ''){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Пароль“";
	Parol.style.borderColor='red';
	document.querySelector(".opov1").style.display = "block";
}
false;
}

