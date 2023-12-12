import { tooltip } from "@material-tailwind/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        intersect: false,
      },
    },
  };

  return (
    <div className="max-w-sm">
      <h2 className="text-base text-gray-800 text-center font-medium mt-4 mb-2">
        Warehouse Pallets Stats
      </h2>
      <Pie
        options={options}
        data={{
          labels: ["Total Pallet", "Occupied Pallet", "Available Pallet"],
          datasets: [
            {
              label: "Warehouse Pallets",
              data: [700, 300, 400],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
            },
          ],
        }}
      />
    </div>
  );
}

export default PieChart;
