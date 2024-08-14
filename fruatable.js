let req = new XMLHttpRequest();
console.log(req);
req.open("get", "https://fakestoreapi.com/products");
req.send();

req.onreadystatechange = function () {
    console.log("readystate:", req.readyState);
    if (req.readyState === 4) {
        console.log("status:", req.status);
    }
    if (req.status === 200) {
        let response = req.response;
        console.log("response :", response);
        let data = JSON.parse(response);
        console.log(data);
        let title = document.getElementsByClassName("title");
        let image = document.getElementsByClassName("image");
        let description = document.getElementsByClassName("description");
        let category = document.getElementsByClassName("category");
        let price = document.getElementsByClassName("price");


        //title
        for (let i = 0; i < title.length && i < data.length; i++) {
            title[i].innerHTML = (data[i].title).slice(0,20)+"..";
        }


        //image
        for (let i = 0; i < image.length && i < data.length; i++) {
            image[i].src = (data[i].image);
        }

        //description
        for(let i = 0; i < description.length && i < data.length; i++) {
            description[i].innerHTML = (data[i].description).slice(0,90)+"...";
        }

        //category
        for(let i = 0; i < category.length && data.length;i++ ) {
            category[i].innerHTML = data[i].category;
        }

        //price 
        for (let i = 0; i < price.length && i < data.length; i++){
            price[i].innerHTML =   " $"+data[i].price
        }


    }


}


