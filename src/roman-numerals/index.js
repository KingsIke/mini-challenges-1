/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let romanFig = function value(e) { 
        if(e == "I")
            return 1
        if( e == "V")
            return 5
        if( e == "X")
            return 10
        if( e == "L")
            return 50
        if( e == "C")
            return 100
        if( e == "D")
            return 500
        if( e == "M")
            return 1000
    
        return -1
    }

    let result = 0;
    for (i = 0; i < roman.length; i++){
     // Getting value of symbol s[i]
        let value1 = romanFig(roman.charAt(i));

        // Getting value of symbol s[i+1]
        if (i + 1 < roman.length) {
            let value2 = romanFig(roman.charAt(i + 1));

            // Comparing both values
            if (value1 >= value2) {
                 result= result + value1;
            }
            else{
                // Value of current symbol is less
                result = result + value2 - value1; 
                i++;
            }
        } else {
            result = result + value1;
        }
    }
    return result
}

module.exports = romanToDecimal;
