const input =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
function solution(input) {
  const partOne = input.toLowerCase().replace(/,/g, "").split(" ");
  console.log(partOne);
  const partTwo = partOne
    .map((item) => item.split(""))
    .sort((a, b) => b.length - a.length);
  console.log(partTwo);
  const finalSol = partTwo
    .sort(
      (itemMap, itemMap2) =>
        itemMap2.filter((item) => item === ("e" || "a" || "i")).length -
        itemMap.filter((item) => item === ("e" || "a" || "i")).length
    )[0]
    .join("");
  console.log(finalSol);
  return finalSol;
}
solution(input);
