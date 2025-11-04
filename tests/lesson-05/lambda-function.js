// Lambda function 
const value = (price, quantity, discount) => {
    return price * quantity - discount;
}

console.log(value(10, 2, 5));