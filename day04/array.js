'use strict';
/*
Array

1. Declaration 선언하는 방법
*/
const arr1 = new Array();
const arr2 = [1,2];

/*
2. Index position
INDEX POSITION으로 어떻게 접근하는지 잘 알아야 한다.
*/
const fruits =['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[3]); //= undefined
console.log(fruits[fruits.length -1]);//last one

/*
3. Looping over an array
print all fruits
a.just for
*/

for(let i =0 ;i<fruits.length;i++){
  console.log(fruits[i]);
}
//b.for of
for(let val of fruits){
  console.log(val);
}
//c. forEach
fruits.forEach((fruit)=>console.log(fruit));


/*
4. Addition, Deletion, copy
push: add an item to the end
*/
fruits.push('🍓','🍊');
console.log(fruits);
/*
pop: remove an item to the end
*/
fruits.pop();
console.log(fruits);

/*
unshift :add an itme to the beginning
*/
fruits.unshift('🍑');
console.log(fruits);

/*
shift : remove an item form the beginnig
*/
fruits.shift();
console.log(fruits);
/*
note!!! shift and unsift are slower than pop,push
splice: remove an item by index position
*/
fruits.push('🥑','🍅','🍍');
console.log(fruits);
fruits.splice(1);
console.log(fruits);
/*
splice 는 시작 인덱스만 정하면 뒤에를 모두 지운다.
*/
fruits.push('🥑','🍅','🍍');
console.log(fruits);
fruits.splice(1,1,'🍏','🫐');
console.log(fruits);

fruits.splice(1,0,'🍏','🫐');
/*
이렇게 쓰면 데이터를 지우지 않고 중간에 넣기만 할 수 있다.
combine two arrays
*/
const fruits2 = ['🥥','🥝'];
const newFruits=fruits.concat(fruits2);
console.log(newFruits);

/*
5. Searcing
find the index
*/
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍏'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.includes('🍓'));
console.log(fruits.includes('🍎'));


/*
lastIndexOf
같은 데이터가 두개이면 어떻게 될까?
indexOf는 첫번째 데이터를 출력한다.
lastIndexOf는 마지막 데이터를 찾아준다.
*/
console.log(fruits);
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));



