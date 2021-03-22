import React from "react";
import {
  createStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dilrong's Book
          </Typography>
          <Tooltip title="Chart">
            <IconButton color="inherit">
              <BubbleChartIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
