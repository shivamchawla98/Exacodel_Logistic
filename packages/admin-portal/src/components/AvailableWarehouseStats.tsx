import { ArcElement, Chart } from "chart.js";
Chart.register(ArcElement);
import { Doughnut } from "react-chartjs-2"

function AvailableWarehouseStats() {
    return (
        <div className="max-w-xl">
            <Doughnut data={{
                labels: ["A", "B", "C"],
                datasets: [
                    {
                        label: "Un-occupied",
                        data: [200, 300, 400],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'                      
                        ]
                    },
                ]
             }}
              />
        </div>
    )
}

export default AvailableWarehouseStats