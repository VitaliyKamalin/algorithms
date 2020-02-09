/* OPTIONS */
var searchSize = 100000;
var randomNum = random(1, searchSize * 2);
/* OPTIONS */

/* INITIAL ARRAY */
var numbers = [];
for (var i = 1; i <= searchSize; i++) {
    numbers.push(i);
}
/* INITIAL ARRAY */

console.log("Random number is:", randomNum.toLocaleString());
console.log("");
console.log("[randomSearch] found:", randomSearch(numbers, randomNum).toLocaleString());
console.log("");
console.log("[binarySearch] found:", binarySearch(numbers, randomNum).toLocaleString());

/* FUNCTIONS */
function randomSearch(listNumbers, searchValue) {
    var attempts = 1;
    var notSearchedElems = listNumbers.slice();
    
    var randomIndex;
    while (notSearchedElems[(randomIndex = random(0, notSearchedElems.length - 1))] != searchValue) {
        if (randomIndex === -1) {
            console.log("[randomSearch, Not Found] attempts:", attempts.toLocaleString(), "| O(n)");
            return -1; // ELEMENT NOT FOUND
        }

        attempts += 1;
        notSearchedElems.splice(randomIndex, 1);
    }

    console.log("[randomSearch] attempts:", attempts.toLocaleString(), "| O(n)");
    return notSearchedElems[randomIndex];
}

function binarySearch(listNumbers, searchValue) {
    var attempts = 1;
    listNumbers.sort(function(a, b) {
        return a - b;
    });

    var low = 0;
    var high = listNumbers.length - 1;
    var mid;

    while (listNumbers[(mid = Math.floor((low + high) / 2))] != searchValue) {
        if (high - low === -1) {
            console.log("[binarySearch, Not Found] attempts:", attempts, "| O(log n)");
            return -1; // ELEMENT NOT FOUND
        }
            
        attempts += 1;
        if (listNumbers[mid] > searchValue) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    console.log("[binarySearch] attempts:", attempts, "| O(log n)");
    return listNumbers[mid]; // SHOULD RETURN ELEMENT INDEX INSTEAD OF VALUE
}

function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
/* FUNCTIONS */