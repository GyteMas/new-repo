/*
Write a JavaScript function to get the minimum date from an array of dates. 

Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
*/
function min_date(all_dates) {
  let min_dt = all_dates[0];
  let min_dtObj = new Date(all_dates[0]);

  all_dates.forEach(function (dt) {
    var current_dtObj = new Date(dt);

    if (current_dtObj < min_dtObj) {
      min_dt = dt;
      min_dtObj = new Date(dt);
    }
  });

  return min_dt;
}

console.log(min_date(["2015/02/01", "2015/02/02", "2015/01/03"]));
