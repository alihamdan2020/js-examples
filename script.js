//(exercise 11)store is an object that contains property index
//and in each clik on button the index increase 1 by 1 and i save toe store
//object inside a localStorage called "store" but the issue is when i lunch my page
//for the first time the local storage "store" is null so if it wan null then store 
//is initialise for the first time as i create the opbject store, for the second time
//where i am clicking the button below and i ll ready increase the value of index and
//i save the object inside local storagem then for escond time the local storage not //null
let store=JSON.parse(localStorage.getItem("store")) || 
{
		index:0	
};
/*
if(store===null){
	store={
	index:0;
	}
}
*/

const color=localStorage.getItem("bgColor");
	document.body.style.background=color;

/*exercise 0*/
let quantity=0;
/*exercise 1*/
let btn=document.getElementById("btnOne");

btn.onclick=function (){
	let oldText=btn.textContent.toLowerCase().trim();
	//in your html in this exercise try remove spaces before and after ON and look how it works, but if i remove trim() from line above and i keep spaces in html file, it is not working
	let newText=oldText==="on" ? "off".toUpperCase() : "on".toUpperCase();
	btn.textContent=newText;	
	btn.style.fontSize="40";
	btn.classList.toggle("classAddesByClick");
}
/*end*/

/*exercise 2*/
let lists=document.querySelectorAll("#list li");

lists.forEach(function (a){
	
	a.addEventListener("mouseover",function(){
		a.style.background="red";
		a.textContent="ON";		
	});
	
	
	a.addEventListener("mouseleave",function(){
		a.style.background="#eee";	
		a.textContent="OFF";		
	});
	
});
/*end*/

/*exercise 3*/
let btnConvert=document.querySelector("#convert");
let textString=document.querySelector("#txt3");
let oneCahracter=document.querySelector("#cha3");

btnConvert.addEventListener("click",function(){
	alert(textString.value.indexOf(oneCahracter.value));
});
/*end*/

/*exercise 4*/
let btnCapitalise=document.querySelector("#btnCap");
let textCapitalise=document.querySelector("#txtCap");
let showResultCap=document.querySelector("#showResultCap");

btnCapitalise.addEventListener("click",function(){
	
	let newArray=textCapitalise.value.split(" ");
	let newSecondArray=newArray.map(function(ele){
	return `${ele.charAt(0).toUpperCase()}${ele.substring(1)}`;	
	});
	showResultCap.innerHTML=newSecondArray.join(" ");
	});

/*end*/
/*exercise 5*/
let highlight_lst=document.querySelectorAll(".highlight-list");
highlight_lst.forEach(function(lst,index){
	
	lst.addEventListener("click",function(){
		
		highlight_lst.forEach(function(lst,index){
			if(index<highlight_lst.length-1)
			lst.classList.remove("highlight");
		});
		
		if(index<highlight_lst.length-1 && index>=1)
		{
		let nextSibling=this.nextElementSibling;
		let previousSibling=this.previousElementSibling;
		nextSibling.classList.add("highlight");
		previousSibling.classList.add("highlight");
		}	
	});
});
/*end*/

// exeecice 6
let frm=document.querySelector(".frmValidation");
let uname=document.querySelector("[name='userName']");
let pswd=document.querySelector("[type=password]");
let btnForm=document.querySelector("#btnForm");
btnForm.addEventListener("click",function(e){
	
	let a=false;
	let b=false;
	
	if(uname.value.length>=5 && uname.value.length<=10)
	a=true;
	// if length of username between 5 and 10

	if(pswd.value.length>=5 && pswd.value.length<=10){
	// check of length of password between 5 and 10 check if exist at least one capital letter
		for(i=1;i<pswd.value.length;i++)
		{
			
		if(isNaN((pswd.value[i])) && (pswd.value[i].toUpperCase()===pswd.value[i]))
		{
			// alert(`${i} ${pswd.value[i]}`);
			b=true;
			break;
		}
		}
	}
	
	if(a && b){
		alert("success");
	}
	if(a===false || b===false){
		e.preventDefault();
		alert("some fields are obligatory");
	}

	
})

//exercise 7
let verfInput=document.querySelectorAll(".verfInput");
window.onload=function(){
	verfInput[0].focus();
};
verfInput.forEach(function(ele,index){
	
	ele.addEventListener("blur",function(){
		if(this.value.length===0)
			this.focus();
	});
});

verfInput.forEach(function(ele,index){
	ele.addEventListener("input",function(){
	if(this.value.length===1)
	{
		if(index!==verfInput.length-1)
			//to check if i am at last verfInput
		ele.nextElementSibling.focus();	
		else	
		{
			document.querySelector(".result").textContent="done";
			this.blur();
		}
		

		this.style.background="#eee";
	}
	
	});
	
	});

