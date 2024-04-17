function getValue() {
    	var name = localStorage.getItem("nam");
    document.getElementById("Profil_name").value = name;
    var pochta = localStorage.getItem("pochta");
    document.getElementById("Profil_mail").value = pochta;
   var pas = localStorage.getItem("pas");
    document.getElementById("Profil_pas").value = pas;
     var pas_ast = localStorage.getItem("pas_ast");
    document.getElementById("Profil_Pas_act").value = pas_ast;
  }
  getValue();
  
const Profil_name = document.getElementById('Profil_name');
const Profil_mail = document.getElementById('Profil_mail');
const Profil_pas = document.getElementById('Profil_pas');
const Profil_Pas_act = document.getElementById('Profil_Pas_act');
const block = document.getElementById('block');

const cancel = document.getElementById('Cancel');
const Save = document.getElementById('Save');

Profil_name.addEventListener  ('click', function() {
  block.style.width = '1040px';
  block.style.height = '570px';
  document.querySelector("#Save").style.display = "block";
  document.querySelector("#Cancel").style.display = "block";
});

Profil_mail.addEventListener  ('click', function() {
  block.style.width = '1040px';
  block.style.height = '570px';
  document.querySelector("#Save").style.display = "block";
  document.querySelector("#Cancel").style.display = "block";
});

Profil_pas.addEventListener  ('click', function() {
  block.style.width = '1040px';
  block.style.height = '570px';
  document.querySelector("#Save").style.display = "block";
  document.querySelector("#Cancel").style.display = "block";
});

Profil_Pas_act.addEventListener  ('click', function() {
  block.style.width = '1040px';
  block.style.height = '570px';
  document.querySelector("#Save").style.display = "block";
  document.querySelector("#Cancel").style.display = "block";
});

const nam = document.getElementById('Name');
const pochta = document.getElementById('Email' );
const pas = document.getElementById('Pas' );
const pas_ast = document.getElementById('Pas_act');

cancel.addEventListener  ('click', function() {
	document.querySelector("#Cancel").style.display = "none";
	 document.querySelector("#Save").style.display = "none";
	  block.style.width = '1040px';
  block.style.height = '440px';
});


Save.addEventListener  ('click', function() {

    localStorage.setItem('nam', Profil_name.value);
    localStorage.setItem('pochta', Profil_mail.value);
    localStorage.setItem('pas', Profil_pas.value);
	localStorage.setItem('pas_ast', Profil_Pas_act.value);
	document.querySelector("#Cancel").style.display = "none";
	 document.querySelector("#Save").style.display = "none";
	  block.style.width = '1040px';
  block.style.height = '440px';
});