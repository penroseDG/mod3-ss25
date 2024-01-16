let n = prompt("Nhập số nguyên duong bất kì");
let sum = 0;
console.log("Các số nguyên dương từ 1 đến n là:");
for (let i = 1; i <= n; i++) {
    sum += i;
}
if (sum % 2 == 0){
    sum += n + 1;
    console.log(`${sum}`);
}
