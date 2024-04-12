function opoov1(){
var nam = document.getElementById('Name').value;	
var pochta = document.getElementById('Email').value;
var pas = document.getElementById('Pas').value;	
var pas_ast = document.getElementById('Pas_act').value;

if (nam == ''){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Имя“";
Name.style.borderColor='red';
document.querySelector(".opov1").style.display = "block";
}

else if (pochta == ''){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Почта“";
	Email.style.borderColor='red';
	document.querySelector(".opov1").style.display = "block";
}

else if (pas == ''){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Пароль“";
	Pas.style.borderColor='red';
	document.querySelector(".opov1").style.display = "block";
}

else if (pas_ast == ''){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Повтор пароля“";
	Pas_act.style.borderColor='red';
	document.querySelector(".opov1").style.display = "block";
}
false;
}



var Name = document.getElementById('Name');	
var Email = document.getElementById('Email');
var Pas = document.getElementById('Pas');	
var Pas_act = document.getElementById('Pas_act');

function store() {
    localStorage.setItem('Name', Name.value);
    localStorage.setItem('Email', Email.value);
	 localStorage.setItem('Pas', Pas.value);
	  localStorage.setItem('Pas_act', Pas_act.value);
}


