// 기본
function addOne(number: number): number {
  return number + 1;
}

console.log('addOne(4):', addOne(4));

// 인터페이스
interface Human {
  age: number;
  name: string;
}

function sayHi(person: Human): string {
  return `안녕 나는 ${person.age}살의 ${person.name}이라고 해.`;
}

console.log('sayHi(Human):', sayHi({ name: 'socratone', age: 24 }));

// 클래스
class Car {
  constructor(public position: number, private engine: string) {
    // public이나 private을 붙여주면 this.position = position;을 생략할 수 있다.
  }
}

const car = new Car(5, 'super');
console.log('car.position:', car.position); // public만 접근할 수 있다.

// enum
enum Color { Red, Green, Blue = 'blue' };
console.log('Color.Red:', Color.Red);
console.log('Color.Green:', Color.Green);
console.log('Color.Blue:', Color.Blue);

// angle brackets
let vari; // 타입이 any로 설정된다.
vari = 'a';
let str = (<string>vari); // str은 타입이 string이 된다.
// 또는 let str = (vari as string);
let any = vari; // any는 타입이 any다.