const today =new Date();

// 年、月、日を代入する
const year = today.getUTCFullYear();
const month = today.getUTCMonth() +1;
const day = today.getUTCDate();

//　出力する
console.log(year + '年' + month + '月' + day + '日');