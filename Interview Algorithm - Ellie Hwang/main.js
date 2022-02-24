function getRangeReport(start, end) {
  var rangeReport = {};
  var total = 0;
  var odds = [];
  var evens = [];
  var rangeArr = [];
  var count = null;
  for (let i = start; i <= end; i++) {
    total += i;
    rangeArr.push(i);
    count++;
    if (i % 2 === 1) {
      odds.push(i);
    } else if (i % 2 === 0) {
      evens.push(i);
    }
  }
  rangeReport.total = total;
  rangeReport.odds = odds;
  rangeReport.evens = evens;
  rangeReport.range = rangeArr;
  rangeReport.average = total / count;
  return rangeReport;
}

getRangeReport(5, 10);
