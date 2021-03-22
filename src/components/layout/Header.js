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
import DashboardIcon from "@material-ui/icons/Dashboard";
import { SelectedListModeValue } from "../../context";

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
  const { selectedListMode, setSectedListMode } = SelectedListModeValue();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dilrong's Book
          </Typography>
          {selectedListMode ? (
            <Tooltip title="Chart">
              <IconButton
                color="inherit"
                onClick={() => {
                  setSectedListMode(false);
                }}
              >
                <BubbleChartIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="CardView">
              <IconButton
                color="inherit"
                onClick={() => {
                  setSectedListMode(true);
                }}
              >
                <DashboardIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
