let anagramOrNot=(word1,word2)=>{
if (!(word1.length===word2.length)){
    return 'Words have different length';
} else 
    var word1Array1=word1.split("").sort().join("");
    var word2Array=word2.split("").sort().join("");
    if (word1Array1.localeCompare(word2Array)){
      return 'false';
    }
    return 'true'
  }
  
module.exports=anagramOrNot;