import React from "react";
import { Pie, PieChart, Cell, Label } from "recharts";

const Chart = () => {
  const data = [{ name: "Group A", value: 80 }];
  const startAngle = 70;
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#F5FAF8"
        dataKey="value"
        gapAngle={0}
        stroke="transparent"
        startAngle={startAngle}
      >
        <Cell fill="rgba(44, 122, 86, 0.80)" />
        <Label value={`${data[0].value}/100`} position="center" fill="#333" />
      </Pie>
    </PieChart>
  );
};

export default Chart;
