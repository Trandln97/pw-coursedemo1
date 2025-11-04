const arr = [1, 101, 2, 3, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
        break;
    }
}