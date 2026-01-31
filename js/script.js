new Chartist.Pie('.pie-chart', {
  // 画像と同じラベル名を設定
  labels: ['Webデザイナー', 'Webデベロッパー', 'サーバーエンジニア', '営業職'],
  // グラフの割合（画像に基づいたおおよその比率）
  series: [35, 25, 20, 20]
}, {
  // ラベルをグラフの内側に表示するための設定
  labelInterpolationFnc: function(value) {
    return value;
  }
});