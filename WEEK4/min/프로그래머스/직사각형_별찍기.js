process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = +n[0];
  const b = +n[1];
  for (let i = 0; i < b; i++) {
    let str = "";
    for (let j = 0; j < a; j++) {
      str += "*";
    }
    console.log(str);
  }
});

// 입력받는부분이 이해가 안가긴하다.
