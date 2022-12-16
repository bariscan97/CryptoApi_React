import { Line } from "react-chartjs-2"

import Coin from "../routes/Coin"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
} from "chart.js"


function Charjs(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend
  )

  const data = {
    labels: [...props.valu.volume],
    datasets: [
      {
        label: "Items",
        data: [...props.valu.last],
        borderColor: "gold",
        backgroundColor: "white",
        
        
        
      }
    ]
  }
  
  return (
   
    <Line 
      data={data}
      options={{
        responsive: true,
        
      }}
    />
    
  )
}

export default Charjs
