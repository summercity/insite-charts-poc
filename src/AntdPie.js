import React from "react";
import { Pie, BidirectionalBar } from "@ant-design/charts";
import Chart from "react-apexcharts";
import { Row, Col, Card } from "antd";

// #1890ff

function AntDPie() {
  const data = [
    {
      type: "Label A (27)",
      value: 27,
    },
    {
      type: "Label B (25)",
      value: 25,
    },
    {
      type: "Label C (18)",
      value: 18,
    },
    {
      type: "Label D (15)",
      value: 15,
    },
    {
      type: "Label E (10)",
      value: 10,
    },
    {
      type: "Label F (11)",
      value: 5,
    },
    {
      type: "Label G (12)",
      value: 5,
    },
    {
      type: "Label H (5)",
      value: 5,
    },
    {
      type: "Label I (5)",
      value: 5,
    },
    {
      type: "Label J (5)",
      value: 5,
    },
    {
      type: "Label K (5)",
      value: 5,
    },
    {
      type: "Label L (5)",
      value: 5,
    },
    {
      type: "Label M (5)",
      value: 5,
    },
    {
      type: "Label O (5)",
      value: 5,
    },
    {
      type: "Label P (5)",
      value: 5,
    },
    {
      type: "Label Q (5)",
      value: 5,
    },
    {
      type: "Label R (5)",
      value: 5,
    },
    {
      type: "Label S (5)",
      value: 5,
    },
    {
      type: "Label U (5)",
      value: 5,
    },
    {
      type: "Label V (5)",
      value: 5,
    },
  ];

  const dataTwo = [
    {
      type: "Label C (18)",
      value: 18,
    },
    {
      type: "Label D (15)",
      value: 15,
    },
    {
      type: "Label E (10)",
      value: 10,
    },
    {
      type: "Label F (11)",
      value: 5,
    },
  ];

  const config = {
    autoFit: true,
    appendPadding: 10,
    data: data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        formatter: function formatter() {
          return "";
        },
      },
    },
    legend: {
      layout: "vertical",
      position: "right",
    },
  };

  const configTwo = {
    autoFit: true,
    appendPadding: 10,
    data: dataTwo,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        formatter: function formatter() {
          return "";
        },
      },
    },
    legend: {
      layout: "vertical",
      position: "right",
    },
  };

  const salesPieData = [
    {
      x: "Some Text 1",
      y: 4544,
    },
    {
      x: "Some Text 2",
      y: 3321,
    },
    {
      x: "Some Text 3",
      y: 3113,
    },
    {
      x: "Some Text 4",
      y: 2341,
    },
    {
      x: "Some Text 5",
      y: 1231,
    },
    {
      x: "Some Text 6",
      y: 1231,
    },
  ];

  const middlePieData = [
    {
      x: "Middle Pie 1",
      y: 42,
    },
    {
      x: "Middle Pie 2",
      y: 72,
    },
    {
      x: "Middle Pie 3",
      y: 42,
    },
    {
      x: "Middle Pie 4",
      y: 1,
    },
    {
      x: "Middle Pie 5",
      y: 43,
    },
    {
      x: "Middle Pie 6",
      y: 38,
    },
    {
      x: "Middle Pie 7",
      y: 53,
    },
    {
      x: "Middle Pie 8",
      y: 71,
    },
    {
      x: "Middle Pie 9",
      y: 75,
    },
    {
      x: "Middle Pie 10",
      y: 16,
    },
    {
      x: "Middle Pie 11",
      y: 87,
    },
    {
      x: "Middle Pie 12",
      y: 71,
    },
    {
      x: "Middle Pie 13",
      y: 15,
    },
    {
      x: "Middle Pie 14",
      y: 48,
    },
    {
      x: "Middle Pie 15",
      y: 49,
    },
    {
      x: "Middle Pie 16",
      y: 33,
    },
    {
      x: "Middle Pie 17",
      y: 12,
    },
    {
      x: "Middle Pie 18",
      y: 61,
    },
    {
      x: "Middle Pie 19",
      y: 53,
    },
    {
      x: "Middle Pie 20",
      y: 77,
    },
    {
      x: "Middle Pie 21",
      y: 60,
    },
    {
      x: "Middle Pie 22",
      y: 25,
    },
    {
      x: "Middle Pie 23",
      y: 11,
    },
    {
      x: "Middle Pie 24",
      y: 97,
    },
    {
      x: "Middle Pie 25",
      y: 5,
    },
    {
      x: "Middle Pie 26",
      y: 43,
    },
    {
      x: "Middle Pie 27",
      y: 44,
    },
    {
      x: "Middle Pie 28",
      y: 7,
    },
    {
      x: "Middle Pie 29",
      y: 72,
    },
    {
      x: "Middle Pie 30",
      y: 30,
    },
    {
      x: "Middle Pie 31",
      y: 30,
    },
    {
      x: "Middle Pie 32",
      y: 70,
    },
    {
      x: "Middle Pie 33",
      y: 80,
    },
    {
      x: "Middle Pie 34",
      y: 54,
    },
    {
      x: "Middle Pie 35",
      y: 24,
    },
    {
      x: "Middle Pie 36",
      y: 14,
    },
    {
      x: "Middle Pie 37",
      y: 33,
    },
    {
      x: "Middle Pie 38",
      y: 37,
    },
    {
      x: "Middle Pie 39",
      y: 26,
    },
    {
      x: "Middle Pie 40",
      y: 87,
    },
  ];

  const archConfig = {
    appendPadding: 10,
    angleField: "y",
    colorField: "x",
    radius: 1,
    height: 400,
    innerRadius: 0.64,
    padding: [0, 0, 150, 0],
    meta: {
      value: {
        formatter: function formatter(v) {
          return "".concat(v, " \xA5");
        },
      },
    },
    legend: {
      position: "bottom",
      layout: "vertical",
      handler: {
        size: 200,
        style: {
          width: 500,
          fill: "#ccc",
          stroke: "#f00",
        },
      },
      itemWidth: 100,
      max: 2,
      min: 5,
    },
    label: {
      type: "inner",
      offset: "-50%",
      style: { textAlign: "center" },
      autoRotate: false,
      content: "{value}",
    },
    interactions: [
      { type: "element-selected" },
      { type: "element-active" },
      { type: "pie-statistic-active" },
    ],
  };

  const apexData = {
    series: [44, 55, 41, 17, 15, 12, 23, 4, 15, 27],
    options: {
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
        //   height: 50,
        //   offsetX: 0,
        //   offsetY: 0,
      },
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  };

  const apexData2 = {
    series: [
      44,
      55,
      41,
      17,
      15,
      12,
      23,
      4,
      15,
      27,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      18,
      21,
    ],
    options: {
      width: 100,
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
        // height: 60,
      },
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  };

  const series = [
    {
      name: "Registrations",
      type: "column",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
    {
      name: "Vistis",
      type: "line",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
  ];

  const apexChart = {
    series: [
      {
        name: "Registrations",
        type: "column",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
      {
        name: "Visits",
        type: "line",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
    ],
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Website Visits",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Registrations",
        },
      },
      {
        opposite: true,
        title: {
          text: "Visits",
        },
      },
    ],
  };

  // Antd Visits Charts
  const dataChart = [
    {
      month: "Jan 01",
      Registrations: 13.4,
      Visits: 12.3,
    },
    {
      month: "Jan 02",
      Registrations: 14.4,
      Visits: 6.3,
    },
    {
      month: "Jan 03",
      Registrations: 18.4,
      Visits: 8.3,
    },
    {
      month: "Jan 04",
      Registrations: 34.4,
      Visits: 13.8,
    },
    {
      month: "Jan 05",
      Registrations: 44.4,
      Visits: 19.5,
    },
    {
      month: "Jan 06",
      Registrations: 24.4,
      Visits: 18.8,
    },
    {
      month: "Jan 07",
      Registrations: 54.4,
      Visits: 24.7,
    },
    {
      month: "Jan 08",
      Registrations: 104.4,
      Visits: 5.3,
    },
    {
      month: "Jan 09",
      Registrations: 165.2,
      Visits: 72.9,
    },
  ];
  const configChart = {
    data: dataChart,
    width: 400,
    height: 400,
    xField: "month",
    xAxis: { position: "bottom" },
    interactions: [{ type: "active-region" }],
    yField: ["Registrations", "Visits"],
    tooltip: {
      shared: true,
      showMarkers: false,
    },
  };

  var configChart2 = {
    data: dataChart,
    width: 400,
    height: 400,
    layout: "vertical",
    xField: "month",
    yField: ["Registrations", "Visits"],
    yAxis: {
      Registrations: { nice: true },
      Visitis: {
        min: 0,
        max: 100,
      },
    },
    tooltip: {
      shared: true,
      showMarkers: false,
    },
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8} style={{ padding: "10px" }}>
          <Card
            title="Antd Pie Chart"
            bordered={false}
            style={{ width: "100%" }}
          >
            <div>
              <Pie {...config} style={{ maxHeight: 200 }} />
            </div>
          </Card>
        </Col>
        <Col span={8} style={{ padding: "10px" }}>
          <Card
            title="Antd Pie Chart"
            bordered={false}
            style={{ width: "100%" }}
          >
            <div>
              <Pie {...configTwo} style={{ maxHeight: 200 }} />
            </div>
          </Card>
        </Col>
        <Col span={8} style={{ padding: "10px" }}>
          <Card
            title="Antd Pie Chart"
            bordered={false}
            style={{ width: "100%" }}
          >
            <div>
              <Pie {...config} style={{ maxHeight: 200 }} />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8} style={{ padding: "10px" }}>
          <Card title="AntD Chart - Bottom Legend">
            <Pie {...archConfig} data={salesPieData} />
          </Card>
        </Col>
        <Col span={8} style={{ padding: "10px" }}>
          <Card title="AntD Chart - Bottom Legend">
            <Pie {...archConfig} data={middlePieData} />
          </Card>
        </Col>
        <Col span={8} style={{ padding: "10px" }}>
          <Card title="AntD Chart - Bottom Legend">
            <Pie {...archConfig} data={salesPieData} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8} style={{ padding: "10px" }}>
          <Card title="Apex Charts">
            <Chart
              options={apexData.options}
              series={apexData.series}
              type="donut"
            />
          </Card>
        </Col>
        <Col span={8} style={{ padding: "10px" }}>
          <Card title="Apex Charts">
            <Chart
              options={apexData2.options}
              series={apexData2.series}
              type="donut"
            />
          </Card>
        </Col>
        <Col span={8} style={{ padding: "10px" }}>
          <Card title="Apex Charts">
            <Chart
              options={apexData.options}
              series={apexData.series}
              type="donut"
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="Apex Charts">
            <Chart
              options={apexChart}
              series={series}
              type="line"
              style={{ width: "800px", margin: "0 auto" }}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="Antd Charts Website Visits">
            <BidirectionalBar {...configChart} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="Antd Charts Website Visits">
            <BidirectionalBar {...configChart2} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default AntDPie;
