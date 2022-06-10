var agora = new Date()

var day = window.document.getElementById('day')  
var month = window.document.getElementById('month')
var year = window.document.getElementById('year')  
var hour = window.document.getElementById('hour')
var minutes = window.document.getElementById('minutes')

day.innerHTML = agora.getDate()+'/ '
month.innerHTML = (Number(agora.getMonth())+1)+'/'
year.innerHTML = agora.getFullYear()
hour.innerHTML = agora.getHours()+':' 

if(agora.getMinutes() < 10){
    minutes.innerHTML = '0'+agora.getMinutes()
}else{
    minutes.innerHTML = agora.getMinutes()
}

