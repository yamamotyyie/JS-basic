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
// ...を連続で書く
// 配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2)=>console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);
// 配列に対して使ってる。順番を変換

// 一つにまとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3]=arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4,...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// mapやfilterを使った処理
const nameArr = ["田中", "山田", "とーふ"];
// for文
// for (let i = 0;nameArr;index<nameArr.length++){
//     console.log(nameArr[index]);
// }
const nameArr2 = nameArr.map((name)=>{
    return name;
})