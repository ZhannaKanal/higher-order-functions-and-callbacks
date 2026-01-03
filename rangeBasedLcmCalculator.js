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
    }
};
console.log(smallestCommons([1, 5]));

