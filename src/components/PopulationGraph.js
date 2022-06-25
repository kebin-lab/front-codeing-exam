import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { memo } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const PopulationGraph = memo((props) => {
  const { datasets } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "都道府県別の総人口",
      },
    },
  };

  const data = {
    labels: [
      1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015,
      2020, 2025, 2030, 2035, 2040, 2045,
    ],
    datasets: datasets,
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
});
