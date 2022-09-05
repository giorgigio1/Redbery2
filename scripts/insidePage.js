const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

 const TOKEN = "74ea4b4838e06ef711d91d28f868619b";

 const link = 'https://pcfy.redberryinternship.ge'

let main = document.querySelector(".main");

const drawHtml = (data) => {
 console.log(data)
  return `
<div class="contant">
        <figure class="imgHolder">
          <img src=${link + data.laptop.image} alt="" class="laptop_img"/>
        </figure>
        <ul class="options fich">
          <li><b>სახელი:</b> ${data.user.name} ${data.user.surname} </li>
          <li><b>თიმი:</b> ${data.user.team_id}</li>
          <li><b>პოზიცია:</b> ${data.user.position_id}</li>
          <li><b>მეილი:</b> ${data.user.email}</li>
          <li><b>ტელ.ნომერი:</b> ${data.user.phone_number}</li>
        </ul>
      </div>
      <hr />
      <ul class="options features">
        <li><b>ლეპტოპის სახელი:</b> ${data.laptop.name}</li>
        <li><b>ლეპტოპის ბრენდი:</b> ${data.laptop.brand_id}</li>
        <li><b>მეხსიერების ტიპი:</b> ${data.laptop.hard_drive_type}</li>
        <li><b>RAM:</b> ${data.laptop.ram}</li>
        <li><b>CPU:</b> ${data.laptop.cpu.name} </li>
        <li><b>CPU-ს ბირთვი:</b> ${data.laptop.cpu.cores}</li>
        <li><b>CPU-ს ნაკადი:</b> ${data.laptop.cpu.threads}</li>
      </ul>
      <hr />
      <ul class="options features">
        <li><b> <span>ლეპტოპის</span>  ${
          data.laptop.state === "new" ? "ახალი" : "ძველი"
        }</b> მეორადი</li>
        <li><b>ლეპტოპის ფასი:</b> ${data.laptop.price} ₾</li>
        <li><b>შეძენის რიცხვი:</b> ${data.laptop.purchase_date}</li>
      </ul>
`;
};

// const laptopInfo = fetch(`https://pcfy.redberryinternship.ge/api/laptop/${params.id}?token=${TOKEN}`).then(res => res.json()). then(res => console.log(res))
const laptopInfo = fetch(
  `${link}/api/laptop/${params.id}?token=${TOKEN}`
)
  .then((res) => res.json())
  .then((res) => main.innerHTML = drawHtml(res.data));


  let back = document.querySelector('.arrow1')
  back.addEventListener('click', e => {
    window.location.href = 'list.html'  
  })