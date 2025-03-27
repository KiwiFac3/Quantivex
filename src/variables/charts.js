export const barChartData = [
  {
    name: "Sales",
    data: [15, 25, 28, 10, 25, 20],
  },
];

export const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "12px",
      },
    },
    show: true,
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "#A0AEC0",
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "14px",
      },
    },
  },
  fill: {
    colors: "#ED8936",
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: "15px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

export const lineChartData = [
  {
    name: "Mobile apps",
    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
  },
  {
    name: "Websites",
    data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
  },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#fff", "#3182CE"],
  },
  colors: ["#fff", "#3182CE"],
};

export const revenueChartData = [
  {
    name: "Revenue",
    data: [10, 12, 15, 14, 16, 18],
  },
];

export const revenueChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },

  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels: {
      style: {
        colors: "#CBD5E0",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#CBD5E0",
        fontSize: "12px",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
  },
  markers: {
    size: 5,
  },
  colors: ["#fff", "#3182CE"],
};

export const ROIChartData = [
  {
    name: "Marketing Spend",
    data: [2, 1.5, 3],
  },
  {
    name: "Revenue Uplift",
    data: [8, 6, 10],
  },
];

export const ROIChartOptions = {
  chart: {
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: ["Social Media", "Email", "Ads"],
    labels: {
      style: {
        colors: "#CBD5E0",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#CBD5E0",
        fontSize: "12px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    labels: {
      colors: "#CBD5E0",
    },
  },
  colors: ["#ED8936", "#3182CE"],
  dataLabels: {
    enabled: false,
  },
};

export const AOVChartData = [
  {
    name: "AOV",
    data: [8, 8.5, 9, 9.2, 9.5, 10],
  },
];

export const SPSFChartData = [
  {
    name: "Sales_per_SqFt",
    data: [350, 400, 375],
  },
];

export const SPSFChartOptions = {
  chart: {
    type: 'bar',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: ["Store A", "Store B", "Store C"],
    labels: {
      style: {
        colors: "#CBD5E0",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#CBD5E0",
        fontSize: "12px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    labels: {
      colors: "#CBD5E0",
    },
  },
  colors: ["#ED8936", "#3182CE"],
  dataLabels: {
    enabled: false,
  },
};

export const coffeeChartData = [40, 35, 15, 10];
export const coffeeChartOptions = {
  chart: {
    id: "pie-chart",
  },
  labels: ['Espresso', 'Latte', 'Cappuccino', 'Americano'],
  colors: ["#ED8936", "#3182CE", "#F6A800", "#9F7AEA"],
  tooltip: {
    theme: "dark",
  },
  legend: {
    position: "top",
    labels: {
      colors: "#CBD5E0",
    },
  },
};

export const coffeeShopsData = [
  { name: "Downtown Cafe", lat: 39.0997, lng: -94.5786, address: "123 Main St, Kansas City", revenue: "Up 5% last week" },
  { name: "Uptown Brews", lat: 39.1097, lng: -94.5686, address: "456 Elm St, Kansas City" , revenue: "Up 2% last week" },
  { name: "Riverside Roasters", lat: 39.1197, lng: -94.5586, address: "789 Oak St, Kansas City", revenue: "Down 3.4% last week"  }
]
