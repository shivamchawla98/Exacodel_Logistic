import { tooltip } from "@material-tailwind/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DoughnutStats from "./chart/Doughnut";
import BarChart from "./chart/BarChart";
import PieChart from "./chart/PieChart";

ChartJS.register(ArcElement, Tooltip, Legend);

function AvailableWarehouseStats() {
  return (
    <div className="flex justify-evenly items-center">
      <DoughnutStats />
      <PieChart />
      <BarChart />
    </div>
  );
}

export default AvailableWarehouseStats;
