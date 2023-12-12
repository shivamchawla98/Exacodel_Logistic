import { tooltip } from "@material-tailwind/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import GET_OCCUPIED_AREA_SUM from "@/graphql/query/getOccupiedArea";
import GET_UNOCCUPIED_AREA_SUM from "@/graphql/query/getUnoccupiedArea";
import GET_TOTAL_AVAILABLE_AREA_SUM from "@/graphql/query/getAvailableWarehouseArea";
import { useQuery } from "@apollo/client";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutStats() {
  const {
    loading: loadingOccupiedSum,
    error: errorOccupiedSum,
    data: ccupiedSum,
  } = useQuery(GET_OCCUPIED_AREA_SUM);
  const {
    loading: loadingUnoccupied,
    error: errorUnoccupied,
    data: unoccupiedSum,
  } = useQuery(GET_UNOCCUPIED_AREA_SUM);
  const {
    loading: loadingAvailableArea,
    error: errorAvailableArea,
    data: availableSum,
  } = useQuery(GET_TOTAL_AVAILABLE_AREA_SUM);
  console.log("unoccupied : ", unoccupiedSum);
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        intersect: false,
      },
    },
  };
  if (loadingAvailableArea || loadingOccupiedSum || loadingUnoccupied) {
    return <>loading ...</>;
  }

  if (errorAvailableArea || errorOccupiedSum || errorUnoccupied) {
    console.log(errorOccupiedSum);
    console.log(errorUnoccupied);
    console.log(errorAvailableArea);
    return <>error : (</>;
  }

  return (
    <div className="max-w-sm">
      <h2 className="text-base text-gray-800 text-center font-medium mt-4 mb-2">
        Warehouse Square Area Stats
      </h2>
      <Doughnut
        options={options}
        data={{
          labels: ["Un-occupied area", "Occupied area", "Total square Area"],
          datasets: [
            {
              // label: "A",
              data: [
                unoccupiedSum.getTotalunoccupiedspaceSum,
                ccupiedSum.getTotaloccupiedspaceSum,
                availableSum.getTotalabviableareaSum,
              ],
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

export default DoughnutStats;
