/* OPTIONS */
var searchSize = 10000;
/* OPTIONS */

/* INITIAL ARRAYS */
var numbers = [];
for (var i = 1; i <= searchSize; i++) {
    numbers.push(i);
}
var numbersReverse = numbers.slice().reverse();
/* INITIAL ARRAYS */

console.log("[Numbers Sorted] elements:", numbers.length.toLocaleString());
nodeJsSort(numbers);
selectionSort(numbers);
console.log("");
console.log("[Numbers Reverse] elements:", numbersReverse.length.toLocaleString());
nodeJsSort(numbersReverse);
selectionSort(numbersReverse);

/* NODEJS SORT */
function nodeJsSort(numbersArray) {
    var sortOperationsCount = 0;

    var resultArray = numbersArray.slice().sort(function(a, b) {
        sortOperationsCount += 1;
        return a - b;
    });

    console.log("[nodeJsSort] operations count:", sortOperationsCount.toLocaleString(), " | O(n)");
    return resultArray;
}
/* NODEJS SORT */

/* SELECTION SORT */
function selectionSort(array) {
    var operations = 0;
    var operationsFindSmallest = 0;

    array = array.slice();
    var sortedArray = [];
    var length = array.length;

    for (var i = 0; i < length; i++) {
        operations += 1;
        var result = findSmallestElemIndex(array);
        operationsFindSmallest += result.operationsFindSmallest;
        sortedArray.push(array.splice(result.smallestIndex, 1)[0]);
    }

    console.log(
        "[selectionSort] all operations count: ",
        (operations + operationsFindSmallest).toLocaleString(), "| O(n^2)",
        "\n => selectionSort:", operations.toLocaleString(), "| O(n)",
        "\n => FindSmallest (all / average):", operationsFindSmallest.toLocaleString(), "/",
            (operationsFindSmallest / length).toLocaleString(), "| O(n)"
    );
    return sortedArray;
}

function findSmallestElemIndex(array) {
    var operationsFindSmallest = 0;

    var smallestIndex = 0;
    var smallestElem = array[smallestIndex];

    for (var i = 0; i < array.length; i++) {
        operationsFindSmallest += 1;
        if (smallestElem > array[i]) {
            smallestIndex = i;
            smallestElem = array[smallestIndex];
        }
    }

    return { smallestIndex: smallestIndex, operationsFindSmallest: operationsFindSmallest };
}
/* SELECTION SORT */