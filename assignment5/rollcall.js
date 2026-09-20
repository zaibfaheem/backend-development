let rollNum = 1;
while(rollNum <= 20){
    if(rollNum === 13){
        rollNum++;
        continue;
    }
    if(rollNum === 18){
        break;
    }console.log(rollNum);
    rollNum++;
}