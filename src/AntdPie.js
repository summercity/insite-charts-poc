import React from 'react';
import { Pie } from '@ant-design/charts';
import { Row, Col, Card } from 'antd';

// #1890ff

function AntDPie() {

  const data = [
    {
      type: 'Label A (27)',
      value: 27,
    },
    {
      type: 'Label B (25)',
      value: 25,
    },
    {
      type: 'Label C (18)',
      value: 18,
    },
    {
      type: 'Label D (15)',
      value: 15,
    },
    {
      type: 'Label E (10)',
      value: 10,
    },
    {
      type: 'Label F (11)',
      value: 5,
    },
    {
      type: 'Label G (12)',
      value: 5,
    },
    {
      type: 'Label H (5)',
      value: 5,
    },
    {
      type: 'Label I (5)',
      value: 5,
    },
    {
      type: 'Label J (5)',
      value: 5,
    },
    {
      type: 'Label K (5)',
      value: 5,
    },
    {
      type: 'Label L (5)',
      value: 5,
    },
    {
      type: 'Label M (5)',
      value: 5,
    },
    {
      type: 'Label O (5)',
      value: 5,
    },
    {
      type: 'Label P (5)',
      value: 5,
    },
    {
      type: 'Label Q (5)',
      value: 5,
    },
    {
      type: 'Label R (5)',
      value: 5,
    },
    {
      type: 'Label S (5)',
      value: 5,
    },
    {
      type: 'Label U (5)',
      value: 5,
    },
    {
      type: 'Label V (5)',
      value: 5,
    },
  ];

  const dataTwo = [
    {
      type: 'Label C (18)',
      value: 18,
    },
    {
      type: 'Label D (15)',
      value: 15,
    },
    {
      type: 'Label E (10)',
      value: 10,
    },
    {
      type: 'Label F (11)',
      value: 5,
    },
  ];


  const config = {
    autoFit: true,
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        formatter: function formatter() {
          return '';
        },
      },
    },
    legend: {
      layout: 'vertical',
      position: 'right',
    },
  };


  const configTwo = {
    autoFit: true,
    appendPadding: 10,
    data: dataTwo,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        formatter: function formatter() {
          return '';
        },
      },
    },
    legend: {
      layout: 'vertical',
      position: 'right',
    },
  };


  return (
    <Row>
        <Col span={8} style={{padding: "10px"}}>
        <Card title="Antd Pie Chart" bordered={false} style={{ width: "100%" }}>
            <div>
            <Pie {...config} style={{maxHeight: 200}} />
            </div>
        </Card>
        </Col>
        <Col span={8} span={8} style={{padding: "10px"}}>
        <Card title="Antd Pie Chart" bordered={false} style={{ width: "100%" }}>
            <div>
            <Pie {...configTwo} style={{maxHeight: 200}} />
            </div>
        </Card>
        </Col>
        <Col span={8} span={8} style={{padding: "10px"}}>
        <Card title="Antd Pie Chart" bordered={false} style={{ width: "100%" }}>
            <div>
            <Pie {...config} style={{maxHeight: 200}} />
            </div>
        </Card>
        </Col>
    </Row>
  );
}

export default AntDPie;
