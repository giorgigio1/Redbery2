    let fname = document.getElementById('fName')
    let lName = document.getElementById('lName')
    let email = document.getElementById('email')
    let phone = document.getElementById('phone')

    let error = 0

    const fnameCheck = (elementName, elElementName, element)=>{
        let empty = document.getElementById(elementName)
        let length = document.getElementById(elElementName)
        if (element.value.length === 0) {
            empty.classList.remove('d-none')
            length.classList.add('d-none')
            element.classList.add('border-danger')
            error = 1
        }   
        else if (element.value.length < 3) {
            element.classList.add('border-danger')
            length.classList.remove('d-none')
            empty.classList.add('d-none')
            error = 2
        }
        else{
            element.classList.remove('border-danger')
            length.classList.add('d-none')
            error = 0
        }
    }
    
    fname.addEventListener('keyup', () => fnameCheck('errMsgEmp', 'errMsgLng', fname))
    lName.addEventListener('keyup',() => fnameCheck('lErrMsgEmp', 'lErrMsgLng', lName))


    const emailValidation = ()=>{
        let empty = document.getElementById('eErrMsgEmp')
        let format = document.getElementById('eErrMsgFrm')
        if (email.value.length === 0) {
            empty.classList.remove('d-none')
            format.classList.add('d-none')
            email.classList.add('border-danger')
            error = 1
        }   
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            email.classList.add('border-danger')
            format.classList.remove('d-none')
            empty.classList.add('d-none')
            error = 2
        }
        else{
            email.classList.remove('border-danger')
            format.classList.add('d-none')
            error = 0
        }
    }
    email.addEventListener('keyup', emailValidation)


    const phoneValidation = ()=>{
        let regex = /^\+9955\d\d\d\d\d\d\d\d$/i;
        let format = document.getElementById('pErrMsg')
        if (!regex.test(phone.value)) {
            phone.classList.add('border-danger')
            format.classList.remove('d-none')
            error = 1
        }
        else{
            phone.classList.remove('border-danger')
            format.classList.add('d-none')
            error = 0
        }
    }
    phone.addEventListener('keyup', phoneValidation)


    const nextPage = document.querySelector('.page2')
    nextPage.addEventListener('click', () => {
        fnameCheck('errMsgEmp', 'errMsgLng', fname)
        fnameCheck('lErrMsgEmp', 'lErrMsgLng', lName)
        emailValidation()
        phoneValidation()
        if (error === 0) {
            sessionStorage.setItem('firstName', fName.value)
            sessionStorage.setItem('lastname', lName.value)
            sessionStorage.setItem('email', email.value)
            sessionStorage.setItem('phone', phone.value)
            window.location = 'technicalSkillset.html'
        }
        else {
            alert('please input valid fields')
        }
    })

    const next = document.querySelector('.next')
    next.addEventListener('click', (e) => {
        fnameCheck('errMsgEmp', 'errMsgLng', fname)
        fnameCheck('lErrMsgEmp', 'lErrMsgLng', lName)
        emailValidation()
        phoneValidation()
        if (error === 0) {
            sessionStorage.setItem('firstName', fName.value)
            sessionStorage.setItem('lastname', lName.value)
            sessionStorage.setItem('email', email.value)
            sessionStorage.setItem('phone', phone.value)
            window.location = 'technicalSkillset.html'
        }
        else {
            alert('please input valid fields')
        }
    })










    // function s() {
    //     sessionStorage.setItem('gio', '1993');
       
    //     // Get saved data from sessionStorage
      
    // }
    // let data = sessionStorage.getItem('gio');
        
    // console.log(data)
    
    
    // document.getElementById('btn').addEventListener('click', () => {
    //     s()
    // });