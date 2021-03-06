import React from "react";
import Rating from "@material-ui/lab/Rating";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    minWidth: 250,
    margin: "1rem",
  },
});

const IndividualBook = ({ book }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={book.name}
          height="350"
          image={book.image}
          title={book.name}
        />
        <CardContent>
          <Typography variant="h6">{book.name}</Typography>
          <Typography variant="body2" component="p">
            {book.author} 지음
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {book.time}
          </Typography>
          <Rating name="read-only" value={book.grade} readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default IndividualBook;
