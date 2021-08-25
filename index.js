var sum = 0;
console.log("timer1");
for (var i = 1; i <= 1000; i++) {
    sum += i;
}
console.timeEnd("timer1");  // 処理終了時間 2.795ms