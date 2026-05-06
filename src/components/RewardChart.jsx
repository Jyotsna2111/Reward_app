import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
import PropTypes from "prop-types";

const RewardChart = ({ data }) => {
  const chartData = Object.entries(data).map(([k, v]) => ({
    month: k,
    points: v
  }));

  return (
    <BarChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="points" fill="#27ae60" />
    </BarChart>
  );
};

RewardChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default RewardChart;