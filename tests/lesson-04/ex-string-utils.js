//console.log("Tran".toUpperCase());

const str = "Xin chao Viet Nam";
const isIncludeVietNam = str.includes("Viet Nam");
console.log(isIncludeVietNam);

const newResult = str.replace("Viet Nam", "VN")
console.log(newResult);

// ---
const headers = 'id,name,age,address';
const heaerArr = headers.split(',');
console.log(heaerArr);

// ---
const originStr = "Hom nay, toi di hoc";
const subStr = originStr.substring(3);
console.log(subStr);

const pos = originStr.indexOf("toi");
console.log(pos);