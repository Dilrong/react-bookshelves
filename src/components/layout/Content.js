import React from "react";
import Header from "./Header";
import BookList from "../BookList";
import BookChart from "../BookChart";
import { SelectedListModeValue } from "../../context";

const Content = () => {
  const { selectedListMode } = SelectedListModeValue();

  return (
    <>
      <Header />
      {selectedListMode ? <BookList /> : <BookChart />}
    </>
  );
};

export default Content;
