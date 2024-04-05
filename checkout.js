import {products} from './products.js';

const container=document.querySelector(".container");

const btnReturn=document.querySelector("#returnToShop");


const fullBag=JSON.parse(localStorage.getItem("fullBag")) || false;
let s=0;
if (fullBag===false){
btnBuy.style.display="none";
returnToShop.style.display="none";
container.innerHTML="your bag is empty";
}

else{
fillProduct();
}

function fillProduct(){
  const filteredArray2=fullBag.filter(function(ele){
    console.log(ele.productQty);
     const filteredItem=products.filter(function(item){
       return item.productId===parseInt(ele.productId);
   });
   
   filteredItem.map(function(oneItem){
     s+=parseFloat(oneItem.productPrice * ele.productQty);
     container.innerHTML+=
     `
     <div class="itemCheckout js-id-${oneItem.productId}">
     <img src=images/${oneItem.productImg}>
     <div class="details">
     <p><span>product # </span> ${oneItem.productId}</p>
     <p><span>product name</span> ${oneItem.productName}</p>
     <p><span>product description</span>${oneItem.productDesc}</p>
     <p><span>quantity</span>${ele.productQty}</p>
     <p><span>unit price</span>$ ${oneItem.productPrice}</p>
     <p><span>total price</span>$ ${(oneItem.productPrice * ele.productQty).toFixed(2)}</p>
     <p><span style="color:red;cursor:pointer" class="delItem" data-item-id="${oneItem.productId}">delete</span></p>
     </div>
     </div>
     `;
   })
   });
 
    const contentSummary=document.querySelector(".contentSummary");
    contentSummary.innerHTML=
    `
    <h3>order summary </h3>
    <p><span>Items count </span>${fullBag.length}</span></p>
    <p><span>cost before tax </span>$${s}</p>
    <p><span>10% tax </span>$${(s*0.1).toFixed(2)}</p>
    <hr width="100%">
    <p><span>total </span>$${(s*1.1).toFixed(2)}</p>
    <button>check out</button>
    `;
   
 // for(i=0;i<fullBag.length;i++){
 // let rowResult=document.createElement("div");
 // rowResult.className="rowResult";
 
 // let productId=document.createElement("span");
 // productId.textContent=fullBag[i].productId;
 
 // let productName=document.createElement("span");
 // productName.textContent=fullBag[i].productName;
 
 // let productPrice=document.createElement("span");
 // productPrice.textContent=fullBag[i].productPrice;
 
 // let productQty=document.createElement("span");
 // productQty.textContent=fullBag[i].productQty;
 
 // rowResult.appendChild(productId);
 // rowResult.appendChild(productName);
 // rowResult.appendChild(productPrice);
 // rowResult.appendChild(productQty);
 // container.appendChild(rowResult);
}

const btnBuy=document.querySelector("button");
btnBuy.addEventListener("click",function(){
localStorage.removeItem("qty");
localStorage.removeItem("fullBag");
const openerWindow=window.opener;
window.close();			

if (openerWindow) {
                openerWindow.location.reload();
            }
});

const delItem=document.querySelectorAll(".delItem");
delItem.forEach(function(del){
  del.addEventListener("click",function(){
    alert(del.dataset.itemId);
   
  })
})