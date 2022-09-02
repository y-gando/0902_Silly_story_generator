
// No.1
// customNameを宣言。HTML内の'customname'文字列のIDにマッチするエレメントをcustomNameに代入
const customName = document.getElementById('customname');
// randamaizeを宣言。HTML内の'.randomize'の文字列のクラス名にマッチするエレメントをrandamaizeに代入
const randomize = document.querySelector('.randomize');
// storyを宣言。HTML内の'.story'の文字列のクラス名にマッチするエレメントをstoryに代入
const story = document.querySelector('.story');

// ランダムな数値の配列を返す「randomValueFromArray(array)」という関数を定義
function randomValueFromArray(array) {
    // randomを宣言。乱数で返された配列の長さを取得したのち、整数にした数値をrandomに代入
    const random = Math.floor(Math.random() * array.length);
    // randomな配列の数値を返す
    return array[random];
}


// No.2

// storyText を宣言し、storyTextに"It was~"を代入
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// insertX宣言し、insertXに”Willy the Goblin","Big Daddy","Father Christmas”の文字列を代入
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
// insertYを宣言し、insertYに"the soup kitchen","Disneyland","the White House"の文字列を代入
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
// insertZを宣言し、"insertZ","insertZ","insertZ"の文字列を代入
const insertZ = ["insertZ", "insertZ", "insertZ"];


// No.3

// randomaizeが'click'された時に値を返す
randomize.addEventListener('click', result);

// result関数を定義
function result() {
    // stotyTextをnewstoryに代入
    let newStory = storyText;

    // insertXの配列に入力されている値をランダムにxItemに代入する（y,zも同様）
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // newStoryの中の文字列の中にある「insertx」の部分を「xItem」に代入された文字列に置き換え、newStoryに代入する（y,zも同様）
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);


    // customNameと''に入力された文字列が同等だった場合
    if (customName.value !== '') {
        // nameを宣言し、customNameに入力された値をnameに代入する
        const name = customName.value;

        // No.4 ：「もし ( if ) customName テキストフィールドに何かが入力されていれば、Bob をその文字列で置き換える」
        // newStoryの文字列内にある「BOb」をname（入力された値）に置換したものをnewStoryに代入する
        newStory = newStory.replace('Bob',name);

    }
    // HTML内の"uk"文字列のIDにマッチするエレメントにチェックを入れる場合
    if (document.getElementById("uk").checked) {

        // No.5 ：「ukのラジオボタンが選択されている場合、重さと温度の単位をポンド・華氏から、ストーン・摂氏に変換する」
        // weightを宣言し、整数300をweightに代入
        let weight = Math.round(21.42858);
        // weightの値と'stone'を結合した値を返す
        weight = weight + ' centigrade';
        newStory = newStory.replace('300 pounds',weight);

        // temperatureを宣言し、整数94をtemperatureに代入
        let temperature = Math.round(34.4444);
        // temperatureの値と'stone'を結合した値を返す
        temperature = temperature + ' centigrade';
        newStory = newStory.replace('94 fahrenheit',temperature);

        // 「摂氏（℃）＝(華氏（℉）-32)÷1.8.」「華氏（℉）＝摂氏（℃）×1.8+32.」
        // 「1ポンド= 0.0714286 st」 21.42858（ストーン）


    }

    // storyのテキスト内容を返す
    story.textContent = newStory;
    story.style.visibility = 'visible';
}


