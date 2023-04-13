const test_array = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const test_array_2 = ["tree", "foling", "trashy"];

function longest_consec(strarr, k) {
    let n = strarr.length;
    if (n === 0 || k > n || k <= 0) return "";
    let longest = "";
    for (let i = 0; i < n - k + 1; i++) {
        let current = strarr.slice(i, i + k).join("");
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}

let x = longest_consec(test_array, 2);
console.log(x); // "folingtrashy"

/*
Explaination:
This solution has a time complexity of O(n*k) and a space complexity of O(n), 
where n is the length of the input array strarr 
and k is the number of consecutive strings to concatenate.
*/

// Here are some additional test cases that cover edge cases for the problem:
// 1.
console.log(longest_consec(test_array, 2)); // "folingtrashy"

// 2.
console.log(longest_consec(test_array, 3)); // "folingtrashyblue"

// 3. when k value is 0
console.log(longest_consec(test_array, 0)); // ""

// 4. when input array is empty
console.log(longest_consec([], 3)); // ""

// 5. when k value is greater than array length
console.log(longest_consec(test_array_2, 4)); // ""
