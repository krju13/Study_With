"use strict";

/*
비동기를 위해 콜백 대신 사용한다.

1. state 상태 
pending -> fulfiled or rejected
Producer vs Consumer 
2. Producer vs Client 
promise execute함수를 만드는데 이 함수는 파라메터를 두개 받는다.
2개의 콜백 함수르 받는다.
성공했을 때 동작하는 함수 resolve
실패했을 때 동작하는 함수 reject
*/
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files)
  console.log("doign somethis...");
  setTimeout(() => {
    resolve("ellie");
  }, 2000);
});
/*
만들자말자 바로 이 함수가 실행되는 걸 볼 수 있다.
excuter 안에 불필요한 통신이 없도록 잘 생각해야한다. 

2. Consumers: then, catch, finally
promise가 잘 수행된다면 then,
value는 resolve함수의 파라메터로 들어온다.
*/

promise.then((value) => {
  console.log(value);
});
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files)
  console.log("doign somethis...");
  setTimeout(() => {
    //resolve('ellie');
    reject(new Error("no network"));
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

/*
3. promise chaining
*/
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
/*
then 은 값을 전달해도 되고 프로미스를 전달해도 된다

4. 오류를 잘 처리하자

*/
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("dot"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => Egg`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> fri`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

getHen()
  .then(getEgg)
  .then(cook)
  .then(console.log);


const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => Egg`), 1000);
  });

getHen()
  .then(getEgg)
  .catch(error =>{
    return 'bread';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);


/*
지난 시간 만든 별로인 거를 이쁘게 만들어보자!
*/
class UserStorage{
  loginUser(id,password){
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
      if(
        (id ==='ellie'&&password ==='dream')||
        (id ==='coder'&&password==='academy')
      ){
        resolve(id);
      }else{
        reject(new Error('not found'));
      }
    },2000);
    });
  }
  getRoles(user,){
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(user ==='ellie'){
          resolve({name:'ellie',role:'admin'});
        }else{
          reject(new Error('no access'));
        }
      },1000);
    })
    
  }
}

const userStorage = new UserStorage();
const id = prompt('enter id');
const pass = prompt('enter password');
userStorage.loginUser(id,pass)
  .then(userStorage.getRoles)
  .then(user =>alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`))
  .catch(console.log);