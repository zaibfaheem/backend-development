let n = Number  (prompt("enter your number"))
let i = 1;
while(i <= n){
    let row = "";
    let j = 1;
    while(j <= i){
        row = row + j;
        j++;
    } console.log(row);
    i++;
}