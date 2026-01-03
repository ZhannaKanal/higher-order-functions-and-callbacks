const smallestCommons = ([a, b]) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
    let num = max;
    
    while (true) {
        let ok = true;
        for (let i = min; i <= max; i++){
            if (num % i != 0) {
                ok = false;
                break;
            }
        }
        if (ok) return num;
        num++;
    }
};
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));

