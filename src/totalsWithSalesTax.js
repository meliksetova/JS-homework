let totalsWithSalesTax=(totals)=>{
    for (var i=0;i<totals.length;i++){
         if (!totals[i]){
             return 'Please provide all totals';
         } else if (!((typeof totals[i])==='number')){
             return 'Please provide a numbers'
         }
    }

let totals2 =totals.map(total=>(total*1.08875).toFixed(2));
console.log(totals2);

return totals2.length;
}
module.exports=totalsWithSalesTax;
