let brandSection = document.querySelector('.brandSection');
let cpuProducts = document.querySelector('.cpuProducts');

fetchBrandSection()
fetchcpuProducts()

function fetchBrandSection() {
    window.fetch('https://pcfy.redberryinternship.ge/api/brands').then(res => res.json()).then(result => {
        result.data.forEach(brand => {
                    let option = document.createElement('option')
                    option.setAttribute('placeholder', brand.name)
                    option.setAttribute('value', brand.id)
                    option.innerText = brand.name
                    brandSection.appendChild(option)
            })
    })
}


function fetchcpuProducts() {
    window.fetch('https://pcfy.redberryinternship.ge/api/cpus').then(res => res.json()).then(result => {
        result.data.forEach(cpuBrand => {
            console.log(cpuBrand)
                    let option = document.createElement('option')
                    option.setAttribute('placeholder', cpuBrand.name)
                    option.setAttribute('value', cpuBrand.name)
                    option.innerText = cpuBrand.name
                    cpuProducts.appendChild(option)
            })
    })
}


const englishLettersCheck = (e) => {
    if(!e.value.match('^[0-9]+$') && !e.value.match(/^[a-zA-Z]+$/) && !e.value.match("[$&+,:;=?@#|'<>.-^*()%!]")) {
        e.value = '';
         return false
    } 
     return true
}

const onlyNumbers = (e) => {
    if(!e.value.match('^[0-9]+$')) {
        e.value = '';
         return false
    } 
     return true
}

const  attachFile = (e) => {
    uploadImage(e)
}

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
const avatar = document.querySelector('.test')
const lbl = document.querySelector('.label1')
const upl = document.querySelector('.atvirte')
const attc = document.querySelector('.attach')
const pic = document.querySelector('#pic')
const picDetails = document.querySelector('.picDetails')
const dets = document.querySelector('.details')


const uploadImage = async (event) => {
    const file = event.files[0];
    const base64 = await convertBase64(file);
    avatar.src = base64;
    picDetails.style.display = 'block'
    avatar.style.display = 'block'
    dets.style.display = 'flex'
    lbl.style.display = 'none'
    attc.style.display = 'none'
    upl.style.display = 'none'

    var size = Math.floor(file.size / 1000)  + ' kb'
    pic.innerText = file.name + `, ${size}`;
};
