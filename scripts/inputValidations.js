'use strict'

//import { link, TOKEN } from "./insidePage";

const TOKEN = "74ea4b4838e06ef711d91d28f868619b";

const link = 'https://pcfy.redberryinternship.ge';

let isValidForm = false;

const submitBtn = document.querySelector('.submitBtn')

// submitBtn.setAttribute('disabled',!isValidForm)

function createError(element) {

    element.classList.add("error");
}

function removeError(element) {
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
    if(value.match(/^(\+?995)(79\d{7}|5\d{8})$/)) {
       removeError(e)
    }
    else{
        createError(e)
    }
}





submitBtn.addEventListener('click',() => {
    const form = document.querySelector('form')
    const formData = new FormData(form)
    formData.append("token",TOKEN)
    for (let data of formData) {
      const [key,value] = data
        if(value === '') {
            isValidForm = true;
            return;
        };

    }
    if(!isValidForm) {
        fetch(link + '/api/laptop/create', {
            method: 'POST',
            body: formData
        }).then(res => window.location.href='successful.html')
        .catch(() => alert("errroror"))
    }
}) 


function selectValidation(element) {
    element.value === element.firstElementChild.value ? element.className = 'error' : element.className = ''
}