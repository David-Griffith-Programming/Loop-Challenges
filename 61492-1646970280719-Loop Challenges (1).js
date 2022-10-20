function oddValues(array){
    var oddNums = []
    for(var i=0;i<array.length;i++){
        if(array[i] % 2 !== 0){
            oddNums.push(array[i])
        }
    }
    return oddNums
}


console.log(oddValues([1,2,3,4,5,6,7,8,9,10]));


function decreasingMultiplesOf3(){
    for(var i=100;i>=0;i--){
        if(i % 3 == 0){
            console.log(i)
        }
    }
}



console.log(decreasingMultiplesOf3());


function printTheSequence(input){
    for(var i=0;i<input.length;i++){
        console.log(input[i])
    }
}

console.log(printTheSequence([4, 2.5, 1, -0.5, -2, -3.5]));



function sigma(){
   var sum = 0
    for(var i=1;i<101;i++){
        sum = sum + i 
    }
    return sum
}

console.log(sigma());



function factorial(){
    var originalNumber = 1;
    for(var i=1; i<13; i++){
        originalNumber = originalNumber * i;
    }
    return originalNumber
}

console.log(factorial())
 