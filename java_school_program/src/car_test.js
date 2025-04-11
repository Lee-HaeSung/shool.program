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
		// this 는 클래스가 생성할 인스턴스를 가리킨다.
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
    name = "name";
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

class Question {
    text = ""; //원래 있는 문자열

    constructor(text) { // 생성자에서 텍스트를 받기
            this.text = text;
        }

    split() { // 문장을 각 단어가 원소인 배열로 변환하기.
            let text = this.text.split(" ");
            console.log(text);
        }

    swap() { // 대문자 <-> 소문자로 바꿔서 문장으로 만들기.
        let swapped = ""; // swapped 변수 초기화
        for (let i = 0; i < this.text.length; i++) {
            let char = this.text[i];

            if (char === char.toUpperCase()) {
                swapped += char.toLowerCase();
            } else {
                swapped += char.toUpperCase();
            }
        }
        console.log(swapped);
    }

    replace() { // 문장에서 [String]이라는 단어를 [문자열] 로 변환하기.
        let update = this.text.replaceAll("string", "문자열"); // 교체 후 새로운 문자열로 업데이트
        console.log(update);
    }
}

let text1 = new Question("Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.");
console.log(text1.split());
console.log(text1.swap());  // swap 결과 출력
console.log(text1.replace());


// super 라는 단어는 객체의 부모를 뜻한다.
class Question2 {
    txt = "Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.";

     basic() {
    //- 위의 문장을 각 단어가 원소인 배열로 변환하기
    //    => ["Javascript", "strings", "are", ....]
            let arrExam = this.strExam.split(" ");
        }

    exam1() {
        let index = arrExam.lastIndexOf("string");
    }



}









