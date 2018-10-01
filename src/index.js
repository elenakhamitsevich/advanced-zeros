module.exports = function getZerosCount(number, base) {

let snum1 = [];

nextPrime:
for (let i = 2; i <= base; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  snum1.push(i);
}

let snum2 = [];

for(let k = 0; k < snum1.length; k++){
  while(base%snum1[k] == 0){
    base = base/snum1[k];
    snum2.push(snum1[k]);
  }
}

let min = Math.min.apply(null, snum2);
let max = Math.max.apply(null, snum2);

let nummin = 0;
for (let b = 0; b < snum2.length; b++){
if (snum2[b] == min){
  nummin++;}
}

let nummax = 0;
for (let b = 0; b < snum2.length; b++){
if (snum2[b] == max){
  nummax++;
}
}

let n = 1;
let count1 = 0;
while (number/Math.pow(min,n)>=1){
  count1 = count1 + Math.floor(number/Math.pow(min,n));
  n++;
}

let g = 1;
let count2 = 0;
while (number/Math.pow(max,g)>=1){
  count2 = count2 + Math.floor(number/Math.pow(max,g));
  g++;
}

if (Math.floor(count1/nummin)>Math.floor(count2/nummax)){
  return (Math.floor(count2/nummax));
  }
  else{ return (Math.floor(count1/nummin));
  }
}