function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function randomSearch(listNumbers, searchValue) {
    var attempts = 1;
    var notSearchedElems = listNumbers.slice();
    
    var randomIndex;
    while (notSearchedElems[(randomIndex = random(0, notSearchedElems.length - 1))] != searchValue) {
        attempts += 1;
        notSearchedElems.splice(randomIndex, 1);
    }

    console.log("randomSearch attempts: ", attempts, " | O(n)");
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
        attempts += 1;
        if (listNumbers[mid] > searchValue) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    console.log("binarySearch attempts: ", attempts, " | O(log n)");
    return listNumbers[mid];
}

var searchSize = 100000;
var numbers = [];
for (var i = 0; i <= searchSize; i++) {
    numbers.push(i);
}
var randomNum = random(0, searchSize);
console.log("Random nubmer is: ", randomNum);
console.log("randomSearch found: ", randomSearch(numbers, randomNum));
console.log("binarySearch found: ", binarySearch(numbers, randomNum));