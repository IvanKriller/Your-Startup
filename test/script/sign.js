
countDown(3, "status");

function countDown(sec, elem) {
  var intervalId = undefined;
  var intervalId = setInterval(function(){ 
    var element = document.getElementById(elem);
    element.innerHTML = "Повторно через " + sec + "s";
    
    if (sec < 1) {
      clearInterval(intervalId);
      element.innerHTML = '<a href=" " title="Отправить повторно">Отправить повторно</a>';
    }

    sec--;
  }, 1000);
}





{

var count=30;
var counter=setInterval(timer, 1000); 
var txt = 'Отправить повторно';
function timer(){
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
	 return;
  }
document.getElementById("timer").innerHTML=count + " сек.";
}
}