import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import useAxios from "axios-hooks";
import IndividualBook from "./IndividualBook";
import Progress from "./Progress";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  },
});

const BookList = () => {
  const classes = useStyles();

  const [page, setPage] = useState(1);

  const [{ data, loading, error }, refetch] = useAxios(
    `https://gsx2json.dilrong.com/api?id=11rI8SWRtC7Tcevlazc7_dVP4dC2n0GyY7BW7_1NHSiE&columns=false&sheet=${page}`
  );

  const handleChange = async (event, value) => {
    setPage(value);
    await refetch();
  };

  if (loading) return <Progress />;
  if (error) return <Progress />;

  return (
    <div>
      <Helmet title="Book List" />
      <Grid className={classes.root} container>
        {data.rows.map((data) => (
          <Grid item key={data.name}>
            <IndividualBook book={data} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        className={classes.pagination}
        count={5}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default BookList;
