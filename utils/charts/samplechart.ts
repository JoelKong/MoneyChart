// Pie Chart
import { SamplePieChart } from "../../interfaces/charts/samplepiechart";

export const samplePieData: SamplePieChart = {
  labels: ["Shopping", "Entertainment", "Meal", "Transport"],
  datasets: [
    {
      data: [40, 25, 20, 15],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      hoverBackgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
    },
  ],
};
