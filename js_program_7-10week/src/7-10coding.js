//구구단 만들기
//let date = new Date();
//console.log(`현재 시간은 ${new Date()}입니다.`);
//let mul = 0;
//console.log(`구구단 3단!`);
//for( let i = 0; i<=9; i++ ){
//    mul = 3 * i;
//    console.log(`3 * ${i} = ${mul}`);
//}

//[36, 122, 79, 8, "무궁화", 391, "words", 509, 20192, "B", 321, 473, 73, "france", "Korea", 24, 99]
//
//1. 위 배열을 오름차순으로 정렬해서 출력하세요.
//2. 가장 큰 값을 출력 하세요
//3. 짝수인 요소만 배열로 출력하세요


//// 입력받은 높이의 피라미드 만들기
//let n = prompt("입력");
//let p = " ";
//let q = "*";
//let z = 1;
//for(let i = 0; i < n; i++) {
//    console.log(p.repeat(n-(i+1)) + q.repeat(z) + p.repeat(n-(i+1)));
//    z += 2;
//    }


//// 로또 만들기
////1~45번 까지의 숫자 5개, 보너스 1개를 랜덤으로 만든다.
////숫자 6개가 저장되는 배열을 선언하여 [0, 0, 0, 0, 0, 0] 오름차순으로 정렬한다.
////math.random() * math.ceil() 중복된 숫자는 제거한다.
//let randomPick = [];
//for (let i = 0; i < 6; i++){
//    randomNum = Math.floor(Math.random()*(45-1)+1);
//    if (randomPick.indexOf(randomNum) === -1) {
//        randomPick.push(randomNum);
//    } else {
//        i--;
//    }
//}
//
//console.log(randomPick[0] + ", " + randomPick[1] + ", " + randomPick[2] + ", " + randomPick[3] + ", " + randomPick[4] + "은 랜덤 숫자이고 " + randomPick[5] + "은 보너스입니다.");
//randomPick.sort(function (a, b) {
//    return a-b;
//});
//console.log(randomPick);


//// 게임 캐릭터 클래스 만들기
//class Wizard {
//    health = 0;
//    mana = 0;
//    armor = 0;
//
//    constructor(health, mana, armor){
//        this.health = health;
//        this.mana = mana;
//        this.armor = armor;
//    }
//
//    attack() {
//        console.log("파이어볼");
//    }
//}
//
//let x = new Wizard(545, 210, 10);
//console.log(x.health, x.mana, x.armor);
//x.attack();

////몇 번째 행성인가요?
//let a = prompt("몇번 째 행성이 궁금하신가요?");
//let b = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
//console.log(b[a-1]);

////거꾸로 > 로꾸거
//let r = prompt("");
//let newString = "";
//
//for (let i = r.length -1; i >= 0; i--){
//    newString += r[i];
//}
//
//console.log(newString);

////놀이기구 키 제한
//class tallLimit{
//    height = 0;
//
//    pass() {
//        this.height = prompt("키를 입력해주세요");
//        if (this.height > 150)
//            console.log("YES");
//        else
//            console.log("NO");
//    }
//}
//
//let tall = new tallLimit();
//tall.pass();


////평균 점수 구하기
//class Average {
//    constructor() {
//        this.scores = [];
//        this.sum = 0;
//    }
//
//    scoreAver() {
//        let input = prompt("점수들을 입력해주세요 (공백으로 구분):");
//        this.scores = input.split(" ").map(Number); // 문자열 → 숫자 배열로 변환
//
//        for (let i = 0; i < this.scores.length; i++) {
//            this.sum += this.scores[i];
//        }
//
//        let average = this.sum / this.scores.length;
//        console.log("평균 점수는:", average);
//    }
//}
//
//// 인스턴스 생성 후 호출
//let avg = new Average();
//avg.scoreAver();


////19번: 제곱을 구하자
//class Square {
//    constructor() {
//    this.squ = [];
//    }
//
//    numSquare() {
//        this.num = prompt("제곱할 a와 b를 입력해주세요 (공백으로 구분).");
//        this.squ = this.num.split(" ").map(Number);
//
//        let o = this.squ[0] ** this.squ[1];
//        console.log("a ** b = " + o);
//    }
//}
//
//let p = new Square();
//p.numSquare();


////25번: 원의 넓이를 구하세요
//class CircleArea {
//    constructor() {
//    this.c = 0;
//    }
//
//    CArea() {
//        this.cir = prompt("원의 반지름을 입력해주세요.");
//        this.c = parseInt(this.cir);
//
//        let ci = this.c * this.c * 3.14;
//        console.log("원의 넓이는 :" + ci);
//    }
//}
//
//let CA = new CircleArea();
//CA.CArea();

////26번: 행성 문제2
//class Star {
//    transStar(){
//    this.starP = prompt("행성이름을 입력해주세요(한글).");
//    let planet = new Map([
//    ["수성", "Mercury"],
//    ["금성", "Venus"],
//    ["지구", "Earth"],
//    ["화성", "Mars"],
//    ["목성", "Jupiter"],
//    ["토성", "Saturn"],
//    ["천왕성", "Uranus"],
//    ["해왕성", "Neptune"]
//    ]);
//    console.log(planet.get(this.starP));
//    }
//}
//let SP = new Star();
//SP.transStar();

