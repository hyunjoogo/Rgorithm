/** 배열 합병
 * 배열이 정렬되어 있다고 가정하고 정렬된 배열 두 개의 조합을 반환
 * 1. 결과값 배열을 만들고 각 입력 배열에서 가장 작은 값을 확인한다.
 * 2. i, j 는 각 배열의 인덱스를 가르킨다.
 * 3. i, j가 각 배열의 끝까지 도달하기 전까지 (while문)
 * 3.1 만약 첫번째 배열의 원소가 두번재 배열의 원소보다 작으면
 *     결과값 배열에 첫번째 배열의 원소를 push하고 첫번째 배열의 다음 원소로 이동한다.(i++)
 *     이 후 두번째 배열의 현재 원소와 비교를 한다.
 * 3.2 반대로 첫번째 배열의 원소가 두번째 배열의 원소보다 작으면
 *     결과값 배열에 두번째 배열의 원소를 push하고 두번째 배열의 다음 원소로 이동한다.(j++)
 *     이 후 첫번째 배열의 현재 원소와 비교를 한다.
 * 4. 배열 하나를 완료한 다음에는 다른 배열의 남은 값을 모두 결과값 배열에 넣는다.
 * 4.1 어느 한 쪽에 배열이 완료되었는지 알 수 없으므로 두 배열 모두 i,j가 각 배열의 끝까지 도달하기 전까지
 * push를 한다.
 * */

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  console.log(results, i, j);
  return results;
}



/** 합병 정렬
 * 1. 재귀함수로 길이가 1 또는 0이 될 때까지 합병 정렬을 호출한다.
 * 1.1 배열의 중간점을 잡아서 slice로 나눈다.
 * 1.2 왼쪽 배열과 오른쪽 배열을 합병 정렬 함수를 재귀시킨다.
 * 2. 길이가 1 또는 0이 될 때까지 나누어지면 배열 합병 함수로
 * */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// 중간 지점을 찾은 다음 0부터 중간 지점까지의 왼쪽을 합병 정렬을 호출
//
// --------- mergeSort([10, 24, 76, 73])
// mergeSort([10, 24]) => [10, 24]
// mergeSort([10]) / mergeSort([24])
// [10] merge [24]

// mergeSort([76, 73]) => [73, 76]
// mergeSort([76]) / mergeSort([73])
// [76] merge [73]

// [10, 24, 73, 76]

mergeSort([10, 24, 76, 73]);
