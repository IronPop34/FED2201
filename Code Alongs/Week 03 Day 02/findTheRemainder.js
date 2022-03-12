// Find the Remainder

// create a function
// that will take any number
// divide that by any (other) number
// the output should be
// how many times the number got divided
// as well as teh modules (remainder) of the number you are dividing



// creat a function
// that will take any number
// divide that by any (other) number
function findTheRemainder (dividend, divisor);
    // Mae this program only using addition and subtraction arithmetic operators. You CANNOT use modulus, multiplication, division ETC. All you can use is addition and subtraction.
    // //the easy way despite the rules
    // let timesDivided = Math.floor (dividend/divisor)
    // let remainder = dividend%divisor

    // the expected/right way
    let timesDivided;
    let remainder ;
    let addedDivisor = 0

    // Can't divide by 0
    //what happens if 0 is the divisor
    if (divisor == 0) {
        console.log('Error: Cannot Divide by Zero');
        return 'Error: Cannot Divide B Zero';
    }
    //what if your dividend is less than your divisor
    else if ( dividend < divisor) {
        console.log('Error: ${dividend} cannot be divided by ${divisor}');
        return 'Error: Cannot Divide B Zero';
    }
    else {
        console.log('Division is happening...')
        while ( addedDivisor < dividend ) {
            console.log('${++loopCount} iteration(s) have ocurred')

            //increase addedDivisor
            console.log('addDivisior was ${addedDivisor}')
            addedDivisor += divisor //addedDivisor = addedDivisor - divisor
            console.log('addedDivisor is now ${addedDivisor}')
            
            //decrease remainder
            console.log('remainder was ${remainder')
            remainder -= divisor // remainder = remainder-divisor
            console.log('remainder is now ${remainder}')
            //timesDivided++ // timesDivided + 1
            
            // add to the timesDivided
            timesDivided++
        }   

        if (addedDivisor >= dividend) {
            console.log('loop')
            
            console.log('remainder was ${remainder}')
            remainder = dividend - addedDivisor
            console.log('remainder is now ${remainder}')
        }
    


    //while(remainder > dividend) {
        //keep going
        
    //}

    console.log('${dividend} divided by ${divisor} equals: ${timesDivided} with a remainder of ${remainder}');
    return '${dividend} divided by ${divisor} equals: ${timesDivided} with a remainder of ${remainder}';
}

//test case scenarios
findTheRemainder(6, 2) //return 3 with a remainder of 0
findTheRemainder(7, 2) //return 3 with a remainder of 1
findTheRemainder(7, 0) //return Error: Cannot Divide by Zero
findTheRemainder(2, 7) //return 3 with a remainder of 1

console.log()