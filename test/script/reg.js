function opoov1(){

		const nam = document.getElementById('Name');
const pochta = document.getElementById('Email' );
const pas = document.getElementById('Pas' );
const pas_ast = document.getElementById('Pas_act');

const submitButton = document.getElementById('submit');


if (nam.value.length === 0){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Имя“";
Name.style.borderColor='red';
document.querySelector(".opov1").style.display = "block";
}
else if (pochta.value.length === 0){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Почта“";
	Email.style.borderColor='red';
	document.querySelector(".opov1").style.display = "block";
}
else if (pas.value.length === 0){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Пароль“";
	Pas.style.borderColor='red';
	document.querySelector(".opov1").style.display = "block";
}

else if (pas_ast.value.length === 0){
	document.getElementById("opov1").innerHTML="Ошибка! Не заполнено поле “Повтор пароля“";
	Pas_act.style.borderColor='red';
	document.querySelector(".opov1").style.display = "block";
}
 else if (pas.value != pas_ast.value)
{
	document.getElementById("opov1").innerHTML="Ошибка! Не совпадают “Повтор пароля“ и поле “Пароль“";
	Pas_act.style.borderColor='red';
	document.querySelector(".opov1").style.display = "block";
	Pas.style.borderColor='red';
	document.querySelector(".opov1").style.display = "block";
}
else if (nam.value.length > 0 && pochta.value.length > 0 && pas.value.length > 0 && pas_ast.value.length > 0) {

    localStorage.setItem('nam', nam.value);
    localStorage.setItem('pochta', pochta.value);
    localStorage.setItem('pas', pas.value);
	localStorage.setItem('pas_ast', pas_ast.value);
	window.location.href='pocta.html';

}
}

