/*
--- 배열이 정렬되어 있다고 가정하고 정렬된 배열 두 개의 조합을 반환 ---
PesudoCode
1. 결과값 배열을 만들고 각 입력 배열에서 가장 작은 값을 확인한다.
2. i, j 는 각 배열의 인덱스를 가르킨다.
3. i, j가 각 배열의 끝까지 도달하기 전까지 (while문)
3.1 만약 첫번째 배열의 원소가 두번재 배열의 원소보다 작으면 
    결과값 배열에 첫번째 배열의 원소를 push하고 첫번째 배열의 다음 원소로 이동한다.(i++)
    이 후 두번째 배열의 현재 원소와 비교를 한다.
3.2 반대로 첫번째 배열의 원소가 두번째 배열의 원소보다 작으면
    결과값 배열에 두번째 배열의 원소를 push하고 두번째 배열의 다음 원소로 이동한다.(j++)
    이 후 첫번째 배열의 현재 원소와 비교를 한다.
4. 배열 하나를 완료한 다음에는 다른 배열의 남은 값을 모두 결과값 배열에 넣는다.
4.1 어느 한 쪽에 배열이 완료되었는지 알 수 없으므로 두 배열 모두 i,j가 각 배열의 끝까지 도달하기 전까지
push를 한다.
*/

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
merge([1, 10, 50], [2, 14, 99, 100]);
