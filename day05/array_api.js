/*
1. 주어진 배열을 스트링으로 변환해라
*/
{
  const fruits=['apple','banana','orange'];
  let str=fruits.join(' ');
  console.log(str);
}
/*
2. 주어진 스트링을 배열로 만들어라
*/
{
  const fruits = '🍎,🥝,🍌,🍒';
  const arr=fruits.split(',');
  console.log(arr);
}
/*
3. 주어진 배열의 순서를 거꾸로 만들기
*/
{
  const array = [1,2,3,4,5];
  console.log(array.reverse());
  console.log(array);
  
}
/*
배열 자체의 값을 바꾼다. 
4. 배열의 첫번째 두번째 요소를 뺀 새로운 배열을 만들어라
*/
{
  const array = [1,2,3,4,5];
  const array2= array.slice(2);
  console.log(array);
  console.log(array2);
}
class Student{
  constructor(name,age,enrolled,score){
    this.name=name;
    this.age=age;
    this.enrolled=enrolled;
    this.score=score;
  }
}
const student=[
  new Student('A',29,true,45),
  new Student('B',28,false,80),
  new Student('C',30,true,90),
  new Student('D',40,false,66),
  new Student('E',18,true,88),

]
/*
5. 점수가 90점인 학생 찾기
*/
{
  const result = student.find((student)=>student.score===90);
  /*
  함수에서 true가 나오는 처음 요소를 반환한다. 
  */
  console.log(result);
}

/*
6. 학생 중에서 수업에 등록한 학생만 골라서 배열로 만들어라
*/
{
  const result = student.filter((student)=>student.enrolled);
  console.log(result);
}
/*
7. 학생 배열에서 점수만 빼서 배열로 만들기
정답: [45,80,90.66.88]
*/
{
  const result = student.map((student)=>student.score);
  console.log(result);
  /*
  각 요소를 함수를 통과해서 새로운 값으로 나온다. 
  */

}
/*
8.50점보다 낮은 점수를 가진 학생이 있는지 없는지 확인하라
*/
{
  const result = student.some((student)=>student<50);
  console.log(result);
  const result2 = student.every((student)=>student.score>=50);
  console.log(result2);
}
/*
9. 학생 점수의 평균을 구해라
*/
{
  const result = student.reduce((prev,curr)=>prev+curr.score,0)/student.length;
  console.log(result);
  /*
  콜백함수를 넘기고, 처음 값을 넘긴다. 함께 누적된 값을 전달한다. 
  */
}
/*
10. 학생들의 모든 점수를 스트링으로 바꿔라.
*/
{
  const result= student.map(student=>student.score);
  const result2 = result.sort((a,b)=>a-b).join(' ');
  console.log(result2);
}