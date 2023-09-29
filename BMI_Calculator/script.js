



let form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    let result = document.querySelector('#result')

    if(height == '' || height<0 || isNaN(height)){
        result.innerHTML = `<span>Please enter valid height.</span>`
    } else if(weight == '' || weight<0 || isNaN(weight)){
        result.innerHTML = `<span>Please enter valid weight.</span>`
    }
    else{
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span?`
    }

})