//exercise 8
let displayNumberInThreeWay=document.querySelector(".displayNumberInThreeWay");
let num=document.querySelector(".floatNumber");
let result8=document.querySelector(".result8");

displayNumberInThreeWay.onclick=function(){
	let floatValue=parseFloat(num.value);
	if(isNaN(floatValue))
			result8.innerHTML="please enter a <b style='color:red'>valid</b> number";
	else
	{
		let a=Math.round(floatValue);
		let b=Math.ceil(floatValue);
		let c=Math.floor(floatValue);
		let d=floatValue.toFixed(2);
			result8.innerText=`rounded number is ${a} and ceil number is ${b} and floor number is ${c} and fixed is ${d}`;
	}
}

//exercisw 9

let btnCalculation=document.querySelectorAll(".btnCalculation");
let result9=document.querySelector(".result9");
let addField=document.querySelector("#addField");

addField.addEventListener("click",function(){
	let textToAdd=document.createElement("input");
	textToAdd.classList.add("fieldToEnter");
	textToAdd.type="text";
	document.querySelector(".inputsField").appendChild(textToAdd);	
	
});


let mainContainer=document.querySelector(".special");
mainContainer.addEventListener("click",function(a){
	if(a.target.classList.contains("btnCalculation")){
		let fieldToEnter=document.querySelectorAll(".fieldToEnter");
		let op=a.target.getAttribute("data");
		
			switch (op)
			{
			case "add" 		:	a=operation("add",fieldToEnter); break;
			case "minus" 	:	a=operation("minus",fieldToEnter); break;
			case "times" 	:	a=operation("times",fieldToEnter); break;
			case "division" :	a=operation("division",fieldToEnter); break;
			}
result9.textContent=`the result is ${a}`
		
		alert(op);
	}
	
});

function operation(operation,arr){
	let result=parseInt(arr[0].value);
	let i;
	

	if (operation==="add")
		for(i=1;i<arr.length;i++)
			result+=parseInt(arr[i].value);
	
	
	if (operation==="minus")
		for(i=1;i<arr.length;i++)
			result-=parseInt(arr[i].value);
	
	
	if (operation==="times")
		for(i=1;i<arr.length;i++)
			result*=parseInt(arr[i].value);

	
	if (operation==="division")
		for(i=1;i<arr.length;i++){
			result/=parseInt(arr[i].value);
			result=result.toFixed(2);
		}
	return result;		
}

//exercise 10
let creatLocalStorage=document.querySelector("#creatLocalStorage");
creatLocalStorage.addEventListener("click",function(){
	localStorage.setItem("bgColor","rgba(0,0,0,.2)");
});

const chngColor=document.querySelector("#chngColor");
chngColor.addEventListener("click",function(){
	localStorage.setItem("bgColor","");

});

//exercise 11
const object =document.querySelector(".object");
const resetObject =document.querySelector(".resetObject");
object.addEventListener("click",function(){
	
	if(true)
		store.index+=1;
	console.log(store);
	localStorage.setItem("store",JSON.stringify(store));
	
});

resetObject.addEventListener("click",function(){
	store.index=0;
	localStorage.setItem("store",JSON.stringify(store));
});

//exercise 12
const addDefault =document.querySelector("#addDefault");
const addNotDefault =document.querySelector("#addNotDefault");

addDefault.addEventListener("click",function(){
	//here i use same function but with no variable, in this case, fucntions takes
	//the default value of the parameters
sumVar();	
});
addNotDefault.addEventListener("click",function(){
sumVar(5,3);	
});

function sumVar(a=0,b=0){
	console.log(a+b);
}

//exercise 13
const shippingBtn=document.querySelector('#shippingBtn');
const orderCost=document.querySelector('.orderCost');
const resultShipping=document.querySelector('.resultShipping');
shippingBtn.onclick=calculateShipping;
//onkeydown mean each key on keyboard, but i check if this key is enter apply the function calculateshipping
orderCost.addEventListener("keypress",function(e){
	if(e.key==='Enter')
	calculateShipping();
})
// orderCost.onkeydown=function(e){
// 	if(e.key==='Enter')
// 	calculateShipping();
// };

function calculateShipping(){
	let orderCostValue=Number(orderCost.value);
	if(isNaN(orderCostValue))
	return ;
	if(orderCostValue<40)
	orderCostValue+=10;
	
	resultShipping.innerHTML=`your total cost is : $${orderCostValue}`;
}

//exercise 14
//change contnet of button form Press to loading then done
const btnLoading=document.querySelector("#loading");
btnLoading.addEventListener("click",function(){
	this.innerHTML="loading ...";
	setTimeout(function(){
		btnLoading.innerHTML="done";
	},1000)
})