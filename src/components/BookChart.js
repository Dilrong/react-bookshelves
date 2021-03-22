import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Treemap,
} from "recharts";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import Progress from "./Progress";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
    marginTop: "1rem",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  },
});

const BookChart = () => {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = async (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios
      .get(
        `https://gsx2json.dilrong.com/api?id=11rI8SWRtC7Tcevlazc7_dVP4dC2n0GyY7BW7_1NHSiE&columns=false&sheet=${page}`
      )
      .then((res) => {
        setData(res.data.rows);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [page]);

  if (loading) return <Progress />;
  if (error) return <Progress />;

  return (
    <>
      <div className={classes.root}>
        <LineChart
          width={600}
          height={400}
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
          <Line
            type="monotone"
            dataKey="name"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="grade" stroke="#82ca9d" />
        </LineChart>
        <Treemap
          width={500}
          height={300}
          data={data}
          dataKey="grade"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
        />
        <BarChart
          width={600}
          height={400}
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
          <Bar dataKey="name" fill="#8884d8" />
          <Bar dataKey="grade" fill="#82ca9d" />
        </BarChart>
      </div>
      <Pagination
        className={classes.pagination}
        count={5}
        page={page}
        onChange={handleChange}
      />
    </>
  );
};

export default BookChart;
