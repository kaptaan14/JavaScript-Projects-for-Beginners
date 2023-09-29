const time = document.querySelector('#time')

setInterval(function(){
    let date = new Date()
    time.innerHTML = `<span>${date.toLocaleTimeString()}</span>`
},1000)

