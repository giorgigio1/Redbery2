const token = '74ea4b4838e06ef711d91d28f868619b'
const baseUrl = 'https://pcfy.redberryinternship.ge/'
const main = document.querySelector('.main');

window.fetch(`https://pcfy.redberryinternship.ge/api/laptops?token=${token}`).then(res => res.json()).then(result => {

    for(let item of result.data){
        let itmHtml = createListItem(item);
        main.innerHTML += itmHtml;
    }

})
//`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${token}`
function createListItem(item){
    
    let itemHtml = `        
    <article class="worker">
        <figure class="laptopImg">
            <img src="${baseUrl + item.laptop.image}" alt="asdas" class="comp">
        </figure>
        <div class="data">
            <span>${item.user.name} ${item.user.surname}</span>
            <label for="">${item.laptop.name}</label>
            <a href="./insidePage.html?id=${item.laptop.id}"  attr-id ='${item.laptop.id}'>მეტის ნახვა</a>
        </div>
    </article>`


    return itemHtml;
}


let back = document.querySelector('.arrow1')
  back.addEventListener('click', e => {
    window.location.href = 'landing.html'
  })