'use strict';

const e = React.createElement;
const radius = 80;
const width = 200;
const height = width;

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
      ]
    };
    for (var i = 0; i < names.length; i++) {
      this.state.data.push({name: names[i], score: scores[i]});
    }
  }

  render() {
    const totalScore = this.state.data.reduce((acc, item) => acc + item.score, 0);
    let startAngle = 0;

    const colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet',
        'pink',
        'purple',
        'brown'
      ];

    const chartData = this.state.data.map((item, index) => {
      const percentage = Math.round((item.score / totalScore) * 10000)/100; // round to 2 decimal places
      const angle = (percentage / 100) * 360;
      const endAngle = startAngle + angle;

      

      const x1 = width/2 + radius * Math.cos(startAngle * Math.PI / 180);
      const y1 = height/2 + radius * Math.sin(startAngle * Math.PI / 180);
      const x2 = width/2 + radius * Math.cos(endAngle * Math.PI / 180);
      const y2 = width/2 + radius * Math.sin(endAngle * Math.PI / 180);

      const largeArcFlag = angle > 180 ? 1 : 0;

      const pathData = `M ${width/2},${height/2} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;

      startAngle = endAngle;

      return {
        name: item.name,
        value: percentage,
        pathData: pathData,
        color: colors[index]
      };
    });

    return e(
      'div',
      {},
      e(
        'svg',
        { width: width, height: height },
        chartData.map(item => {
          return e(
            'path',
            {
              d: item.pathData,
              fill: item.color,
              stroke: 'black',
              'strokeWidth': '1',
              'data-name': item.name,
              'data-value': item.value,
              onMouseOver: event => {
                event.target.setAttribute('stroke-width', '3');
                ReactDOM.render(
                  e(
                    'text',
                    {
                    },
                    `${item.name}: ${item.value}%`
                  ),
                  document.getElementById('pie_chart_label')
                );
              },
              onMouseOut: event => {
                event.target.setAttribute('stroke-width', '1');
                ReactDOM.render(
                  e(
                    'text',
                    {
                    },
                    'Genre Breakdown'
                  ),
                  document.getElementById('pie_chart_label')
                );
              }           
            },
          );
        })
      )
    );
  }
}

const namesUnread = document.getElementById('genres').getElementsByTagName('li');
const scoresUnread = document.getElementById('genreFreq').getElementsByTagName('li');

const names = [];
const scores = [];

for (var i = 0; i < namesUnread.length; i++) {
    names.push(namesUnread[i].innerHTML);
    scores.push(parseInt(scoresUnread[i].innerHTML));
}

const domContainer = document.querySelector('#pie_chart_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(PieChart, {names: names, scores: scores}));
