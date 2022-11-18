for (var main_index = 0; main_index < finances.length; main_index++) {}
console.log("Total months: " + main_index);

var finalSum = 0;
for (var numbers = 0; numbers < finances.length; numbers++) {
  var allNumbers = finances[numbers][1];
  finalSum += allNumbers;
}

var average = Math.round(finalSum / finances.length);

console.log("The average profit was £" + average);

var total = 0;
for (var totalProfits = 0; totalProfits < finances.length; totalProfits++) {
  total += finances[totalProfits][1];
}

console.log("The net total amount of losses and profits was " + "£" + total);

var highestProfit = 0;
var lowestProfit = 0;
var highestProfitDate = "";
var lowestProfitDate = "";

for (var i = 0; i < finances.length; i++) {
  if (finances[i][1] > highestProfit) {
    highestProfit = finances[i][1];
    highestProfitDate = finances[i][0];
  }
  if (finances[i][1] < lowestProfit) {
    lowestProfit = finances[i][1];
    lowestProfitDate = finances[i][0];
  }
}

console.log(highestProfit, highestProfitDate);
console.log(lowestProfit, lowestProfitDate);
