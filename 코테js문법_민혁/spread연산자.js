const array = ["B"];

const addArr1 = ["A", array];
const addArr2 = ["A", ...array];

console.log(addArr1, addArr2);

// 스프레드 연산자를 통해 배열 껍데기 아닌 내부 원소가 복사되어 할당 되므로 addArr2 처럼 나오게 할 수 있다.
// 간단하게 말하면 배열의 껍데기 하나를 벗기는 역할을 한다.
