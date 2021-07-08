//function
//프로그램을 구성하는 하나의 블럭(building block)
//서브 프로그램이라고 불리고 여러번 재사용이 가능하다.
//한가지의 일이나 계산을 위한 일을 한다.

//1. 함수 선언방법
//function 함수이름(파라메터,,,){몸,,, return;}
//하나의 함수는 한가지 알만 하도록 만들기!!!!!(별 100개)
//함수이름 짓기: 동사, command, doSomething
//일 여러개 하고 있어서 이름짓기 어려운거 아닌가 생각해보기
//자바스크립트에서 함수는 객체여서 함수도 전달이 가능하다.

function printHello(){
  console.log('Hello');
}
printHello();
function log(message){
  console.log(message);
}
log('Hello@');
log(123);
//자바스크립트 함수의 안 좋은 점은 
//넘어가는 파라메터가 어떤 타입인지 정해지지 않아서 아무 타입이나 넘어갈 수있다.


//2. 파라메터
// 프리미티브 타입은 값이 전달된다.
// 객체 타입은 reference = 주소가 전달된다.
function changeNmae(obj){
  obj.name='coder';
}

const ellie= {name:'ellie'};
changeNmae(ellie);
console.log(ellie);


//3. Default parameter( added in ES6)
function showMessage(message, from){
  console.log(`${message} by ${from}`); 
}
showMessage('HI');

//ES6에 추가된 문법
//파라메터에 아무 값도 전달되지 않을 경우 원래는 undefined 로 정의 되지만
//from 에 아무값도 전달되지 않을 때 
//from = 'unknown' 으로 
//파라메터 값이 들어가게 한다.
function showMessage(message, from= 'unknown'){
  console.log(`${message} by ${from}`); 
}
showMessage('HI');

//4. Rest parameters (added in ES6)
function printAll(...args){
  for(let i = 0; i< args.length;i++){
    console.log(args[i]);
  }
}
printAll('dream', 'love', 'you');

//...으로 들어가는 변수는 배열이 된다. 
//그래서 반복문으로 접근이 가능하다.

/*
배열 출력 시
for (const arg of args){
  arg어쩌고;;;
}
라는 for of 문이 있다. 
*/

//5. Local scope
let globalMessage = 'global';//global variable
function printMessage(){
  let message = 'hello';
  console.log(message);//local variable
  console.log(globalMessage);
}
printMessage();

/*
밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
이 문장을 잘 기억하자
지역 변수는 안에서만 접근이 가능하고 
밖에서 접근하면 오류가 발생한다. 
*/
function printMessage1(){
  let message = 'hello';
  console.log(message);//local variable
  console.log(globalMessage);
  function printAnother(){
    console.log(message);
    let children='hello';
  }
  console.log(children);//ERROR
}
printMessage1();
/**
함수 안에 함수를 만들어서 안에있는 함수를 자식이라고 하면
자식은 부모한테 있는걸 접근 가능하지만
부모는 자식에게 있는 것은 접근이 불가능하다. 

 */

//6. Retrun a value
function sum(a,b){
  return a+b;
}
const result = sum(1,2);//3
console.log(`sum: ${sum(1,2)}`);
/*
함수에서는 리턴이 있는데 
리턴타입이 없는 함수는 
return undefined;
이 문장이 들어간 것과 같다.
이 문장은 생략이 가능하다.

*/

//7. 현업에서의 팁 = Early return, early exit
//bad
function upgradeUser(user){
  if(user.point>10){
    //long ungrade logic...
  }
}
//good
function upgradeUser2(user){
  if(user.point<=10){
    return ;
  }
  //long logic
}
/*
조건 안에서 빨리 리턴하는게 좋다.
*/

/*
여기서 다른 함수 종류를 배우기 전에 
지금까지의 함수는 first-class function이다
이 함수는 다른 변수와 같이 다뤄지고,
변수로 할당이 가능하고 
파라메터로 넘길수있고
리턴으로 넘길 수있다고 했는데
*/

/**
Function expression
함수 선언 = hoisted가 되서 어디서나 부를 수있지만
함수 표현식(?)은 선언하고 나서 쓸 수 있다.

 */

print();//ERROR!!
const print = function(){//함수 이름 없이 필요한 부분만 작성된 함수는 anonymous function
  consolge.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain=sum;
console.log(sumAgain(1,3));

/*
콜백 함수
*/
function randomQ(answer , printYes, printNo){
  if(answer ==='love you'){
    printYes();
  }else{
    printNo();
  }
}
const printYes=function(){
  console.log('yes!');
}
//함수 이름을 적어주면 디버깅할 때 함수 이름이 나와서 좋다.
//재귀 함수를 부를 때 이름을 쓸 수 있다.
const printNo=function print2(){
  console.log('no!');
}
randomQ('w',printYes,printNo);
randomQ('love you',printYes,printNo);


/**
 Arrow function 
 은 항상 anonymous 함수다
활신 간결하게 쓸수 있다.
 */
const simplePrint = function(){
  console.log('simple!');
}
const simplePrint = () => console.log('simple');
const add = (a,b) => a+b;


/*
IIFE
함수를 만들자 말자 호출하는 방법
*/
(function hello(){
  console.log('IIFE');
})();