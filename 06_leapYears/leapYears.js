const leapYears = function(number) {
  

    if (isNaN(number)) {
        console.log('Invalid Number')
        return false;
    }

    if ((number % 4 === 0 && number % 100 !== 0) || (number % 400 === 0)){
        console.log(`Yes, ${number} is a leap year`);
        return true;

    }  

    else {
        console.log(`No, ${number} is not a leap year`);
        return false;
    }
    


};


// Do not edit below this line
module.exports = leapYears;
