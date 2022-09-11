let num1 = 5/-3.3577;
let r = num1 %2;

if(r==0 && num1 < 0){
    console.log(num1 + " is negative even")
}else if (r==0 && num1 > 0){
    console.log(num1 + " is positive even")
}else if (r!==0 && num1 < 0){
    console.log(num1 + " is negative odd")
}else if (r!=0 && num1 > 0){
    console.log(num1 + " is positive odd")
}else {
    console.log(num1 + " is zero")
}
