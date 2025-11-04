function item(price, quantity, discount) {
    return price * quantity - discount;
}
// Function Expression
const value = function (price, quantity, discount) {
    return price * quantity - discount;
}

console.log(value(10,2,5));