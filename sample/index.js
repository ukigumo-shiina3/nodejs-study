// 環境変数
for (var i = 0; process.argv.length; i++) {
    console.log(`{i} : ${process.argv[i]}`);
}

// 実行時引数
console.log(JSON.stringify(process.env, null, 2));

// カレントディレクトリ
console.log(`cwd() : ${process.cwd()}`);
console.log(`dirname: ${__dirname}`);

// 実行環境
console.log(process.platform);