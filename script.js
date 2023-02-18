







fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    .then((resp) => resp.json())
    .then((data)=>{
        let card = document.querySelector('.row');
        let myArr = data;
        
        

        myArr.map((products) => {
            card.innerHTML += `<div class="col">
        <div class="card h-100" style="width: 18rem;">
            <img src=${products.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${products.name} </h5>
                <p class="card-text">
                Brand : ${products.dsc} <br>
                $ ${products.price} <br>
                Rating: ${products.rate}<br>    
                </p>
            </div>
        </div>
    </div>`
        })
        return myArr;
    }).then(data=>{
        return takeOrder(data);
      
    }).then(()=>{
      
        return orderPre();

    }).then(()=>{
       
        return payOrder();
    }).then(()=>{
        return thankyouFnc();
    })


    // Select random order function
    function takeOrder(data){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let coustomerOrder = [];
                for (let i = 0; i < 3; i++) {
                    let rand = Math.floor(Math.random()*60);
                    coustomerOrder.push(data[rand])
                  
                }
                console.log(coustomerOrder);
                resolve(coustomerOrder)
            }, 2500)
        })
    }

    //Per payment status
    function orderPre(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let orderStatus = {
                    order_status: true,
                    paid : false
                }
                console.log(orderStatus)
                resolve(orderStatus);
            }, 1500)
        })
    }

    // post order status
    function payOrder(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let orderStatus = {
                    order_status: true,
                    paid : true
                }
                console.log(orderStatus)
                resolve(orderStatus);
            }, 1000)
    })
    }

    // Thank you message
    function thankyouFnc(){
        console.log("Thank you... Your payment recived successfully")
    }