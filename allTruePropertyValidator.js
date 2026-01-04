function truthCheck(collection, pre) {
  const result = [];
  const val = pre;
  for (let i = 0; i < collection.length; i++) {
    result.push(collection[i][pre]);
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i]) {
      return true
    } else {
      return false
    }
  }
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
