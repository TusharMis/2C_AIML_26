let Product = new  Object();

Product.name = "VIVO";
Product.id = 452;
Product.price = 15000;
Product.quantity = 2;
Product.Total = function() {
   console.log("Total Price of Product -> ",Product.price * Product.quantity)
}
console.log("Product Name -> ",Product.name);
console.log("Product Id -> ",Product.id);
console.log("Price of product -> ",Product.price);
console.log("Quantiity of Product -> ",Product.quantity);
Product.Total();

// let Product = {
//     name : "VIVO",
//     id : 452,
//     price: 15000,
//     quantity: 3,
//     Total : function(){
//        console.log("Total price of product ->", this.price * this.quantity);
//     }

// }
 
// console.log(Product)
// Product.Total();
