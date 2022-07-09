function selectionSort(arr) {

  // 1. 외부루프 i, 내부루프 j로 설정
  for (let i = 0; i < arr.length; i++) {
    // 2. 최소인덱스를 arr의 i번째 인덱스로 설정한다.
    // - 순서상 0,1,2,3,4 순으로 비교하게 되는 것
    let lowest = i;
    // 비교하는 인덱스의 다음항목부터 확인해야하므로 +1
    for (let j = i + 1; j < arr.length; j++) {
      // 2.1 다음 arr 값이 작을 경우 해당인덱스 최소인덱스로 설정한다.(arr값을 저장하는게 아님)
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      // 2.2 다음 arr 값이 클 경우 다음 arr 값으로 넘어간다.
    }
    // 내부루프가 종료되면 i번째 인덱스와 swap를 한다.
    // 최소값이 처음에 시작한 값이 아닐 경우 (변경되었을 때만 바꾸어라)
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
    console.log(arr);
  }
  return arr;
}



// 1. 외부루프 i, 내부루프 j로 설정
// 2. 최소인덱스를 arr의 i번째 인덱스로 설정한다.
// 2.1 다음 arr 값과 비교한다.
// - 다음 arr 값이 작을 경우 해당인덱스 최소인덱스로 설정한다.(arr값을 저장하는게 아님)
// - 다음 arr 값이 클 경우 다음 arr 값으로 넘어간다.

// 내부루프가 종료되면 i번째 인덱스와 swap를 한다.
// - 최소값이 처음에 시작한 값이 아닐 경우 (변경되었을때만)


selectionSort([0, 2, 34, 22, 10, 19, 17]);
