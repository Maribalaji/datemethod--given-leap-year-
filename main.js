 var date=new Date();
 
date.setFullYear(2020);
var leap=date.getFullYear();

// console.log(leap)

if(leap%4==0){
    document.write("This year is leap year");
}
else{
    document.write("This year is not leap year")
}
