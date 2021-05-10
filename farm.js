class Mkulima{
    Constructor(product,vendor,farm){
        this.product=[];
        this.farm=[];
        this.vendor=[];
   }
} 

class addFarm extends Mkulima{  
 constructor(farmId,farmerName,phoneNumber,address,farmName){
     super(farmId,phoneNumber,address,farmerName)
     console.log( this.farm.push(farmId,farmerName,phoneNumber,address,farmName))
 }
 } ;  
    let farm1=new addFarm(2838490,"sharon","0727346858",3788,"solio");
    console.log(farm1)
    let farm2= new addFarm(283812,"sheila","0794744765",3788,"utapenda")
    console.log(farm2)

class removeFarm extends Mkulima{
   constructor(farmId){
     super(farmId)
     farm.unshift(farmId)
    }
}
let farm3 = new addfarm(2838490,"sharon","0727346858",3788,"solio")
console.log(farm3)


//updatefarm
let farm={
    farmId:37485,
    farmername:"faith",
    phonenumber:"0713707486",
    address:384527,
    farmname:"kipkeibon",
    set Farm(updateFarm){
        return this.farm=updateFarm
    }

}
console.log(farm)
 //getfarm

 let farm={
    farmId=3748590,
    farmername="timoty",
    phonenumber="0713706967",
    address=384578,
    farmname="choki",
   get getfarm(){
        return this.farmid
    }

};
console.log(farm.getfarm)
//addproduct

class addProduct extends Mkulima{
    constructor( productid,name,price){
    super(productid,name,price)
    console.log(this.push(productid,name,price))
}
 
};
let product6= new addproduct(38457,"maize",200)
    console.log(product6)
   let product9= new Addproduct(98372,"mango",90)
    console.log(product9)
//revomeproduct
    class revomeproduct extends Mkulima{

    }



let product={
    farmId=3728,
    name="timoty",
    price=770,
    set product(updateproduct){
        return this.product=updateproduct

}

};
console.log(product)
let product={
    productId=3728,
   name="seed",
   price=230,
   get getproduct(){
     return this.productId
            
   }
};
console.log(product.getproduct)
function productList(){
    var cup=""
    return(cup);
}
let items=["mango:40,orange:50,cabbage:90,apple:60"];
console.log([items]);
let result=productList(items);
console.log(result)

