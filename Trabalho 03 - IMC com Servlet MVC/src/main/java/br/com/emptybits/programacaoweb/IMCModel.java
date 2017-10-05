/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.emptybits.programacaoweb;

/**
 *
 * @author lincondias
 */
public class IMCModel {
    private String condicao;
    private String color;
    private double imc;
    
    public IMCModel()
    {
        condicao = "Normal";
        color = "#66CC66";
        imc = 0.0;
    }
    
    public double calculaIMC(double altura, double peso, String sexo)
    {
        double imc = peso / (altura*altura);
        
        if ( sexo == "Masculino" )
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
            else{
                color = "#ff4141";
                condicao = "Obeso";
            }
        }
        
        return imc;
    }

    public String getCondicao() {
        return condicao;
    }

    public void setCondicao(String condicao) {
        this.condicao = condicao;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
    
    
}
