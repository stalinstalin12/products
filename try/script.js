let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("get", "https://fakestoreapi.com/products");
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
        let ex=document.getElementsByClassName('container');
        console.log(ex);
        let rows='';
        for (let i=0;i<data.length;i++){
            rows=rows+`
            <div>${data[i].price}</div>`
        }
        console.log(rows);
        ex.innerHTML=rows;

    }


    
}