var divApp = document.querySelector('#form');

var ElementSiape = document.querySelector('#siape');
var ElementName = document.querySelector('#nome');
var ElementTel = document.querySelector('#telefone');
var ElementEmail = document.querySelector('#email');
var ElementPassword = document.querySelector('#senha');
var ElementType = document.querySelector('#tipo');
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
            nome: ElementName.value,
            telefone: parseInt(ElementTel.value),
            email: ElementEmail.value,
            senha: ElementPassword.value,
            tipo: ElementType.value
        }),
    })
    .done(function(data){
        alert(JSON.stringify(data));
    })
    .fail(function(data){
        alert(JSON.stringify(data.responseJSON));
    });
}

