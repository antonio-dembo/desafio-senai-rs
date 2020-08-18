function requestRandomUsers(numberOfUsers) {
  $.ajax({
    url: 'https://randomuser.me/api/?results=' + numberOfUsers,
    dataType: 'json',
    success: function (data) {
      handleRequestResult(data);
    },
    error: function (jqXHR, exception) {
      if (jqXHR.status === 0) {
        alert('Not connect.\n Verify Network.');
      } else if (jqXHR.status == 404) {
        alert('Requested page not found. [404]');
      } else if (jqXHR.status == 500) {
        alert('Internal Server Error [500].');
      } else if (exception === 'parsererror') {
        alert('Requested JSON parse failed.');
      } else if (exception === 'timeout') {
        alert('Time out error.');
      } else if (exception === 'abort') {
        alert('Ajax request aborted.');
      } else {
        alert('Uncaught Error.\n' + jqXHR.responseText);
      }
    }
  });
}

function selecionaUsuario(tagName){
  /* Restaura as configuração dos cards. */
  /*TODO ...*/
  /* Seleciona o card. */
  document.getElementById(tagName).style.background = "#ff5617";
}

function handleRequestResult(data) {
  for ( var i= 0; i < data.results.length; i++){
    let username  = data.results[i].name.first + " " +data.results[i].name.last;
    let userimage = data.results[i].picture.large ;

    document.getElementsByClassName("imagem")[i].src = userimage;
    document.getElementsByClassName("nome")[i].innerHTML= username;
    document.getElementById("card"+(i+1)).style.visibility = "visible";
  }

}

function exibeParticipantes(){
  requestRandomUsers(obterInteiroAleantorio(min =5, max = 15));
}

function obterInteiroAleantorio(min, max){
  return min + Math.floor( Math.random()*(max - min + 1));
}