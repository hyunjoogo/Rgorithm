let n = 6;
let result = 0;

while (true) {
  if (n % 7 === 0) {
    result += parseInt(n / 7, 10);
    console.log(result);
    break;
  }
  n -= 3;
  result += 1;
  if (n < 0) {
    console.log(-1);
    break;
  }
}

/*


24  3kg * 8
24  7kg * 3 / 3kg 1


일단 7로 쪼개는 게 낫다는거지

60 => 57 54 51 48 45 42
7 8 56 4
7 7 49 11
7 6 42 18 3 6 



*/
