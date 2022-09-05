const employeeInfoBtn = document.querySelector('.employeeInfoBtn');
const laptopInfoBtn = document.querySelector('.laptopInfoBtn');
const workerInfoSection = document.querySelector('.workerInfo');
const laptopInfoSection = document.querySelector('.laptopInfo');
const nextPage = document.querySelector('.nextPage');
const back = document.querySelector('.back');

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

nextPage.addEventListener('click', (e) => {
    e.preventDefault()
    switchActiveTab()
    document.getElementById('tab').innerText='2/2'
    workerInfoSection.style.display = 'none';
    laptopInfoSection.style.display = 'block';
})

back.addEventListener('click', (e) => {
    e.preventDefault()
    switchActiveTab("employee")
    document.getElementById('tab').innerText='1/2'

    laptopInfoSection.style.display = 'none'
    workerInfoSection.style.display = 'block';
})

let backArr = document.querySelectorAll('.arrow')
backArr.forEach(b => {
    b.addEventListener('click', e => {
  e.preventDefault()
  window.location.href = 'landing.html'
})
});


