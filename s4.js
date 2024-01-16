let a;
let b = 0;
let c = 1;
do{
    a = prompt(" nhap vao so nguyen duong a : ");
    if(a < 1){
        console.log(" nhap 1 so vao di nao : ");
        break;
    } else {
        for(let i = 1; i <= a; i++){
            a = a * 10 + i;
            b = b + i;
            c = c + i;
        }
        console.log("Kết quả");
    }
    }