let x =+prompt(" nahp 1 so nguyen n");
let a = 0;
let b;
while (x > 0){
    b = x % 10;
    if(x % 2 == 0){
        count++;
    }
    x/=10;
}
console.log(" so luong chu so chan cua n la :");