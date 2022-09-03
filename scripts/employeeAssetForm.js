const employeeInfoBtn = document.querySelector('.employeeInfoBtn');
const laptopInfoBtn = document.querySelector('.laptopInfoBtn');
const workerInfoSection = document.querySelector('.workerInfo');
const laptopInfoSection = document.querySelector('.laptopInfo');

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



