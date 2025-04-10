class Car1 {
	name = "";
	construct(a) {
	    this.name = a;
	}
	start() {
	    console.log(this.name + " start");
	}
}

let car1 = new Car1("Fiat");
car1.start();

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

let p1 = new Person("first", "last", 20, "black");
console.log(p1);
console.log(JSON.stringify(p1));


// JavaScript 에서 클래스 선언하고 객체 탄생하는 방법으로 사용한다.
class Human {
	height = 180; // 인스턴스 변수, 멤버변수
	name = "";
	age = 0;

	constructor(name, age) {	// 비기본 생성자
		// this는 클래스가 생성할 인스턴스를 가리킨다.
		this.name = name;
		this.age = age;
	}

	print() {
		console.log("이름은 " + this.name + ", 나이는 " + this.age
		 + ", 키는 " + this.height);
	}

	start() {
	    console.log(this.name + " Start !!");
	}
}

let human1 = new Human("이순신", 30);
human1.print();
let human2 = new Human("홍길동", 25);
human2.print();
human2.start();

class car {
    name = "";
    model = "";
    weight = "";
    color = "";

    constructor(n, m, w, color){
        this.name = name;
        this.model = m;
        this.weight = w;
        this.color = color;
        //this 는 클래스를 설계할 때는 어떤 이름으로 인스턴스될지 모른다.
        //인스턴스 된 자기 객체를 뜻할 때 this 라는 단어를 사용한다.
    }

    start() {
        alert("차량 정보" + JSON.stringify(this) + "가 시동겁니다.");
        // JSON 형식은 문자열로 생성된 객체의 멤버변수 이름과 멤버변수 값을 출력한다.
    }

    drive() {
        alert(this.name + "운전합니다.");
    }

    brake() {
        alert(this.name + "브레이크합니다.");
    }

    stop() {
        alert(this.name + "정지합니다.");
    }

    showRedSign() {
        alert(this.name + "빨간불입니다.");
        this.brake();
        this.stop();
    }
}

//자식클래스 객체는 부모클래스의 속성(멤버변수)와 메소드(멤버메소드)를 사용할 수 있다.
//그리고 자식클래스의 속성과 메소드를 사용할 수 있다.
//그러나 부모클래스 객체는 부모클래스만 사용할 수 있다.
//부모클래스 객체는 자식클래스를 모른다.
let hyundai = new car("Hyundai", "IONIC", "700", "GRAY");
    hyundai.start();
    hyundai.drive();
    hyundai.showRedSign();
//객체를 만들 때 생성자로 객체를 생성하면서 멤버변수의 값을 할당하는 방법을 연습하자.


