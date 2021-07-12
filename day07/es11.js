/*
Optional Chaining(ES11)
*/
{
  const person1 = {
    name: "Ellie",
    job: {
      title: "SW Engineer",
      manager: {
        name: "Bob",
      },
    },
  };
  const person2 = {
    name: "Bob",
  };

  //bad x 100
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2); Error
  }
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }
  //good
  {
    function p(person) {
      console.log(person.job?.manager?.name);
    }
    p(person1);
    p(person2);
  }
}
/*
Nullish Coalescing Operator
false : false , '', 0,null,undefined 다 false
*/
{
  {
    const name = "Ellie";
    const userName = name || "Guest";
    console.log(userName);
  }
  {
    const name = null;
    const userName = name || "Guest";
    console.log(userName);
  }
  /*
  name =''인 경우는 Guest 할당을 하고 싶지 않지만 할당 되는 것을 볼 수 있다.
  num=0일 수 있는데 ||이 실행 되어 버릴 수도 있다
  */
 {
  const name = '';
  const userName = name??'Guest';
  console.log(userName);

  const num =0;
  const message = num ?? 'undefined';
  console.log(message);
 }
}
