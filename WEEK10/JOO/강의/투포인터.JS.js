function countUniqueValues(array) {
  // add whatever parameters you deem necessary - good luck!
  // 조건1. array의 길이가 0, 1이면 길이를 리턴하고 종료
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return 1;
  }
  // 포인터1과 포인터2를 각각 0번째 인덱스와 1번째 인덱스 값으로 설정한다.
  let pointer1 = 0;
  let pointer2 = 1;
  // 포인터2의 인덱스값이 array의 길이보다 작은 동안
  while (pointer2 < array.length) {
    // 포인터1의 값과 포인터2의 값이 다르면
    if (array[pointer1] !== array[pointer2]) {
      // 포인터1을 현재 인덱스 보다 앞으로 이동하고
      pointer1++;
      // 그 인덱스에 포인터2 값을 할당한다.
      array[pointer1] = array[pointer2];
      // 그리고 포인터2의 값을 다음 인덱스로 이동시칸다.
      pointer2++;
      // 만약 포인터2의 인덱스가 array의 길이와 같다면 종료
      if (pointer2 === array.length) {
        break;
      }
    }
    // 포인터1의 값과 포인터2의 값이 같으면
    else {
      // 포인터2의 인덱스를 다음 인덱스로 이동시킨다.
      pointer2++;
    }

    // console.log(array, pointer1);
    // 종료가 되면 포인터1의 인덱스+1 깂을 리턴해준다.

  }
  return pointer1 + 1;
}


console.log(countUniqueValues([1,3,4,5,5,5,5]));
//   1
// 1,1,3,4,4,4,5,5,6,7
//     2
