function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i][pre]) {
      return true;
    }
  }
  return false;
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
