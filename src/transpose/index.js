/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let [row] = array
    return row.map((value, index) => array.map(row => row[index]))  //iterating each array index through the row
    
}

module.exports = transpose;
