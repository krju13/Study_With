/*
async & await 
깔끔하게 프로미스를 사용하는 방법

1. async
*/
function fetchUser(){
  //do network request in  10 secs...
  return 'ellie';
}

const user =fetchUser();
console.log(user);
/*
10초가 걸리는 일을 하는 동안 함수 안에서 기다리고 나서 유저가 콘솔에 보인다.
*/
function fetchUser2(){
  return new Promise((resolve,reject)=>{
    //do network request in  10 secs...
    return 'ellie';
  });
}
const user2 =fetchUser2();
console.log(user2);
/*
이렇게 했을 때 프로미스의 상태는 pending이 된다.
그래서 프로미스 안에는 무조건 리졸브나 리젝트를 사용해줘야
상태가 바뀐다.
*/
function fetchUser3(){
  return new Promise((resolve,reject)=>{
    //do network request in  10 secs...
    resolve('ellie');
  });
}
const user3 =fetchUser3();
user3.then(console.log);
console.log(user3);

/*
프로미스를 사용하지 않고 간편하게 사용하는 방법
*/
async function fetchUser4(){
  //do network request in  10 secs...
  return 'ellie';
}

const user4 =fetchUser4();
console.log(user4);
/*
async를 사용하면 코드 블럭이 자동으로 프로미스로 바뀐다. 

2. awiait
*/
function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
async function getApple(){
  await delay(3000);
  return '🍎';
}
async function getBanana(){
  await delay(3000);
  return '🍌';
}
/*
await 가 있으면 딜레이가 있을 때 
기다려주는 부분이다.
*/
function pickFruits(){
  return getApple()
  .then(apple =>{
    return getBanana().then(banana => `${apple}+${banana}`);
  });
}

pickFruits().then(console.log);
/*
promise 역시 이렇게 코드가 만들어 지면 콜백 지옥처럼 된다.
*/
async function pickFruits2(){
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple}+${banana}`;
}

pickFruits2().then(console.log);
/*
그럼 에러 헨들링은 어떻게 하나요?


async function pickFruits3(){
 try{ const apple = await getApple();
  const banana = await getBanana();}
  catch(error){
     console.log(error);
  }
  return `${apple}+${banana}`;
}

pickFruits3().then(console.log);

이렇게 에러 헨들링이 가능하다
*/

/*
4. await 병렬 처리
*/
async function pickFruits4(){
   const applePromise = getApple();
   const bananaPromise  = getBanana();
   const apple = await applePromise;
   const banana = await bananaPromise;
  
   return `${apple}+${banana}`;
 }
 
 pickFruits4().then(console.log);
 /*
 사과 프로미스와 바나나 프로미스를 만들어서 바로 실행되도록 하고 await를 붙여준다.
하지만 이 코드는 더러우니까 더 유용하게 만들어 보자.


5. 유용한 Promise APIs
 */

function pickAllFruits(){
  return Promise.all([getApple(),getBanana])
  .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyone(){
  return Promise.race([getApple(),getBanana()]);
}
pickOnlyone().then(console.log);


class UserStorage{
  async loginUser(id,password){
    setTimeout(()=>{
      if(
        (id ==='ellie'&&password ==='dream')||
        (id ==='coder'&&password==='academy')
      )return id;
      else return new Error('login error');
    },2000);
    ;
  }
  async getRoles(user){
    
      setTimeout(()=>{
        if(user ==='ellie'){
          return {name:'ellie',role:'admin'};
        }else{
          return new Error('no access');
        }
      },1000);
    
    
  }
}
function login(){

}
const userStorage = new UserStorage();
const id = prompt('enter id');
const pass = prompt('enter password');
const user5 = await userStorage.loginUser(id,pass);
const role = await userStorage.getRoles(user5);
alert(`Hello ${role.name}, you have a ${role.role} role`);
