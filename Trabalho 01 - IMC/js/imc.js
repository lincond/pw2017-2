$("#peso").on("change focus focusin focusout click keyup", function(){
    calcula();
});

$("#altura").on("change focus focusin focusout click keyup", function(){
    calcula();
});

$("#sexo").on("change focus focusin focusout click", function(){
    calcula();
});

/*
  Função que calcula o IMC e altera exibe o resultado
  no HTMLs
*/
function calcula()
{
    var altura = $("#altura").val();
    var peso   = $("#peso").val();
    var sexo   = $("#sexo").val();

    var imc = peso / (altura * altura);

    var color = "#ffc642";
    var condicao = "Normal";

    if ( sexo == "Masculino")
    {
        if (imc < 20.7) {
            color = "#ffc642";
            condicao = "Abaixo do peso";
        }
        else if( imc >= 20.7 && imc < 26.4 ) {
            color = "#66CC66";
            condicao = "Normal";
        }
        else if( imc >= 26.4 && imc < 27.8 ) {
            color = "#ffe241";
            condicao = "Pouco acima do peso";
        }
        else if( imc >= 27.8 && imc < 31.1 ) {
            color = "#ffc642";
            condicao = "Acima do peso";
        }
        else {
            color = "#ff4141";
            condicao = "Obeso";
        }
    }
    else
    {
        if (imc < 19.1) {
            color = "#ffc642";
            condicao = "Abaixo do peso";
        }
        else if( imc >= 19.1 && imc < 25.8 ) {
            color = "#66CC66";
            condicao = "Normal";
        }
        else if( imc >= 25.8 && imc < 27.3 ) {
            color = "#ffe241";
            condicao = "Pouco acima do peso";
        }
        else if( imc >= 27.3 && imc < 32.3 ){
            color = "#ffc642";
            condicao = "Acima do peso";
        }
        else
        {
            color = "#ff4141";
            condicao = "Obeso";
        }
    }

    // Altera o CSS e o gráfico
    $(".condicao").html(condicao);
    $(".condicao").css('color', color);
    $("#imc").val(imc.toFixed(2)).trigger('change').trigger('configure',{
        'fgColor': color,
        'inputColor': color
    });
}
