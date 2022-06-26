function solution(arr) {
    var answer = [];
    let minIndex = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[minIndex] > arr[i]) {
            minIndex = i;
        } 
    }
    arr.splice(minIndex, 1);
    if (arr.length === 0) {
        answer.push(-1);
    } else {
        answer = arr;
    }
    return answer;
}