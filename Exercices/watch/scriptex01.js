var agora = new Date()

var day = window.document.getElementById('day')  
var month = window.document.getElementById('month')
var year = window.document.getElementById('year')  
var hour = window.document.getElementById('hour')
var minutes = window.document.getElementById('minutes')
var seconds = window.document.getElementById('seconds')

day.innerHTML = agora.getDate()+'/ '
month.innerHTML = (Number(agora.getMonth())+1)+'/'
year.innerHTML = agora.getFullYear()
hour.innerHTML = agora.getHours()+':' 

if(agora.getSeconds() < 10 ){
    seconds.innerHTML = '0'+agora.getSeconds()
}else{
    seconds.innerHTML = agora.getSeconds()
}

if(agora.getMinutes() < 10){
    minutes.innerHTML = '0'+agora.getMinutes()+':'
}else{
    minutes.innerHTML = agora.getMinutes()+':'
}


//Reload the page every one minute
window.setTimeout( function() {
    window.location.reload();
}, 900);
