/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const arr = []
    const ArrBracketOpen = ["(", "{", "["];
    const ArrBracketClose = [")", "}", "]"];

    const arrStr = str.split("") //Spacing the Brackets
    
    for(let i of arrStr){ //looping through
        if(ArrBracketOpen.includes(i)){
            arr.push(i) // each item in the bracket array
        }else if(ArrBracketClose.includes(i)) {
            if(arr[arr.length - 1] == ArrBracketOpen[ArrBracketClose.indexOf(i)]) {
                arr.splice(-1, 1) // find and check the if the pair is the last element and remove it
            }else{
                arr.push(i)
            }
        }
    }
    if(arr.length == 0 ) {
        return "valid"
    }else{
        return "invalid"
    }
}

module.exports = isValid;
