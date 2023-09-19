console.log("=================== Task No: 1 ========================")
console.log("=================== The numbering from 1--10 ========================")
for(let i=1;i<=10;i++)
{
    console.log(i);
}

console.log("=================== Task No: 2 ========================")
console.log("=================== The Even numbers between 1--20 ========================")

for(let i=1;i<=20;i++)
{
  if((i%2)===0)
  {
console.log(i);
  }
}


console.log("=================== Task No: 3 ========================")
console.log("=================== The Fibonacci sequence ========================")

let num1=0;
let num2=1;
let num3=null;
console.log(num1);
console.log(num2);
for(let i=0; i<18;i++){
    num3=num1+num2;
    console.log(num3);
    num1=num2;
    num2=num3;
}

console.log("=================== Task No: 4 ========================")
console.log("=================== Table of a number ========================")
let number=5;
for(let i=1;i<=10;i++)
{
    console.log(`${number} * ${i} = ${number*i}`);
}


console.log("============================================Question 2=================================== ========================")

console.log("=================== Task No: 1 ========================")

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
let dolphinsTotalScores=96+108+89+97+112+101+97+112+101;
let koalTotalScores=88+91+110+109+95+109+95+123+106;
let dolphinsAvg=(96+108+89+97+112+101+97+112+101)/9;
let koalAvg=(88+91+110+109+95+109+95+123+106)/9;
console.log(`The Total Avg score of dolphins = ${dolphinsAvg}`);
console.log(`The Total Avg score of Koalas = ${koalAvg}`);
if(dolphinsAvg===koalAvg)
{
  console.log("The match has been Drawn");
}
else if(dolphinsAvg>koalAvg){
console.log("The Dolphins Team has won the match")
}
else{
  console.log("The koalas Team has won the match");
}



