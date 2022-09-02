
// No.1
// customNameを宣言。HTMLタグで指定した'customname'文字列のIDにマッチするエレメントをcustomNameに代入
const customName = document.getElementById('customname');
// randamaizeを宣言。HTML内の'.randomize'の文字列のクラス名にマッチするエレメントをrandamaizeに代入
const randomize = document.querySelector('.randomize');
// storyを宣言。HTML内の'.story'の文字列のクラス名にマッチするエレメントをstoryに代入
const story = document.querySelector('.story');

// ランダムな数値の配列を返す「randomValueFromArray(array)」という関数を定義
function randomValueFromArray(array){
  // randomを宣言。乱数で返された配列の長さを取得したのち、整数にした数値をrandomに代入
  const random = Math.floor(Math.random()*array.length);
  // randomな配列の数値を返す
  return array[random];
}


// No.2