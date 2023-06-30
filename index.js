//Поля ввода 
let firstinput = document.queryselector('calculator-input-first')
let senondinput = document.queryselector('calculator-input-second')

//значения
let firstvalue = firstinput.value;
let secondvalue = secondinput.value;
let result = 0;

//кнопки
let buttonplus = document.queryselector(.'calculator-plus')
let buttonminus = document.queryselector(.'calculator-minus')
let buttonmultiply = document.queryselector(.'calculator-multiply')
let buttondevide = document.queryselector(.'calculator-devide')
let buttonequels = document.queryselector('.calculator-equals')

//действия
buttonplus.addEventListener('click', ()=> {
    let firstvalue = firstinput.value;
    let secondvalue = secondinput.value;
    result = Number(firstvalue) + Number(secondvalue);
})
buttonminus.addEventListener('click', ()=> {
    let firstvalue = firstinput.value;
    let secondvalue = secondinput.value;

    result = Number(firstvalue) - Number(secondvalue); 
})
buttonmultiply.addEventListener('click', ()=> {
    let firstvalue = firstinput.value;
    let secondvalue = secondinput.value;

    result = firstvalue * secondvalue;
})
buttondevide.addEventListener('click', ()=> {
    let firstvalue = firstinput.value;
    let secondvalue = secondinput.value;

    result = firstvalue / secondvalue;
})
buttonEquels.addEventListener('click', () => {
     alert(result)
})