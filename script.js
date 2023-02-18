function getMenu(){
    fetch('https://free-food-menus-api-production.up.railway.app/burgers')
    .then((res)=>res.json())
    .then((data)=>{
        var giveData = ''
        var cart = 0;
        console.log(data[1].name)
        for(let i in data){
            giveData +=`
                <div class="card" style="width: 18rem;">
                    <img src="${data[i].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title name">${data[i].name}</h5>
                        <p>${data[i].dsc}</p>
                        <span class="rating">${'Rating: '+data[i].rate}</span>
                        <span class="price">${' Price: '+data[i].price}</span>
                        <p>${'Country: '+data[i].country}</p>
                        <button onclick="()=> cart += 1" class="order-btn">Add to Cart</button>
                    </div>
                </div>
            `
            menuData.innerHTML = giveData;
        }
        console.log(cart)
    })
    
}
getMenu()
function takeOrder(){
    document.getElementById("hading").innerHTML = "Track Order";
    var takeOrder = `
    

    `
    menuData.innerHTML = takeOrder;
}