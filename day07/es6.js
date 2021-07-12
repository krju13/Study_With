/*
Shorthand property names

*/

{
  const ellie1 ={
    name: 'Ellie',
    age:'18',
  };
  const name = 'Ellie';
  const age ='18';

  //bad
  const ellie2 ={
    name:name,
    age:age,
  };
//good
  const ellie3{
    name,
    age,
  };
}
/*
Destructuring Assignment
*/
{
  //object 
  const student ={
    name:'Anna',
    level:1,
  };

  //bad
  {
    const name = student.name;
    const level = studnet.level;
    console.log(name,level);
  }
  //good
  {
    const {name, level} = student;
    //객체 이름이랑 똑같으면 바로 찾아 들어간다.
    console.log(name,level);

    const {name:studnetName,level:studentLevel}=student;
    //변수이름이랑 객체안의 요소이름 다르게 하고 싶으면 : 로 지정해주기
    console.log(studnetName,studentLevel);
  }

  //array 역시 사용 가능하다.
  const animals =['🐶','🐱'];
  {
    const first =animals[0];
    const second = animals[1];
    console.log(first,second);
  }
  //good
  {
    const [first,second]=animals;
    //배열 순서대로 들어간다.
    console.log(first,second);
  }


}

/*
Spread Syntax
*/
{
  const obj1 = {key:'key1'};
  const obj2 = {key:'key2'};
  const array = [obj1,obj2];

  //array copy
  const arrayCopy =[...array];//... array 안에 아이들이 하나씩 접근하는 것
  console.log(array,arrayCopy);
  
  const arrayCopy2 = [...array,{key:'key3'}];
  /*
  이때 ...array로 들어오는 아이들은 레퍼런스만 들어가기 때문에 
  다 같은 아이들이고 한 곳에서 바꾸면 다 같이 바뀐다.
  */
 arrayCopy[0].key='kara';
 console.log(array,arrayCopy2);

 /*
 추가로 오브젝트도 복사할 수 있다.
 */
const obj3 = {...obj1};
console.log(obj3);
/*
배열을 병합 하는 것도 가능하다.
*/
const fruits1 = ['peach','strawberry'];
const fruits2 = ['banana','kiwi'];
const fruits = [...fruits1,...fruits2];
console.log(fruits);

/*
객체 병합도 가능하다.
*/
const dog1 = {dog1:'dog'};
const dog2= {dog2:'🐶'};
const dog =[...dog1,...dog2];
console.log(dog);
/*
키가 동일하면 뒤에 있는 아이가 값을 덮어씌운다.*/

}

/*
Defalt parameters
*/
{
  {
    function printMessage(message = 'defalut'){
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }
}
/*
Ternary Operator
*/
{
  const isCat = true;
  //bad
  {
    let componet;
    if(isCat){
      componet='🐱';
    }else{
      componet='🐶';
    }
    console.log(componet);
  }
  //good
  {
    const component = isCat ?'🐱':'🐶';
    console.log(component);
  }
}
/*
Template Literals
*/
{
  const weather ='🌤';
  const temparature = '16C';
  //bad
  console.log(
    `Today weather is ${weather} and temparature is ${temparature}.`
  );
}