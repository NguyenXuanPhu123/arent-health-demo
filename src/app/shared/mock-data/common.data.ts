export const lineChartData = {
    labels: [
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
    ],
    datasets: [
      {
        data: [89, 80, 43, 54, 44, 33, 45, 35, 25, 15, 12, 10],
        label: 'data 1',
        borderColor: '#FFCC21',
      },
      {
        data: [89, 85, 50, 64, 54, 34, 55, 45, 35, 25, 22, 20],
        label: 'data 2',
        borderColor: '#8FE9D0',
      },
    ],
    options: {
      scales: {
        x: {
          ticks: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
        },
      },
    },
  };