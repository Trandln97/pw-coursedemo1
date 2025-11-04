let student = {
    name: "MeoMeo",
    address: "33 Le Duan"
};
let result = "";

for (let key in student) {
    result += student[key] + " ";
}

console.log(result);