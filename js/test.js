
/*
 * じゃんけんの手
 * 0: グー
 * 1: チョキ
 * 2: パー
 * として処理する
 */
function rsp(playerSelect) {
    let result;
    let playerSelectHand;
    let comSelectHand;
    let resultString;
    let random = Math.random();
    let comSelect = Math.floor(random * 3);
    console.log(comSelect);
    console.log(playerSelect);

    /*
     * 勝ち負けは（プレイヤーが）
     * 0: 負け
     * 1: 勝ち
     * 2: あいこ
     */

    if (playerSelect == comSelect) {
        // 一緒だったらあいこ
        result = 2;
    } else {
        // 違うので条件によって勝敗を振り分ける
        if (playerSelect == 0) {
            // プレイヤーはグー
            if (comSelect == 1) {
                // コンピューターはチョキ
                result = 1;
            } else {
                // コンピューターはパー
                result = 0;
            }
        } else if (playerSelect == 1) {
            // プレイヤーはチョキ
            if (comSelect == 0) {
                // コンピューターはグー
                result = 0;
            } else {
                // コンピューターはパー
                result = 1;
            }
        } else {
            // プレイヤーはパー
            if (comSelect == 0) {
                // コンピューターはグー
                result = 1;
            } else {
                // コンピューターはチョキ
                result = 0;
            }
        }
    }
    console.log(result);

    if (playerSelect == 0) {
        playerSelectHand = 'グー';
    } else if (playerSelect == 1) {
        playerSelectHand = 'チョキ';
    } else {
        playerSelectHand = 'パー';
    }

    if (comSelect == 0) {
        comSelectHand = 'グー';
    } else if (comSelect == 1) {
        comSelectHand = 'チョキ';
    } else {
        comSelectHand = 'パー';
    }

    if (result == 0) {
        resultString = '負け';
    } else if (result == 1) {
        resultString = '勝ち';
    } else {
        resultString = 'あいこ';
    }

    document.getElementById('player').innerHTML = 'あなたは ' + playerSelectHand;
    document.getElementById('computer').innerHTML =
        'オラたんは ' + comSelectHand;
    document.getElementById('resultMsg').innerHTML = '結果はあなたの ' + resultString;
}




// コロちゃん
// マウスおーばーでコロちゃんの写真が切り替わる
// マウスオーバー時の処理
//マウスオーバー時の処理
function mouseOn(){
    var obj = document.getElementById("corochan");
    obj.src = "../html_14_金子花菜/img/corochan2.png";
  }
   

  //マウスアウト時の処理
  function mouseOff(){
    var obj = document.getElementById("corochan");
    obj.src = "../html_14_金子花菜/img/corochan.png";
  }

// コロちゃんがランダムに話す
// この中に書いていく

// 今ここ☆文字をクリックした時に答えが出るようにする

$(function () {
$(".text-button").on("click", function () {
        // alert("押されたよ");
        // この下は消さない
      

    // この中に書いていく
    var random = Math.floor(Math.random() * 7);
console.log(random, "コロちゃんがおしゃべりするよ");

// おみくじ作る
var random = Math.floor(Math.random() * 7);
if(random == 0){
    console.log("誰")
    $(".kekka").html("妖精さんなんだよ。")
  // 0の時に実行したいことをかく
}else if(random == 1){
    console.log("挨拶")
    $(".kekka").html("おはようございませんzzz")
  // 1の時に実行したいことをかく
}else if(random == 2){
    console.log("おやつ")
    $(".kekka").html("クッキー食べてふっくらするの")
  // 2の時に実行したいことをかく
}else if(random == 3){
    console.log("兄弟")
    $(".kekka").html("スヌーピーの弟のオラフだよ")
  // 3の時に実行したいことをかく
}else if(random == 4){
    console.log("値段")
    $(".kekka").html("KiddyLandで1980円で売ってるよ")

// 4の時に実行したいことをかく
}else if(random == 5){
    console.log("体型")
    $(".kekka").html("太ってないよ。ふっくらしているの。")

// 5の時に実行したいことをかく
}else if(random == 6){
    console.log("インスタ")
    $(".kekka").html("インスタフォローしてくれる？")

// 6の時に実行したいことをかく
}



    // 下は消しちゃダメ
  });

});

  


    // 仲良くなる
