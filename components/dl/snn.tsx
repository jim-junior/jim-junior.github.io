"use client";

import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Sheet,
  Tab,
  TabList,
  Tabs,
  Typography,
} from "@mui/joy";
import React, { useEffect, useState } from "react";
import { MdInfo, MdLink } from "react-icons/md";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
  Tooltip,
} from "recharts";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Parameters = {
  theta_10: -1,
  theta_11: 1,
  theta_20: 0,
  theta_21: 1,
  theta_30: 1,
  theta_31: 1,
  phi_0: 0,
  phi_1: 2,
  phi_2: -1,
  phi_3: 1,
};

const X = [
  -4, -3.7, -3.4, -3.1, -2.8, -2.5, -2.2, -1.9, -1.6, -1.3, -1, -0.7, -0.4,
  -0.1, 0.2, 0.5, 0.8, 1.1, 1.4, 1.7, 2, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4,
];

const ChartComp = ({
  config,
  data,
}: {
  config: {
    title: string;
    xLabel: string;
    yLabel: string;
    color?: string;
    showDots?: boolean;
    strokeWidth?: number;
    grid?: boolean;
  };
  data: { x: number; y: number }[];
}) => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      title={config.title}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid />
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.4} />
          <stop offset="75%" stopColor="#8884d8" stopOpacity={0.05} />
        </linearGradient>
      </defs>
      <XAxis
        label={config.xLabel}
        style={{ fontSize: 12 }}
        dataKey="x"
        interval={1}
      />
      <Tooltip
        content={
          // @ts-ignore
          <CustomTooltip config={config} />
        }
      />

      <YAxis label={config.yLabel} style={{ fontSize: 12 }} />
      <Area type="monotone" dataKey="y" stroke="#8884d8" fill="url(#colorUv)" />
    </AreaChart>
  </ResponsiveContainer>
);

