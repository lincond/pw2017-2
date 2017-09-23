<%-- 
    Document   : imc.jsp
    Created on : 22/09/2017, 19:39:09
    Author     : lincondias
--%>

<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%@page import="org.json.simple.JSONObject"%>
<%
    JSONObject json = new JSONObject();
    String s_altura = request.getParameter("altura");
    String s_peso = request.getParameter("peso");
    String s_sexo = request.getParameter("sexo");
    
    if ( s_altura == null || s_peso == null || s_sexo == null )
    {
        json.put("imc", 0);
        json.put("condicao", "Normal");
        json.put("color", "#66CC66");
        out.print(json);
        out.flush();
    }
    else
    {
        double altura = Double.parseDouble(s_altura);
        double peso = Double.parseDouble(s_peso);
        String color = "#66CC66", condicao = "Normal";
        
        double imc = peso / (altura*altura);
        
        if ( s_sexo == "Masculino" )
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
        
        json.put("imc", imc);
        json.put("condicao", condicao);
        json.put("color", color);
        out.print(json);
        out.flush();
    }
%>