////27번: 객체 만들기
//class Ex27 {
//    constructor() {
//        this.names = [];
//        this.scores = [];
//        this.sum = 0;
//    }
//
//    scoreST() {
//        let input = prompt("이름을 입력해주세요 (공백으로 구분):");
//        let input2 = prompt("성적을 입력해주세요 (공백으로 구분):");
//        this.names = input.split(" "); // 문자열 → 숫자 배열로 변환
//        this.scores = input2.split(" ").map(Number);
//        console.log("[" +this.names[0] + ", " + this.scores[0] + "] ," + "[" +this.names[1] + ", " + this.scores[1] + "]");
//    }
//}
//
//// 인스턴스 생성 후 호출
//let ST = new Ex27();
//ST.scoreST();

//27-2번: 객체 만들기

//class Exam27 {
//    maps = new Map();
//
//    inputFunc() {
//        let names = prompt("이름을 공백으로 구분하여 입력하세요.");
//        let score = prompt("점수를 공백으로 구분하여 입력하세요.");
//        let arrName = names.split(" ");
//        let arrScore = score.split(" ");
//        if (arrName.length != arrScore.length) {
//            alert("두개 배열의 길이가 다릅니다. 다시 시작하세요.");
//            return false;   // 함수가 false 를 리턴한다.
//        }
//
//        for(let i = 0; i < arrName.length; i++){
//        this.maps.set(arrName[i], Number(arrScore[i])); // Number 는 문자열을 숫자로 변경
//        }
//        console.log(this.maps);
//        return true;    // 함수가 true 를 리턴한다.
//    }
//
//    outputFunc() {
//        let strOutput = "{";
//        for( let item of this.maps ) {
//            console.log(item);
//            strOutput += `'${item[0]}': ${item[1]}, `
//        }
//        strOutput = strOutput.substring(0 , strOutput.length - 2);
//        // 문자열의 길이에서 -2 시킨 길이의 문자열로 다시 저장. "abcd" => "ab"
//        strOutput += "}";
//        console.log(strOutput);
//    }
//}
//
//let exam = new Exam27();
//if ( exam.inputFunc() ) {   // inputFunc() 를 실행하고 리턴값이 true 이면
//    exam.outputFunc();  // outputFunc() 를 실행한다.
//}

////28번 : 2-gram
//class Ex28 {
//    strInput = ""; //문자열 초기화 및 생성
//
//    constructor(str){
//        this.strInput = str;
//    }
//
//    output(){
//        // 루프를 이용하여 문자열 2글자씩 출력한다.
//        for(let i = 0; i < this.strInput.length-1 ; i++){
//        console.log(this.strInput.charAt(i) + " " + this.strInput.charAt(i+1)); //charAt()가 문자열 받기
//        }
//    }
//
//}
//let exam28 = new Ex28(prompt("문자열을 입력하세요."));
//exam28.output();

    //37번 : 반장 선거
    //class Exam37 {
    //    arrItem = [];
    //    his.arrItem = input.split(" ");
    //    }
    //    checkVotes() {
    //
    //        for( let i = 0; i < this.arrItem.length; i++ ) {
    //            if ( this.isExistItem(this.arrItem[i]) ) {
    //                // map 에 원소이름의 키가 있을때 실행한다.
    //                let number = this.maps.get(this.arrItem[i]);
    //                // map 에서 원소이름이 키인 원래값을 가져온다.
    //                this.maps.set(this.arrItem[i], number + 1);
    //                // map 에 {원소이름: 원래값+1} 으로 저장 한다
    //                // this.maps.set( 키, 값 );
    //            } else {
    //                // map 에 원소이름의 키가 없을때 실행한다.
    //                this.maps.set(this.arrItem[i], 1);
    //                // map 에 {원소이름: 1} 으로 저장 한다
    //                // this.maps.set( 키, 값 );
    //            }
    //        }
    //        console.log(this.maps);
    //        console.log([...this.maps]);    // [... JavaScript Map, Set, Array] ===> 배열로 변환
    //        let item = [...this.maps].reduce( (a,b) =>  // Array reduce 사용
    //            a[1] >= b[1] ? a : b    // 앞의 원소 a[1] 값 >= 뒤의 원소 b[1] 값 보다 크면 a 를 리턴
    //        );
    //        return item;
    //        // return 가장 [1] 값이 큰 map 원소를 리턴한다.
    //    }
    //    isExistItem(item) {
    //        // 원소가 maps 에 키로 존재하면 true 를 리턴한다.
    //        return this.maps.has(item);
    //        // if ( this.maps.has(item) == true )
    //    }
    //}
    //// 원범 혜원 유빈 원범 혜원 곰 유빈 원범 곰 혜원 호랑이 혜원
    //let exam37 = new Exam37(prompt("투표할 항목을 공백으로 구분해서 입력하세요."));
    //let result = exam37.checkVotes();
    //console.log(`투표 결과 ${result[0]가 ${result[1]}표로 가장 많습니다.}`);
    //console.log(`투표 결과 ${result[0]}가 ${result[1]}표로 가장 많습니다.`);

////41번 : 소수판별
//class Ex41 {
//    constructor(){
//    this.Num41 = 0;
//    }
//
//    primeNumber() {
//        let input = prompt("소수 판별할 숫자를 입력해주세요");
//        let input2 = Number(input);
//        let add = 0;
//
//        for(let i = 2; i < input2; i++){
//            if(input2 % i == 0){
//                add ++;
//            }
//        }
//        if (add == 0)
//        console.log("소수입니다.");
//
//        else
//        console.log("소수가 아닙니다.");
//    }
//}
//let Exam41 = new Ex41();
//Exam41.primeNumber();
