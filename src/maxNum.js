let maxNum=(number)=>{
    if (!number){
    return 'Please provide a number';
    } else if (!((typeof number)==='number')){
     return "Please enter a number ";
    } else if (number<=0){
    return 'Please provide a number that more than 0';
    } else
  
     for (i = 1; i <= number; i++) {
      if(i%3===0 && i%5===0){
        num='FizzBuzz';
      } else if(i%3===0){
        num='Fizz';
      } else if(i%5===0){
        num='Buzz';
      } else {
        num=i;
      }
      console.log(num)
     }
     
    }
    module.exports=maxNum;