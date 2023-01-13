interface Dataset {
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
}

export interface SamplePieChart {
  labels: string[];
  datasets: Dataset[];
}

export interface PieChartProps {
  samplePieData: SamplePieChart;
}
