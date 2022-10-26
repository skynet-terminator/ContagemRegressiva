//let days_input = document.getElementById('days_info')
//let hours_input = document.getElementById('hours_info')
//let mins_input = document.getElementById('mins_info')
//let secs_input = document.getElementById('secs_info')
//let btn = document.querySelector('#btn')

//let times = {
//    day: Number(days_input.value),
//    hour:Number(hours_input.value),
//    min: Number(mins_input.value),
//    sec: Number(secs_input.value)
//}
//let addValue = () => {
 //   times.day = Number(days_input.value)
 //   times.hour = Number(hours_input.value)
 //   times.min = Number(mins_input.value)
 //   times.sec = Number(secs_input.value)
//    if (times.day == null) {
//        times.day = 0
//    }
//}



//console.log(times.day)

//btn.addEventListener('click', addValue)

let btn = document.getElementById('btn')
let days_input = document.getElementById('days_info')
let hours_input = document.getElementById('hours_info')
let mins_input = document.getElementById('mins_info')
let secs_input = document.getElementById('secs_info')
let days = 0
let hours= 0
let mins = 0
let secs = 0
let all_secs = 0
let interval

function add0 (value) {
    //value <10? '0'+value:value == value;
    if (value < 10){
        return '0'+value;
    }
    else {
        return value;
    }
}
//catchValue vai pegar o valor digitado no formulário ao clicar
function catchValue () {
    all_secs=0
    days_input.value != "" && isNaN(Number(days_input.value)) == false? days = Number(days_input.value):days = 0;
    hours_input.value != "" && isNaN(Number(hours_input.value)) == false? hours = Number(hours_input.value):hours = 0;
    mins_input.value != "" && isNaN(Number(mins_input.value)) == false? mins = Number(mins_input.value):mins = 0;
    secs_input.value != "" && isNaN(Number(secs_input.value)) == false? secs = Number(secs_input.value):secs = 0;
    clearInterval(interval)   
}

//somaSecs irá converter os valores de dias horas e minutos em segundos e somar o total de segundo que irá servir como condição para a contagem
//quando o total de segundo chegar a zero, a contagem irá acabar
function somaSecs () {
    days > 0? all_secs += days*(24*60*60): all_secs += 0;
    hours > 0? all_secs += hours*(60*60): all_secs += 0;
    mins > 0? all_secs += mins*(60): all_secs += 0;
    secs > 0? all_secs += secs: all_secs += 0;
}

function decrementTime () {
    all_secs--
    if (all_secs >= 0) {
        secs--
        if (secs < 0) {
            secs= 59
            mins--
            if (mins < 0) {
                mins = 59
                hours--
                if(hours <0){
                    hours=23
                    days--
                }
            }

        }
    }
    if (all_secs < 0){
        clearInterval(interval)
        all_secs = 0
    }
    document.getElementById('secs').innerText = `${add0(secs)}`
    document.getElementById('mins').innerText = `${add0(mins)}`
    document.getElementById('hours').innerText = `${add0(hours)}`
    document.getElementById('days').innerText = `${add0(days)}`
}

function callFuncs () {
    somaSecs();
    document.getElementById('secs').innerText = `${add0(secs)}`
    document.getElementById('mins').innerText = `${add0(mins)}`
    document.getElementById('hours').innerText = `${add0(hours)}`
    document.getElementById('days').innerText = `${add0(days)}`
    
    interval = setInterval(decrementTime,1000)
}
btn.addEventListener('click', catchValue)
btn.addEventListener('click', callFuncs)
