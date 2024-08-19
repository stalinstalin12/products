let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("get", "https://fakestoreapi.com/products");
function loadData(){
xhr.send();

xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        console.log(xhr.status);
    }
    if(xhr.status===200){
        let response=xhr.response;
        console.log(response);
        let data=JSON.parse(response);
        console.log(data);
        let div=document.getElementById('datacontainer');
        console.log(div);
        let rows='';
        for (let i=0;i<data.length;i++){
            rows=rows+`
           <div class="rounded position-relative fruite-item">
                            
                            <div class="category text-white bg-secondary px-3 py-1 rounded position-absolute"
                                style="top: 15px; left: 10px;">${data[i].category}</div>
                            <div class="p-3 border border-secondary  rounded-bottom"><div class="fruite-img">
                              <a href="">  <img src="${data[i].image}" class="img-fluid w-100 rounded-top image" alt=""></a>
                            </div>
                                <h4 class="title">${data[i].title}</h4>
                                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt </p>
                                <div class="d-flex justify-content-between  flex-lg-wrap">
                                    <p class="price text-dark fs-5 fw-bold mb-0">$${data[i].price}</p>
                                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                            class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>`
        }
        console.log(rows);
        div.innerHTML=rows;

    }


}
}