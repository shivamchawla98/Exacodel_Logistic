import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart() {
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="max-w-sm">
      <h2 className="text-base text-gray-800 text-center font-medium mt-4 mb-2">
        Warehouse Square Area Stats
      </h2>
      <Bar
        // options={options}
        data={{
          labels: ["Total Pallets", "Occupied Pallets", "Available Pallets"],
          datasets: [
            {
              data: [700, 300, 400],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;
