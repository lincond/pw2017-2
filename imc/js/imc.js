$("#peso").on("change", function(){
    calcula();
});

$("#altura").on("change", function(){
    calcula();
});

$("#sexo").on("change", function(){
    calcula();
});

function calcula()
{
    var altura = $("#altura").val();
    var peso   = $("#peso").val();
    var sexo   = $("#sexo").val();

    var imc = peso / (altura * altura); 
        
    if ( sexo == "Masculino")
    {
        if (imc < 20.7)
            $(".condicao").html("Abaixo do peso");
        else if( imc >= 20.7 && imc < 26.4 )
            $(".condicao").html("Normal");
        else if( imc >= 26.4 && imc < 27.8 )
            $(".condicao").html("Pouco acima do peso");
        else if( imc >= 27.8 && imc < 31.1 )
            $(".condicao").html("Acima do peso");
        else
            $(".condicao").html("Obeso");
    }
    else
    {
        if (imc < 19.1)
            $(".condicao").html("Abaixo do peso");
        else if( imc >= 19.1 && imc < 25.8 )
            $(".condicao").html("Normal");
        else if( imc >= 25.8 && imc < 27.3 )
            $(".condicao").html("Pouco acima do peso");
        else if( imc >= 27.3 && imc < 32.3 )
            $(".condicao").html("Acima do peso");
        else
            $(".condicao").html("Obeso");
    }

    $("#imc").val(imc.toFixed(2)).trigger('change');
}