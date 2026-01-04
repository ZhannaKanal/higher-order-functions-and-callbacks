function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
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
console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "data"
  )
);
