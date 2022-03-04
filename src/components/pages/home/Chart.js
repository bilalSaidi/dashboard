import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const CHART = styled.div`
  margin: 20px auto;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const CHARTTITLE = styled.h4`
  font-weight: 400;
  font-size: 27px;
  text-transform: capitalize;
  padding: 20px;
`;
const TOOLTIP = styled.div`
  background-color: #26313c;
  color: #fff;
  box-shadow: 15px 30px 40px 5px rgba(0, 0, 0, 0.5);
  padding: 16px;
  border-raduis: 4px;
`;
const LABEL = styled.span`
  font-size: 18px;
  text-transfrom: capitalize;
`;

const VALUE = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <TOOLTIP>
        <LABEL>{label}</LABEL>
        <VALUE>: {payload[0].value}€</VALUE>
      </TOOLTIP>
    );
  }

  return null;
};
const Chart = () => {
  const data = [
    {
      month: "Januray",
      amountSales: 2500,
    },
    {
      month: "February",
      amountSales: 2800,
    },
    {
      month: "March",
      amountSales: 1800,
    },
    {
      month: "April",
      amountSales: 3500,
    },
    {
      month: "may",
      amountSales: 1500,
    },
    {
      month: "June",
      amountSales: 1800,
    },
    {
      month: "July",
      amountSales: 2800,
    },
    {
      month: "August",
      amountSales: 1450,
    },
    {
      month: "September",
      amountSales: 1900,
    },
    {
      month: "October",
      amountSales: 3582,
    },
    {
      month: "Novomber",
      amountSales: 2475,
    },
    {
      month: "December",
      amountSales: 2146,
    },
  ];

  return (
    <CHART>
      <CHARTTITLE>sales analytics</CHARTTITLE>
      <ResponsiveContainer width={"100%"} aspect={4 / 1}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="gray" stopOpacity="0.3" />
              <stop offset="75%" stopColor="gray" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tickLine={false} />

          <YAxis
            dataKey="amountSales"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `${number}€`}
          />

          <Area dataKey="amountSales" stroke="gray" fill="url(#color)" />

          <Tooltip content={<CustomTooltip />} />

          <CartesianGrid opacity={0.3} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </CHART>
  );
};

export default Chart;
