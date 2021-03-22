import React from "react";
import { Helmet } from "react-helmet";
import { createMuiTheme, CssBaseline, useMediaQuery } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Content from "./components/layout/Content";
import { SelectedListModeProvider } from "./context";

const App = () => {
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: "dark")`);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: ["Spoqa Han Sans Neo"].join(","),
        },
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#939597",
          },
          background: {
            default: prefersDarkMode ? "#303030" : "#ffffff",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <SelectedListModeProvider>
        <CssBaseline />
        <Helmet
          titleTemplate="%s - Dilrong's Book"
          defaultTitle="Dilrong's Book"
        >
          <meta name="description" content="read the book dilrong" />
        </Helmet>
        <Content />
      </SelectedListModeProvider>
    </ThemeProvider>
  );
};

export default App;
