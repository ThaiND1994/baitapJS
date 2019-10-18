// Bài tập
// Khai báo 2 biến x, y nhận giá trị số bất kì
// Khai báo các biến khác và lần lượt gán giá trị tổng, hiệu, tích, thương của x, y cho từng biến.
var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];
function getTopStudents(arr) {
 var a=arr.sort(function(b,c)
 {
   return c.score-b.score;
 })
return a.slice(0,3).map(function(item)
{
 return item.name;
});
}
getTopStudents(students);