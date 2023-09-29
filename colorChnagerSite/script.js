
const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach( (btn)=>{
    btn.addEventListener('click',(e)=>{
        document.body.style.backgroundColor = e.target.id
    })
})