function main(numOne, numTwo){
    // Only change code below this line
    var numOne;
    var numTwo;
    var myQuotient;
    
    myQuotient = numOne / numTwo;
    
    
    //Only change code above this line


return myQuotient.toFixed(1);
}

console.log(main(5.0, 2.0), main(16.5, 5.5), main(102.0, 25.5));
module.exports = main;
