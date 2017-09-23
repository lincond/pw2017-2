$("#peso").on("change", function(){
    calcula();
});

$("#altura").on("change", function(){
    calcula();
});

$("#sexo").on("change", function(){
    calcula();
});

/*
  Função que calcula o IMC e altera exibe o resultado
  no HTMLs
*/
function calcula()
{
    // Faz a requisição para a página JSP
    $.ajax({
        url: 'imc.jsp',
        method: 'POST',
        data: $('#imc-form').serialize()
    }).done(function(data){
        // Carrega os dados do json 
        imc = data.imc;
        color = data.color;
        condicao = data.condicao;
        // Altera o CSS e o gráfico
        $(".condicao").html(condicao);
        $(".condicao").css('color', color);
        $("#imc").val(imc.toFixed(2)).trigger('change').trigger('configure',{
            'fgColor': color,
            'inputColor': color
        });
    });
}
