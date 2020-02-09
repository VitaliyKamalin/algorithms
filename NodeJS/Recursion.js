/* OPTIONS */
var factorial = 10;
/* OPTIONS */


console.log("factorial:", factorial.toLocaleString());
console.log("");
console.log("   => result:", factorialWhile(factorial).toLocaleString());
console.log("");
var result = factorialRecursive({ num: factorial, operations: 0 });
console.log(
    "[Recursive] operations count:", result.operations.toLocaleString(), " | O(n)",
    "\n   => result:", result.num.toLocaleString()
);

/* FUNCTIONS */
function factorialWhile(num) {
    var operations = 0;
    var result = 1;

    while (num > 1) {
        operations += 1;
        result *= num;
        num -= 1;
    }

    console.log("[While] operations count:", operations.toLocaleString(), " | O(n)");
    return result;
}
function factorialRecursive(params) {
    if (params.num <= 0) {
        return { num: params.num || 1, operations: params.operations };
    }

    var result = factorialRecursive({ num: params.num - 1, operations: params.operations + 1 });
    return { num: params.num * result.num, operations: result.operations };
}
/* FUNCTIONS */