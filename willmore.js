let calculate = (a,b) => a*b;
console.log(calculate(2,3));

let subtract = async(x,y) => {
    for (let i = 0; i < 100000000000; i++){
        Math.sqrt(i);
    }
    return x- y;
}

console.log(subtract(10, 2));
console.log(subtract(10, 3));
console.log(subtract(10, 4));
console.log(subtract(10, 5));
console.log(subtract(10, 6));
console.log(subtract(10, 2));

// Immediately invoked function Expression(IIFE)
let value = "";

(function(){
    console.log("Hello from IIFE")
})();

(()=>{
    "hello from Arrow IIFE"
})
console.log();

