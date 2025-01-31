exports.calcAverage = function (grades){
   const summa=  grades.reduce((acc, item)=> acc+item,0 );
   return summa/grades.length;
}