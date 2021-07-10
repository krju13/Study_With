/*
1. Object to JSON
*/
let json = JSON.stringify(true);
console.log(json);

json =JSON.stringify(['apple','banana']);
console.log(json);

const rabbit ={
  name : 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump:()=>{
    console.log(`${name} can jump!`);
  },
};
json = JSON.stringify(rabbit);
console.log(json);
/*
함수는 제외된다.
심볼처럼 자바에만 있는 것은 역시 제외된다.
*/
json = JSON.stringify(rabbit,["name"]);
console.log(json);
/*
내가 원하는 데이터만 바꾸고 싶을 때 그 key를 배열로 넘겨주면 그것만 만든다
*/
json = JSON.stringify(rabbit,(key,value)=>{
  return key === 'name'?'ellie':value;
});
console.log(json);

/*
2. JSON to Object 
*/
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
/*
다시 만든 곳에 함수가 들어가지 않아서 함수는 부를 수 없다.
*/
// obj.jump();


const obj2 = JSON.parse(json,(key,value)=>{
  return key ==='birthDate'?new Date(value):value;
});
console.log(obj2);