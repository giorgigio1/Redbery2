const georgianLettersCheck = (e) => {
    if(!e.value.match(/[ა-ჰ]/)) {
        e.value = '';
        return false
    } 
    return true;
}

const textLengthCheck = (word,element,minLength=2) => {
    if(word.length < minLength) {
        element.classList.add("error");
        return false
    } else {
        // element.classList.remove("error");
        element.style.border = 'solid 1px #62A1EB';
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
    const value = e.value
    if(value.length === 3 && !value.match(/^(598|551|599|577|514|555)$/)) {
        e.classList.toggle("error")
        e.value = '';
    } else if(value.match(/^(598|551|599|577|514|555)$/)) {
        // e.style.border = 'solid 1px #62A1EB';
        e.classList.remove("error")
    }
}