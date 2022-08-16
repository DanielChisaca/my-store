const username: string = 'nicobytes';
const sum = (a: number, b:number) => {
  return a + b;
}
sum(1,2);

class persona{

  constructor(public age: number, public lastName: string){ }
}

const nico = new persona(15, 'chisaca');
nico.age;
