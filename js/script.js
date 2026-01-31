var pieData = {
    labels: ['Webデザイナー', 'Webデベロッパー', 'サーバーエンジニア', '営業職'],
    series: [14, 9, 8, 6]
};

var pieOpetions = {
    width: '100%',
    height: '440px'
};

new Chartist.Pie('.pie-chart', pieData, pie)
