let input=document.getElementById('degree');
let from=document.getElementById('unit');
let to=document.getElementById('result-unit');
let convertBtn=document.getElementById('convert');
let result=document.getElementById('result-degree');
let convertTemperature=()=>{
    let degree=parseFloat(input.value);
    let fromUnit=from.value;
    let toUnit=to.value;
    if(fromUnit===toUnit){
        result.value=degree;
    }
    else if(fromUnit==='celsius' && toUnit==='fahrenheit'){
        result.value=(degree*9/5)+32;
    }
    else if(fromUnit==='celsius' && toUnit==='kelvin'){
        result.value=degree+273.15;
    }
    else if(fromUnit==='fahrenheit' && toUnit==='celsius'){
        result.value=(degree-32)*5/9;
    }
    else if(fromUnit==='fahrenheit' && toUnit==='kelvin'){
        result.value=((degree-32)*5/9)+273.15;
    }
    else if(fromUnit==='kelvin' && toUnit==='celsius'){
        result.value=degree-273.15;
    }
    else if(fromUnit==='kelvin' && toUnit==='fahrenheit'){
        result.value=((degree-273.15)*9/5)+32;
    }
    else{
        result.value='Invalid conversion';
    }

}

