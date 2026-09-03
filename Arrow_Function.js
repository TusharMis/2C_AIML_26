sum = () => {
    let a = 10;
    let b = 20;
    c = a+b;
    return c
}

console.log(sum())


 const fullName = (firstName, lastName) => {
 return `${firstName} ${lastName}`
}

console.log(fullName("Tushar", "Mishra"))
 
// rest opretor

function restOp(...value){
    console.log(value)
     let total = 0
    for(let n of value){
        total = total + n
    }
    console.log(total)
}

restOp(12,13,34,12)

function sum(name, ...value){
    let total = 0;
    for(let n of value){
        total = total+n;
    }
    console.log(name, total);
    
}

console.log(sum("Tusar", 10,12,21));