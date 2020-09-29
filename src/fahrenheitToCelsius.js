let fahrenheitToCelsius=(tempF)=>{
    if(!tempF){
        return "Please enter an temperature";
    } else if(!((typeof tempF)==='number')){
        return "Please enter a number";
    } else {
     let tempC=((tempF-32)*5/9).toFixed(2);
     return `${tempF}°F is ${tempC}°C`;
    }
}   
module.exports=fahrenheitToCelsius;