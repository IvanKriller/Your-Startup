	
function getValue() {
    var name = localStorage.getItem("nam");
    document.getElementById("Profil_name").value = name;
    var name = localStorage.getItem("pochta");
    document.getElementById("Profil_mail").value = name;
    var name = localStorage.getItem("pas");
    document.getElementById("Profil_pas").value = name;
    var name = localStorage.getItem("pas_ast");
    document.getElementById("Profil_Pas_act").value = name;
  }
  getValue();