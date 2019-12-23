var divApp = document.querySelector('#form');

var ElementSiape = document.querySelector('#siape');
var ElementPassword = document.querySelector('#senha');
var elementBtnEnviarDados = document.querySelector('#enviarDados');

elementBtnEnviarDados.onclick = function(){
    $.ajax({
        url: "http://localhost:3333/funcionarios",
        method: "POST",
        contentType: "application/json",
        crossDomain: true,
        dataType: "json",
        data: JSON.stringify({
            siape: parseInt(ElementSiape.value),
            senha: ElementPassword.value,
        }),
    })
    .done(function(data){
        alert(JSON.stringify(data));
    })
    .fail(function(data){
        alert(JSON.stringify(data.responseJSON));
    });
}

