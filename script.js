function valorTotal(){
    let Fax1 = document.getElementById("faixa1").value
    let Fax2 = document.getElementById("faixa2").value
    let Fax3 = document.getElementById("faixa3").value
    let Fax4 = document.getElementById("faixa4").value

    let soma = (Fax1 + Fax2)
    let mult = parseInt(soma * Fax3)
    let valMin = parseFloat(mult - (Fax4/100 * mult))
    let valMax = parseFloat(mult + (Fax4/100 * mult))
    let resist = ("O valor da resistência é " + mult + "Ω" + " " + 
    "e o valor da tolerância estará entre " + valMin + "Ω" + " e " + valMax + "Ω")

    document.getElementById("resultado").innerHTML = resist
}
function mudarCor(){
    var Valf1 = document.getElementById("faixa1").value
    var Valf2 = document.getElementById("faixa2").value
    var Valf3 = document.getElementById("faixa3").value
    var Valf4 = document.getElementById("faixa4").value
    
    switch(Valf1){
        case("0"):document.getElementById("Color1").style.backgroundColor = "black"  
        break;
        case("1"):document.getElementById("Color1").style.backgroundColor = "brown"
        break;
        case("2"):document.getElementById("Color1").style.backgroundColor = "red"
        break;
        case("3"):document.getElementById("Color1").style.backgroundColor = "orange"
        break;
        case("4"):document.getElementById("Color1").style.backgroundColor = "yellow"
        break;
        case("5"):document.getElementById("Color1").style.backgroundColor = "green"
        break;
        case("6"):document.getElementById("Color1").style.backgroundColor = "blue"
        break;
        case("7"):document.getElementById("Color1").style.backgroundColor = "violet"
        break;
        case("8"):document.getElementById("Color1").style.backgroundColor = "gray"
        break;
        case("9"):document.getElementById("Color1").style.backgroundColor = "white"
        break;
    }
    switch(Valf2){
        case("0"):document.getElementById("Color2").style.backgroundColor = "black"  
        break;
        case("1"):document.getElementById("Color2").style.backgroundColor = "brown"
        break;
        case("2"):document.getElementById("Color2").style.backgroundColor = "red"
        break;
        case("3"):document.getElementById("Color2").style.backgroundColor = "orange"
        break;
        case("4"):document.getElementById("Color2").style.backgroundColor = "yellow"
        break;
        case("5"):document.getElementById("Color2").style.backgroundColor = "green"
        break;
        case("6"):document.getElementById("Color2").style.backgroundColor = "blue"
        break;
        case("7"):document.getElementById("Color2").style.backgroundColor = "violet"
        break;
        case("8"):document.getElementById("Color2").style.backgroundColor = "gray"
        break;
        case("9"):document.getElementById("Color2").style.backgroundColor = "white"
        break;
    }
    switch(Valf3){
        case("1"):document.getElementById("Color3").style.backgroundColor = "black"  
        break;
        case("10"):document.getElementById("Color3").style.backgroundColor = "brown"
        break;
        case("100"):document.getElementById("Color3").style.backgroundColor = "red"
        break;
        case("1000"):document.getElementById("Color3").style.backgroundColor = "orange"
        break;
        case("10000"):document.getElementById("Color3").style.backgroundColor = "yellow"
        break;
        case("100000"):document.getElementById("Color3").style.backgroundColor = "green"
        break;
        case("1000000"):document.getElementById("Color3").style.backgroundColor = "blue"
        break;
        case("10000000"):document.getElementById("Color3").style.backgroundColor = "violet"
        break;
    }
    switch(Valf4){
        case("5"):document.getElementById("Color4").style.backgroundColor = "gold"
        break;
        case("10"):document.getElementById("Color4").style.backgroundColor = "silver"
        break;
    }
}