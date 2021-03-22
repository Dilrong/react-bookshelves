import React from "react";
import { makeStyles, Grid, CircularProgress } from "@material-ui/core";
import useAxios from "axios-hooks";
import IndividualBook from "./IndividualBook";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const BookList = () => {
  const classes = useStyles();

  const [{ data, loading, error }] = useAxios(
    `https://gsx2json.dilrong.com/api?id=11rI8SWRtC7Tcevlazc7_dVP4dC2n0GyY7BW7_1NHSiE&columns=false&`
  );

  if (loading) return <CircularProgress />;
  if (error) return <CircularProgress />;

  return (
    <Grid className={classes.root} container>
      {data.rows.reverse().map((data) => (
        <Grid item>
          <IndividualBook book={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
