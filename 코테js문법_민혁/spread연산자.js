const array = ["B"];

const addArr1 = ["A", array];
const addArr2 = ["A", ...array];

console.log(addArr1, addArr2);

// spread 연산자를 통해 배열 껍데기 아닌 내부 원소가 복사되어 할당 되므로 addArr2 처럼 나오게 할 수 있다.
// 간단하게 말하면 배열의 껍데기 하나를 벗기는 역할을 한다.

const name = "Minto";

console.log([...name]); //[ 'M', 'i', 'n', 't', 'o' ]

// 문자열을 spread 연산자를 통해서 배열에 할당하면 각 문자열의 원소들이 배열로 변환된다.
