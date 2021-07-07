//1. String concatenation
console.log('my'+ ' cat');
//문자열 끼리 더하기 가능
console.log('1'+ 2);
//문자열 더하기 숫자는 숫자가 문자로 바뀐다.
console.log(`string :1 + 2 = ${1+2}`);
//`(1옆에 원 표시 = 백틱)을 쓰면 '(싱글코테이션)을 써도 다 된다.
console.log('ju\'s books');
//같은 싱글코테이션 안에 또 있어서 인식 안될때는 /(백슬레쉬)쓰면 된다
console.log('\n\tjjj');
// \n = 줄바꿈 \t는 탭












// 2. Numeric operators
console.log(1+1); //더하기
console.log(1 - 1);//빼기
console.log(1 /1 );//나누기
console.log(1 * 1);//곱하기
console.log(5 % 3);//나머지
console.log(2 ** 3);//제곱

// 3. 증가 감소 연산자
let counter=2;
const preIncrement = ++counter;
//counter = counter +1;
//preIncrement = counter;
console.log(`preIncrement :${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter +1;
console.log(`postIncrement :${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement :${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement :${postDecrement}, counter: ${counter}`);


//4. 할당 연산
let x = 3;
let y = 6;
x +=y ; // x= x+y;를 줄여서 쓰는거
x -=y ;
x*=y;
x/=y;

//5. 비교 연산
console.log(10 < 6);//작거나
console.log(10 <= 6);//작거나 같거나
console.log(10 > 6);//크거나
console.log(10 >= 6);//크거나 같거나

//6. 논리 연산 ||, &&, !
const value1 = true;
const value2= 4<2;
//or 연산은 처음으로 true가 나오면 멈춘다!.
console.log(`or: ${value1 ||value2 ||check()}`);
//이럴 때 무거운 함수같은 거는 뒤에 둬야 지적질 안당한다구!
function check(){
  for(let i =0;i<10;i++){
    //wasting time
    console.log('꺅');
  }
  return true;
}
console.log(`and: ${value1 &&value2 &&check()}`);
//and 연산은 객체가 null인지 아닌지 먼저 확인할 때도 많이 사용된다.
// object && object.something 이런 식으로

// ! (not )
// 값을 바꿔준다


//7. Equality  = 
console.log(7)
const str5 ='5';
const num5 = 5;
// == loose equal 타입 상관 없이!
console.log(str5 == num5);
console.log(str5 != num5);

//=== strict equal 타입도 신경써서!
console.log(str5 === num5);
console.log(str5 !== num5);

//object = reference 로 비교하기
const ell1 = {name:'ell'};
const ell2 = {name:'ell'};
const ell3 = ell1;
console.log(ell1 == ell2);//f
console.log(ell1 === ell2);//f
console.log(ell1 === ell3);//t

console.log(0 == false);//t
console.log(0 === false);//f
console.log('' == false);//t
console.log('' === false);//f
console.log(null == undefined);//t
console.log(null === undefined);//f


//8. if, else if, else
const name = '???';
if(name === 'ell'){
  console.log('HI, ell');
}else if(name =='coder'){
  console.log('You are coder');
}else{
  console.log('how are u?');
}

//9.3중 연산
// 조건? 값1: 값2
//조건이 참이면 값1, 거짓이면 값2;
console.log(name === '???'? 'yes':'no');

//10. 스위치 문
//여러개의 if를 해야할 때 
//TS에서 enum을 비교해야할 때 쓰기 좋다.

const browser ='IE';
switch(browser){
  case 'IE':
    console.log('go away');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love u');
    break;
  default:
    console.log('same all!');
    break;
}

//11. 반복문
//조건에 맞는지 확인하고 그 몸체를 계속 반복한다.
//while(조건 ){몸}
let i = 3;
while(i>0){
  console.log(i);
  i--;
}
//do {몸}while(조건)  일단 실행하고 조건 체크하기
i=3;
do{
  console.log(i--);
}while(i>0);
//for(시작; 조건; step단계){몸}
for(i=3;i>0;i--){
  console.log(i);
}
for(let i=3;i>0;i=i-2){
  console.log(i);
}

//nested loops
for(let i=0;i<10;i++){
  for(let j=0;j<10;j++){
    console.log(`i: ${i}, j:${j}`);
  }
}

//break, continue
//Q1.짝수일 때 continue 0 ~10;
for(let i=0;i<=10;i++){
  if(i%2==0)continue;
  console.log(i);
}
for(let i=0;i<=10;i++){
  if(i%2!=0)
{  console.log(i);}
}
//이게 더 좋은 코드
//Q2. 8만나면 break;
for(let i=0;i<=10;i++){
  if(i==8)break;
  console.log(i);
}