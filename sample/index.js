setTimeout(() => {
  console.log("setTimeout()");  // 実行順4番: 0.1秒遅延しているため
}, 100);

setImmediate(() => {
  console.log("setImmediate()"); // 実行順3番: キューの後の優先となるため
});

process.nextTick(() => {
  console.log("nextTick()");  // 実行順1番:キューが優先されるため
});

Promise.resolve().then(() => {
  console.log("Promise.resolve().then()"); // 実行順2番:キューが優先されるため
});

