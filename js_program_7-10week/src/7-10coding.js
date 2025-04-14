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

let arr1 = [36, 122, 79, 8, "무궁화", 391, "words", 509, 20192, "B", 321, 473, 73, "france", "Korea", 24, 99];
//1번
arr1.sort(function(a,b) {return a - b}); //오름차순
console.log(arr1);
//2번
arr1.sort(function(a,b) {return b - a}); //내림차순
console.log(arr1[0]);
//3번


