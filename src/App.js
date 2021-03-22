import React from "react";
import { Helmet } from "react-helmet";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Header from "./components/layout/Header";

const App = () => {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "light",
          primary: {
            main: "#000000",
          },
          background: {
            default: "#ffffff",
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet
        titleTemplate="%s - Dilrong's Books"
        defaultTitle="Dilrong's Books"
      >
        <meta name="description" content="read the book dilrong" />
      </Helmet>
      <Header />
    </ThemeProvider>
  );
};

export default App;
