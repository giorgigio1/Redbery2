const employeeInfoBtn = document.querySelector('.employeeInfoBtn');
const laptopInfoBtn = document.querySelector('.laptopInfoBtn');
const workerInfoSection = document.querySelector('.workerInfo');
const laptopInfoSection = document.querySelector('.laptopInfo');
const submitBtn = document.querySelector('.submitBtn')
let isValidForm = false;
submitBtn.setAttribute('disabled',!isValidForm)

const switchActiveTab = (tabName) => {
    if(tabName){
        employeeInfoBtn.classList.add('active')
        laptopInfoBtn.classList.remove('active')
    } else {
        employeeInfoBtn.classList.remove('active')
        laptopInfoBtn.classList.add('active')
    }
}

employeeInfoBtn.addEventListener('click', () => {
    switchActiveTab("employee")
    laptopInfoSection.style.display = 'none'
    workerInfoSection.style.display = 'block';
})

laptopInfoBtn.addEventListener('click', () => {
    switchActiveTab()
    workerInfoSection.style.display = 'none';
    laptopInfoSection.style.display = 'block';
})

submitBtn.addEventListener('click',() => {
    const form = document.querySelector('form')
    const formData = new FormData(form)
    console.log("is here")
    for (let key of formData) {
        console.log(key,formData[key])
    }
    let inputs = document.querySelectorAll('input');
    console.log(inputs)
    for (let k of inputs) {
        console.log(k.name,k.value)
    }
}) 

