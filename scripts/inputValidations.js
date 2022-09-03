'use strict'
let isValidForm = 0;

const submitBtn = document.querySelector('.submitBtn')

submitBtn.setAttribute('disabled',!isValidForm)

function createError(element) {
    isValidForm++;
    element.classList.add("error");
}

function removeError(element) {
    isValidForm--;
    element.classList.remove("error");
}

const handleOnBlur = (e) => {
    if (!e.value) createError(e)
}

const georgianLettersCheck = (e) => {
    if(!e.value.match(/[ა-ჰ]/)) {
        e.value = '';
        return false
    } 
    return true;
}

const emailValidation = (e) => {
    if(!e.value.endsWith("@redberry.ge") || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value) ) return createError(e)
    removeError(e)
}

const textLengthCheck = (word,element,minLength=2) => {
    if(word.length < minLength) {
        createError(element);
        return false
    } else {
        removeError(element)
        return true
    }
}

const onInputChange = (e) => {
    const value = e.value;
    if(georgianLettersCheck(e)){
        textLengthCheck(value,e)
    }
    
}

const phoneNumberValidation = (e) => {
    let value = e.value
    if(value === '') return createError(e)
    if(value.length === 3 && !value.match(/^(598|551|599|577|514|555)$/)) {
        value = '';
        createError(e)
    } else if(value.match(/^(598|551|599|577|514|555)$/)) {
       removeError(e)
    }
}





submitBtn.addEventListener('click',() => {
    const form = document.querySelector('form')
    const formData = new FormData(form)
    for (let key of formData) {
        console.log(key,formData[key])
    }
    let inputs = document.querySelectorAll('input');
    for (let k of inputs) {
        console.log(k.name,k.value)
    }
}) 