function CustomTooltip({
  active,
  payload,
  label,
  config,
}: {
  active?: boolean;
  payload: { value: number }[];
  label?: string;
  config: {
    xLabel: string;
    yLabel: string;
  };
}) {
  if (active) {
    return (
      <Card>
        <CardContent>
          <Typography level="body-sm" component="div">
            <Typography level="body-sm" component="strong">
              {config.xLabel}:
            </Typography>{" "}
            {label}
          </Typography>
          <Divider />
          <Typography level="body-sm" component="div">
            <Typography level="body-sm" component="strong">
              {config.yLabel}:
            </Typography>{" "}
            {payload[0].value}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return null;
}

const ShallowNN = () => {
  const [text, setText] = useState("");
  const [parameters, setParameters] = useState(Parameters);
  const [x, setX] = useState(X);
  const [y, setY] = useState<number[]>([]);
  const [graphs, setGraphs] = useState<
    {
      config: {
        title: string;
        xLabel: string;
        yLabel: string;
        color?: string;
        showDots?: boolean;
        strokeWidth?: number;
        grid?: boolean;
      };
      data: {
        x: number;
        y: number;
      }[];
    }[]
  >([]);

  function linearFunction(x: number, theta0: number, theta1: number): number {
    return theta0 + theta1 * x;
  }

  function ReLU(x: number): number {
    return Math.max(0, x);
  }

  function hiddenUnit(x: number, theta0: number, theta1: number): number {
    return ReLU(linearFunction(x, theta0, theta1));
  }

  function outputUnit(
    x: number,
    phi0: number,
    phi1: number,
    phi2: number,
    phi3: number
  ): number {
    return (
      phi0 +
      phi1 * hiddenUnit(x, parameters.theta_10, parameters.theta_11) +
      phi2 * hiddenUnit(x, parameters.theta_20, parameters.theta_21) +
      phi3 * hiddenUnit(x, parameters.theta_30, parameters.theta_31)
    );
  }

  function plotOutput() {
    const newY = [
      {
        config: {
          title: "AKA",
          xLabel: "x",
          yLabel: "Output(y)",
        },
        data: x.map((xi) => {
          return {
            x: xi,
            y: outputUnit(
              xi,
              parameters.phi_0,
              parameters.phi_1,
              parameters.phi_2,
              parameters.phi_3
            ),
          };
        }),
      },
    ];
    setText("");
    console.log("Output Plot Data:", newY);
    setGraphs(newY);
  }

  function plotHiddenUnitsToX() {
    const hiddenUnits = [
      {
        config: {
          title: "h_1 activates at x > 1",
          xLabel: "x",
          yLabel: "h1",
        },
        data: x.map((xi) => {
          return {
            x: xi,
            y: hiddenUnit(xi, parameters.theta_10, parameters.theta_11),
          };
        }),
      },
      {
        config: {
          title: "h_2 activates at x > 0",
          xLabel: "x",
          yLabel: "h3",
        },
        data: x.map((xi) => {
          return {
            x: xi,
            y: hiddenUnit(xi, parameters.theta_20, parameters.theta_21),
          };
        }),
      },

      {
        config: {
          title: "h_3 activates first at x > -1",
          xLabel: "x",
          yLabel: "h3",
        },
        data: x.map((xi) => {
          return {
            x: xi,
            y: hiddenUnit(xi, parameters.theta_30, parameters.theta_31),
          };
        }),
      },
    ];
    setText(
      "When the Activation function is added, it transforms the hidden unit into a non-linear function, if you observer clearly on the graphs below, thier is some form of none-linearority in the function line. The ReLU function also clips off neurons that have a value below 0"
    );
    setGraphs(hiddenUnits);
  }

  function plotLinearFunctions() {
    const graphVals = [1, 2, 3].map((value) => {
      return {
        config: {
          title: "AKA",
          xLabel: "x",
          yLabel:
            (value === 1 && "h1") ||
            (value === 2 && "h2") ||
            (value === 3 && "h3"),
        },
        data: X.map((xi) => {
          return {
            x: xi,
            y: linearFunction(
              xi,
              parameters[`theta_${value}0` as keyof typeof parameters],
              parameters[`theta_${value}1` as keyof typeof parameters]
            ),
          };
        }),
      };
    }) as any;

    setText(
      "Hidden Units without activation layer are just normal Linear functions, as you can see displayed on the graphs below"
    );
    setGraphs(graphVals);
  }

  return (
    <Sheet sx={{ p: 2 }}>
      <Box
        aria-label="Basic tabs"
        sx={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <ButtonGroup>
          <Button
            onClick={(e) => {
              plotLinearFunctions();
            }}
          >
            Hidden Units(Without activation function)
          </Button>
          <Button
            onClick={(e) => {
              plotHiddenUnitsToX();
            }}
          >
            Hidden Units(With activation function)
          </Button>
          <Button
            onClick={(e) => {
              console.log("sksksksk");
              plotOutput();
            }}
          >
            Output Layer
          </Button>
        </ButtonGroup>
      </Box>

      <Alert
        sx={{
          my: 1,
        }}
        startDecorator={<MdInfo />}
      >
        <Typography>{text}</Typography>
      </Alert>

      <Grid container>
        {graphs.map((graphData) => {
          return (
            <Grid md={6}>
              <ChartComp config={graphData.config} data={graphData.data} />
            </Grid>
          );
        })}
      </Grid>

      <Divider />

      <Box
        sx={{
          display: "flex",
          my: 1,
        }}
      >
        <Typography startDecorator={<FaCodePullRequest />}>
          Find the Source code to this Interactive Graph on Github
        </Typography>
        <Button
          sx={{
            ml: "auto",
          }}
          size="sm"
          variant="outlined"
          component="a"
          href="https://github.com/jim-junior/jim-junior.github.io/blob/main/components/dl/snn.tsx"
          target="_blank"
          startDecorator={<FaGithub />}
        >
          Open GitHub
        </Button>
      </Box>
    </Sheet>
  );
};

export default ShallowNN;
