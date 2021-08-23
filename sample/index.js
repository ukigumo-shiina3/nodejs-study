setTimeout(() => {
  console.log("setTimeout()");
}, 100);

console.log("global"); // settimeoutが後から実行される

var end = (new Date()).getTime() + 3000;  // 3秒間遅延させる。
while ((new Date()).getTime() < end) { }