// 1. HTMLの要素を取得する
const counterDisplay = document.getElementById('counter');
const actionButton = document.getElementById('btn');

// 2. カウントを保持する変数を準備
let count = 0;

// 3. ボタンがクリックされた時の動きを決める
actionButton.addEventListener('click', () => {
    // 数値を1増やす
    count++; 
    
    // 画面上の数字を書き換える
    counterDisplay.textContent = count;
    
    // ちょっとした遊び心：10回ごとに数字を跳ねさせる
    if (count % 10 === 0) {
        counterDisplay.style.color = '#2ed573';
    } else {
        counterDisplay.style.color = '#333';
    }
});
