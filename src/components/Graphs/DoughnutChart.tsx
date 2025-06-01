import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Title, Tooltip, Legend, ChartDataLabels);

interface ChartConfig {
  id: string;
  title: string;
  labels: string[];
  data: number[];
}

interface Props {
  chart: ChartConfig;
}

const DoughnutChart: React.FC<Props> = ({ chart }) => {
  const data = {
    labels: chart.labels,
    datasets: [
      {
        label: chart.title,
        data: chart.data,
        backgroundColor: ["#FFCF00", "#E57801", "#C70100", "#610200"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      datalabels: {
        anchor: "center",
        align: "center",
        color: "#fff",
        font: { weight: "bold" },
        formatter: (value: number) => value,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
