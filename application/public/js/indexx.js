var url = "https://jsonplaceholder.typicode.com/albums/2/photos";

function fadeOut(ev){
    var ele = ev.currentTarget;
    ele.style.opacity = 0;
    setTimeout(() => {
        ele.remove();
        var numelements =document.querySelectorAll(".product-img");
        var count = numelements.length;
        document.getElementById('myCounter').innerHTML = count;
    }, 500);

}
async function fetchWithString(){
    try{
        var response = await fetch(url);
        var data = await response.json();
        var htmlString = data.reduce(function (prev, product){
            return(
                prev + `<div class="product-card">
            <img class="product-img" src="${product.thumbnailUrl}">
            <div class="product-info" >
                <p class="product-title" >${product.title}</p>
            </div>
        </div>`
            );
        },"");
        document.getElementById('product-list').innerHTML = htmlString;

        let cards = document.getElementsByClassName('product-card');
        [...cards].forEach(function (ele){
            var numelements =document.querySelectorAll(".product-img");
            var count = numelements.length;
            document.getElementById('myCounter').innerHTML = count;
            ele.addEventListener('click',function (ev){

                fadeOut(ev);

            })
        });

    }catch (error){
        console.log(error);
    }
}

fetchWithString();

