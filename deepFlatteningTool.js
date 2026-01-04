const steamrollArray = (...array) => { }
console.log(steamrollArray([1, {}, [3, [[4]]]]))
console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([[["a"]], [["b"]]]))