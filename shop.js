import {products} from './products.js';
let counter = document.querySelector(".counter");
let mainContent = document.querySelector(".mainContent");

// function showMainContent(){
// mainContent.style.display="block";
// }

// function hideCounter(){
// counter.style.display="none";
// }

// setTimeout(function(){
// 	hideCounter();	
// 	setTimeout(showMainContent,500);
// },5000);

let USDollar = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

const container = document.querySelector(".products");




/*
since your variable has same name of obect property we can write
let productName=products[0].productName;*/
//let {productName,productPrice}=products[0];
//alert(productName + " " + productPrice);

let i, a = 0;
//here variable a is a counter, where in each available product, i named the option radio buttons by qty${a} because in foreach loop at the end of this file the index is 0 and 1 and 2
const filteredArray = products.filter(function (product) {
	return product.productAvailable === true
});
console.log(filteredArray);



function fillProducts(product,i) {

	
	let productCard = document.createElement("div");
	productCard.className = "productCard";

	let productImg = document.createElement("img");
	productImg.setAttribute("src", product.productImg);
	productCard.appendChild(productImg);



	let productName = document.createElement("h3");
	productName.setAttribute("class", "productText");
	productName.textContent = product.productName;
	productCard.appendChild(productName);

	let productDesc = document.createElement("p");
	productDesc.setAttribute("class", "productText");
	productDesc.textContent = product.productDesc;
	productCard.appendChild(productDesc);

	let productPrice = document.createElement("p");
	productPrice.className = "productText productPrice";
	productPrice.textContent = USDollar.format(product.productPrice);
	productCard.appendChild(productPrice);

	let inputQty=document.createElement("input");
	inputQty.setAttribute("type","number");
	inputQty.setAttribute("value","1");
	inputQty.setAttribute("min","1");
	inputQty.setAttribute("max","5");
	productCard.appendChild(inputQty);

	
	let addButton = document.createElement("button");
	addButton.className = "btnAdd";
	addButton.setAttribute("data-id", product.productId);
	addButton.onclick=function(){addToCard(this)};
	addButton.textContent = "add to card";

	productCard.appendChild(addButton);

	return productCard;
}




let chooseOption;
for (i = 0; i < products.length; i++) {
	container.appendChild(fillProducts(products[i]));
}


let filteredProduct = document.querySelectorAll(".filteredProduct");

filteredProduct.forEach(function (opt) {
	opt.addEventListener("click", function () {
		chooseOption = this.value;
		console.log(chooseOption);
		container.innerHTML = '';
		a = 0;
		if (chooseOption === '1') {
			for (i = 0; i < products.length; i++) {
				container.appendChild(fillProducts(products[i]));
			}
		}
		else {
			for (i = 0; i < filteredArray.length; i++) {
				container.appendChild(fillProducts(products[i]));
			}
		}

	})
});

let btnAdd = document.querySelectorAll(".btnAdd");
let shop = document.querySelector(".fa-cart-shopping");
let qty = localStorage.getItem("qty") || 0;
shop.setAttribute("data-qty", qty);


let allBag = [];
let bag =
{
	// productId: 0,
	// productName: '',
	// productPrice: 0,
	// productQty: 0
};


function addToCard(btn) {
	bag =
	{
		productId: 0,
		productName: '',
		productPrice: 0,
		productQty: 0
	};


	let dataQty = parseInt(shop.getAttribute("data-qty"));


	bag.productName = btn.previousElementSibling.previousElementSibling.previousElementSibling.textContent;


	let price = btn.previousElementSibling.previousElementSibling.textContent.replace("$", "");
	bag.productPrice = parseFloat(price);

	bag.productId = btn.getAttribute("data-id");
	bag.productQty = btn.previousElementSibling.value;
	

	let exist = false;
	for (let i = 0; i < allBag.length; i++) {

		if (btn.getAttribute("data-id") === allBag[i].productId) {
			exist = true;
			break;
		}
	}
	if (exist === false) {
		shop.setAttribute("data-qty", dataQty + 1);
		localStorage.setItem("qty", shop.getAttribute("data-qty"));
		allBag.push(bag);
	}


	console.log(allBag);

	localStorage.setItem("fullBag", JSON.stringify(allBag));
}

/*slider*/
const slider= document.querySelector(".slider");
let imgPosition=1;
const images =["img1.jpg","img2.jpg","img3.jpg"];
setInterval(function()
{
	if(imgPosition===3)
	imgPosition=0;
	slider.style.backgroundImage=`url(${images[imgPosition]})`;
	imgPosition++;
	
}
,3000);

// radioColor to change background color
const radioColor=document.querySelectorAll(".radioColor");
radioColor.forEach(function(ele){
	ele.addEventListener("click",function(){
		const color=this.getAttribute("value");
		document.body.style.backgroundColor=color
	})
})
