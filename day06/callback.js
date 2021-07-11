'use strict';

/*
1. 동기와 비동기
자바스크립트는 동기적이다.
hoisting 하고 나서 코드가 하나씩 실행된다.
hoisting : var, function 선언이 제일 위로 올라가는 것
*/
console.log(`1`);
setTimeout(function(){console.log(`2`);},1000);
console.log(`3`);
/* 
콜백함수: 인자로 함수를 넘기고 어떤 조건이 되었을 때 함수를 다시 부르기 때문에 
함수를 나중에 부른다는 의미로 콜백이라고 한다.
*/
setTimeout(()=>console.log(`2`),1000);
/*
이렇게 화살표 함수로 더 많이 쓰인다.

2. 콜백의종류 
ㄱ. Syschronous callback
*/
function printImmediately(print){
  print();
}
printImmediately(()=>console.log(`Hello`));

/*
ㄴ. Asynchronous callback
*/

function printWithDelay(print,timeout){
  setTimeout(print,timeout);
}
printWithDelay(()=>console.log(`async callback`),2000);

/*
3. 콜백 지옥 체험
*/
class UserStorage{
  loginUser(id,password,onSuccess,onError){
    setTimeout(()=>{
      if(
        (id ==='ellie'&&password ==='dream')||
        (id ==='coder'&&password==='academy')
      ){
        onSuccess(id);
      }else{
        onError(new Error('not found'));
      }
    },2000);
  }
  getRoles(user,onSuccess,onError){
    setTimeout(()=>{
      if(user ==='ellie'){
        onSuccess({name:'ellie',role:'admin'});
      }else{
        onError(new Error('no access'));
      }
    },1000);
  }
}
const userstor = new UserStorage();
const idmine= 'ellie';
const passmine='dream';
userstor.loginUser(idmine,passmine,
  (idmine)=>userstor.getRoles(
    idmine,
    (value)=>(console.log(value.role)),
    (str)=>console.log(str)),
    
    (val)=>console.log(val));

const id = prompt('enter id');
const pass = prompt('enter password');

userstor.loginUser(id,pass,(user)=>{
userstor.getRoles(user,(userWithRole)=>{
  alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
},error=>{console.log(error)});
},(error)=>{console.log(error);})


/*
가독성 별로다.
로직 이해가 안된다.
*/