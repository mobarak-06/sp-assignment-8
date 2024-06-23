/* eslint-disable react/jsx-no-undef */


import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



const PageToRead = () => {
  
  const data = [
    {
      name: "To Kill a Mockingbird",
      uv: 3300,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "1984",
      uv: 3200,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "The Great Gatsby",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Pride and Prejudice",
      uv: 2780,
      pv: 2708,
      amt: 2000,
    },
    {
      name: "The Catcher in the Rye",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Moby-Dick",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    
  ];
  return (
    <div className="w-[1170px] h-[756px] bg-[#13131308] p-20">
      <BarChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            
          />
      </BarChart>
    </div>
  );
};

export default PageToRead;
