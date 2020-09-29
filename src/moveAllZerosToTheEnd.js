let moveAllZerosToTheEnd=(numbers)=>{
for(i=0;i<numbers.length;i++){
  if(numbers[i]===0){
    numbers.splice(i,1);
    numbers.push(0);
  }
}
console.log(numbers);
return numbers.length;
}

module.exports=moveAllZerosToTheEnd;