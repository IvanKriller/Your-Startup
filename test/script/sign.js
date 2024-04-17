
countDown(30, "status");

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

