//　変数を代入する
let num = 14;

//　変数が３と５の倍数の場合
if (num % 3 ==0 && num % 5 ==0) {
  console.log('３と５の倍数です');
}
//　変数が３の倍数の場合
else if (num % 3 == 0) {
  console.log('３の倍数です');
}
// 変数が５の倍数の場合
else if (num % 5 == 0) {{
  console.log('５の倍数です');
}}
//それ以外の場合
else {
  console.log(num);
}