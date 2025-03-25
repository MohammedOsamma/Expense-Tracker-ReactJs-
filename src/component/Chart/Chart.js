import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPiont) => (
        <ChartBar
          key={dataPiont.id}
          value={dataPiont.value}
          maxValue={totalMax}
          label={dataPiont.label}
        />
      ))}
    </div>
  );
}
export default Chart;
