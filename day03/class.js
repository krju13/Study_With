"use strict";

/*
Object-oriendted programmig
class: template
object: instance of a class
JavaScrpt classes
- introduced in ES6
(소개 되기 전에는 클래스 없이 바로 객체를 만들기도 하고 객체를 만들 때 함수로 템플릿을 만드는 방법도 있었다.)
- syntactical sugar over prototype-based inheritance
원래 없던 거였는데 프로토타입 베이스로 사용하기 편하게 문법만 추가 되었다.
*/
//1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
/** new 라는 키워드로 객체를 만든다. */
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

/**2. Getter and setters */
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age(){
    return this.age;
  }
  set age(value){
    this.age=value;
  }
}
const user1 = new User('Steve','Job',-1);
console.log(user1.age);
/**
사람의 나이가 -1이라니 일어날 수 없는 일인데 
코드상에서 일어나고 있다.
이렇게 개발자나 사용자가 실수를 할 때
이런 일이 일어나지 않도록 해주는 것이 
Getter 와 Setter 이다 
 */

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    /*공격적으로
    if(value <0 ){
      throw Error(`age can not be negative`);
    }*/

    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

/**
 3. Fields (public, private)
 너무 최근에 개발되어서 개발자들이 많이 사용하지는 않지만 알아두자!
 생성자 없이 필드를 정의할 수 있다.
 그냥 정의하면 : public
 앞에 '#'를 붙이면 : private 
 private 은 클래스 내부에서만 값을 정의하고 접근하고 변경하고 사용이 가능하지만 밖에서는 사용할 수 없다.

 */
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.pricateField);

/**
 4. Static 
 이것도 아직은 나온지 얼마 안된 문법
 */
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
/**
 객체를 만들면 필드와 함수를 복사하지만
 매번 복사하지 않고 언제나 필요한 값이 있다면 static으로 만들어준다.
 */
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); //Dream Coding
/**
 static은 클래스 자체로만 있기 때문에 객체에서는 접근해도 먼지 모른다. 
 그냥 undefined라고 나오게 된다.
 그래서 static 메소드를 부를때도 클래스로 바로 접근해야한다.
 */
Article.printPublisher();
/**
 즉 객체에 상관없이 공통적으로 클래스에서 사용할 수 있는 것은
 STATIC 으로 만들어주면 메모리의 사용을 줄여줄 수 있어서 좋다

 */
/**
 상속
 화면에 도형들을 그리는 어플리케이션을 만들었다면
 각 도형마다 높이, 넓이, 색깔 그런 필드들이 다 필요한데
 매번 사각형을 만들 때도 높이, 색깔, 넓이를 만들고
 삼각형을 만들 때도 높이, 색, 넓이를 넣고
 원을 만들 때도 높이, 색, 넓이를 넣는 것 보다
 shape이라는 클래스를 만들어서 여기 안에 있는 것을 쓴다면
 더 편리하기 때문에 생겨난 것

 */
class Shape{
  constructor(width,height, color){
    this.width = width;
    this.height=height;
    this.color= color;
  }
  draw(){
    console.log(`drawing ${this.color} color!`);
  }
  getArea(){
    return width * this.height;
  }
  
}

class Rectangle extends Shape{}
class Triangle extends Shape{}
const rectangle = new Rectangle(10,10,'blue');
rectangle.draw();
const triangle = new Triangle(10,10,'red');
triangle.draw();
/*
즉 동일하게 사용되는 부분은 모아서 한개만 만들어주면 되도록
*/
console.log(rectangle.getArea());//10*10 = 100이 나온다
console.log(triangle.getArea());//10*10 = 100이 나오면 안된다.
// 이럴 때는 2로 나눠야 하는데 필요한 함수만 다시 정의하는 것 재정의 = 오버라이딩!

class Triangle extends Shape{
  draw(){
    console.log('🔺');
  }
  getArea(){
    return (this.width *this.height /2);
  }
}
console.log(triangle.getArea());
/**
 이렇게 다시 정의하면 된다.
 
하지만 이렇게 하면 새로 재정의한 함수만 동작하는데 
이걸 막고 부모의 것도 쓰고 싶으면!
super.draw();를 안에 넣으면 된다.
*/
class Triangle extends Shape{
  draw(){
    super.draw;
    console.log('🔺');
  }
  getArea(){
    return (this.width *this.height /2);
  }
}


// 6. class checking : instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
/**
 왼쪽의 아이(객체)가 오른쪽의 클래스로 만든게 맞는지 아닌지 확인 하는 것 
 console.log(triangle instanceof Object);
 여기서 모든 객체는 다 Object로 만들어 졌다는 것을 알 수 있고
 command 를 누르고 Object를 클릭하면 
 선언된 페이지가 보이는데
 이때 안에 있는 함수들을 우리가 쓸 수 있고 오버라이딩할수도 있다.
 */
 class Triangle extends Shape{
  draw(){
    super.draw;
    console.log('🔺');
  }
  getArea(){
    return (this.width *this.height /2);
  }
  toString(){
    return `Triangle : color: ${this.color}`;
  }
}