/*
 Write a JavaScript function to convert a Unix timestamp to time.

Test Data :
console.log(Unix_timestamp(1412743274));
"6:41:14"
*/
function Unix_timestamp(t)
{
const dt = new Date(t*1000);
const hr = dt.getHours();
const m = "0" + dt.getMinutes();
const s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
}
console.log(Unix_timestamp(1412743274));
