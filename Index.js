// let Product = new  Object();

// Product.name = "VIVO";
// Product.id = 452;
// Product.price = 15000;
// Product.quantity = 2;
// Product.Total = function() {
//    return Product.price * Product.quantity;
// }
// console.log(Product.name);
// console.log(Product.id);
// console.log(Product.price);
// console.log(Product.quantity);
// Product.Total();

// let Product = {
//     name : "VIVO",
//     id : 452,
//     price: 15000,
//     quantity: 3,
//     Total : function(){
//         return this.price*this.quantity
//     }

// }
 
// console.log(Product)
// Product.Total();

let Product = {
    name: "VIVO",
    id: 452,
    price: 15000,
    quantity: 3,

    Total: function() {
        console.log("Total price of product ->", this.price * this.quantity);
    }
};

console.log(Product);
Product.Total();

