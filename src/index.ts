// 기본
function addOne(number: number): number {
  return number + 1;
}

console.log('addOne(4):', addOne(4));

// 인터페이스
interface Human {
  name: string;
  age: number;
}

function sayHi(person: Human): string {
  return `안녕 나는 ${person.age}살의 ${person.name}이라고 해.`
}

console.log('sayHi(Human):', sayHi({ name: 'socratone', age: 24 }));

// 클래스
class Car {
  public position: number;
  private engine: string; // private은 car 인스턴스로 접근할 수 없다.

  constructor(position: number) {
    this.position = position;
    this.engine = 'super';
  }
}

const car = new Car(5);
console.log('car.position:', car.position); 

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