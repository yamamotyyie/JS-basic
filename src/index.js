// // JSの変数宣言
// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**テンプレート文字列 */
// const name = "豆腐";
// const age = 102;
// // 名前を出したい
// // 従来の方法。めちゃ長い
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /**アロー関数 */
// // 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// /**分割代入 */
// const myProfile = {
//   name:"豆腐",
//   age:102,
// };

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message3);

// // 上のは、myProfileと長い
// const { name, age} = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`

// const myProfile = ["とーふ", "102"];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**デフォルト値 引数 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちわ!${name}さん`);
// sayHello("とーふ");

// スプレット構文