/*
Objects
one of the JavaScript's data types.
a collection of related data and/or functionality
Nearly all objects in JavaScript are instances of Object
객체는 자바스크립트 데이터 타입의 한 종류이다
관련있는 데이터와 함수의 모음인데 함수는 포함될 수도 아닐 수도 있다.
모든 자바스크립트의 객체는 Object의 인스턴스다.

1. Literals and properties
*/
const name = 'ellie';
const age = 4;
/*
프리미티브 타입에는 값이 하나만 들어갈 수 있다.
하지만 프리미티브 변수가 많아지면 함수에 값을 넘겨주거나 프린트할 때 다 제각각 놀기 때문에 불편하다.
불편한 예제
*/
print(Firstname,Lastname,age);
function print(Firstname,Lastname,age){
  console.log(Firstname);
  console.log(Lastname);
  console.log(age);
}
const ellie = {name : 'ellie',age :4};
function print(person){
  console.log(person.name);
  console.log(person.age);
}
print(ellie);
/*
객체로 묶어서 하나만 넘겨줘도 객체의 데이터에 접근할 수 있다.
객체 만드는 방법
*/
const obj1 ={};
const obj2=new Object();
/*
1. object literal ( {}으로 객체를 바로 만드는 방법)
2. object constructor ( new 클래스로 객체를 만드는 방법)
자바스크립트에서 할 수 있는 신기한 일이지만 
유지보수에 좋지 않은 일
1. 객체에 동적으로 요소를 추가할 수 있다.
이미 정의한 ellie에 대해서 코딩하다가 보니 
직업이 있는지 변수로 만들고 싶다면 나중에도 추가할 수 있다.
*/
ellie.hasJob = true;
console.log(ellie.hasJob);
/*
2. 객체에 요소 삭제도 가능하다.
또 마음이 바껴서 ellie에 hasJob이 없어져도 된다면
*/
delete ellie.hasJob;
/*
여기서 포인트 
오브젝트는 key와 value 의 집합체이다


2. Computed properties
*/
console.log(ellie.name);
console.log(ellie['name']);
/* '.'으로도 객체 property에 접근이 가능하고
[]로도 객체 property에 접근이 가능하다. 
[]로 접근하는 것을 Computed property라고 한다.
주의점: key는 무조건 String 타입이여야 한다.
새로운 property를 넣는 방법으로도 쓰일 수 있다.
*/
ellie['hasJob']=true;
console.log(ellie.hasJob);
/*
어떤 경우에 dot,Computed property를 다르게 쓰나요??
dot은 코딩할 때 어떤 key인지 정확하게 아는 경우
Computed property는 어떤 key가 오게 될지 모르는 경우
이렇게 나눠서 쓴다. 
예를 들면
*/
function printValue(obj,key){
  //console.log(obj.key);//ERROR
  console.log(obj[key]);
}
printValue(ellie,'name');


//3. property vlaue shorthand
const person1 = {name: 'bob', age:2};
const person2 = {name:'steve',age:3};
const person3 = {name:'dave',age:4};
const person4 = {name:''};// 귀찮잖아...

function makePerson(name,age){
  return{
    name,
    age,
  }
}
const person5 = makePerson('ellie',30);
console.log(person5);
/*
object를 만드는데 매번 키와 벨류를 적어 줬어야 했는데
함수를 이용해서 값만 넘겨주면 object를 만들어 주는 유용햔 함수를 만들었다. 
여기서 makePerson() 은 클래스 같은 템플릿이고
이렇게 object를 만드는 함수는 largeAlphabet으로 시작하고
안에서는 this.name= name을 쓰도록 해야한다. 
예:
*/
function Person(name,age){
  this.name=name;
  this.age=age;
}
/*
호출할 때도 클래스처럼  new 키워드를 쓴다
*/
const person6 = new Person('ellie',29);

/*
생략 된 것을 적으면 이렇게 된다.
*/
function Person(name,age){
  //this = {}
  this.name = name;
  this.age=age;
  //return this;
}
/*
이런 함수를 Constructor Function이라고 한다.

5. in operator : object안에 해당 키가 있는지 없는지 확인하는 것
*/
console.log('name' in ellie);//T
console.log('age' in ellie);//T
console.log('random' in ellie);//F
console.log(ellie.random);//undefined

/*
6. for..in vs for..of
for(key in obj)
*/
for(key in ellie){
  console.log(key);
}
/*
ellie 안에 있는 key들이 변수 key에 들어가게 된다.

for (value of iterable)
배열, 리스트등을 쓴다.
*/
const array = [1,2,4,5];
for(let i =0; i<array.length;i++){
  console.log(array[i]);
}
/*
bad
*/
for(value of array){
  console.log(value);
}

/*
7. Fun cloning
object.assign(dest,[onj1,obj2,obj3...])
*/
const user = {name: 'ellie',age:'20'};
const user2 = user;
user2.name='coder';
console.log(user);//coder

//old way
const user3 ={};
for(key in user){
  user3[key]=user[key];
}
console.log(user3);
 
//new way
const user4={};
Object.assign(user4,user);
console.log(user4);

const user5 = Object.assign({},user);

/*
다른 예시
*/
const fruit1 = {color:'red'};
const fruit2 = {color:'blue',size:'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);
/*
답 : blue, big
이유: assign 함수 에서 뒤에 나올 수록 영향력이 커서 앞에 같은 요소는 덮어 씌운다.
*/
