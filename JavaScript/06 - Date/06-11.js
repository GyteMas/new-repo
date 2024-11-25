/*
 Write a JavaScript function to get the maximum date from an array of dates.

Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
*/
function max_date(all_dates) {
  let max_dt = all_dates[0];
  let max_dtObj = new Date(all_dates[0]);

  all_dates.forEach(function (dt) {
    var current_dtObj = new Date(dt);

    if (current_dtObj > max_dtObj) {
      max_dt = dt;
      max_dtObj = new Date(dt);
    }
  });

  return max_dt;
}

console.log(max_date(["2015/02/01", "2015/02/02", "2015/01/03"]));
