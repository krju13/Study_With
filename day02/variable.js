//use this for Valina Javascript.
'use strict';

//2. Variable
//let (added in ES6)
let globalName = 'global name';
{
  let name= 'ellie';
  console.log(name);
  name= 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);


// 3. Constans
// favor immutable data type always
// - 보안
// - 쓰레드 세이프티 : 앱 안의 프로세스에서 동시 
//   쓰레드들이 값을 바꿀 수 있는데  
//   이런 경우를 없애준다.
// - 개발자의 실수를 방지
const daysInWeek = 7;


//4. 
//변수의 종류
//primitive : 더이상 나누어지지 않는 제일 작은 변수
//          : number, string, boolean, null, undefined, symbol
//object : 프리미티브를 여러개 묶은거
//function : first-class funciton = 함수를 전달하고 파라메터로 받고 다 됨
const count = 17;
const size = 17.1;
console.log('value : ${count}, type: ${typeof count}');
console.log('value : ${size}, type: ${typeof size}');

const infinity = 1 /0; //양수를 0으로 나누면
const negativeinfinity = -1/0; //음수를 0으로 나누면
const nAn = 'not number '/2;//숫자가 아닌 경우
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

//bigInt (새로 나왔다.)
const bigint = 123123123123123123123123123n;
console.log('value : ${bigint}, type: ${typeof bigint}');

//string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log('value : ${greeting}, type: ${typeof greeting}');
const hiBob = 'hi ${brendan}!';
console.log('value : ${hiBob}, type: ${typeof hiBob}');


//boolean
//false : 0, null, undefined, NaN, ''
//true : any other value
const canRead = true;
const test = 3<1;//false
console.log('value : ${canRead}, type: ${typeof canRead}');
console.log('value : ${test}, type: ${typeof test}');

//null
let nothing = null;
console.log('value : ${nothing}, type: ${typeof nothing}');
//undefined
let x;
console.log('value : ${x}, type: ${typeof x}');

//symbol. 식별자를 만들어줄때, 우선순위 주고 싶을 때
//string = 다른파일에서 쓴 문자랑 같다고 인식하지만 
//식별자는 같은 걸로 써도 다른걸로 인식한다. 
const symbol1= Symbol('id');
const symbol2= Symbol('id');
console.log(symbol1===symbol2);//false
//똑같은 심볼을 만들고 싶을 때
const gsymbol1= Symbol.for('id');
const gsymbol2= Symbol.for('id');
console.log(gsymbol1===gsymbol2);//true
console.log('value : ${symbol1.description}, type: ${typeof symbol1}');
//심볼을 문자로 출력하고 싶으면 .description이 필요하다.




//5. Dynamic typing : dynamically typed language;
//변수에 타입을 런타임에서 정하게 되는 것을 말한다. 
let text = 'hello';
console.log(text.charAt(0));
console.log('value : ${stext}, type: ${typeof text}');
test =1;
console.log('value : ${text}, type: ${typeof text}');
text = '7' +5; //숫자를 문자로 생각하고 더해준다.
console.log('value : ${text}, type: ${typeof text}');
text = '8'/'2';//문자 안에 숫자만 있는데 나누기를 쓰면 숫자로 연산한다.
console.log('value : ${text}, type: ${typeof text}');
console.log(text.charAt(0));
// 그래서 나온 언어가 타입 스크립트이다. 


