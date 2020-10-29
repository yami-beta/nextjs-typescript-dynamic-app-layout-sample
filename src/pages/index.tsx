import React from "react";
import { Layout, NextPageWithLayout } from "../components/Layout";

const IndexPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
};

IndexPage.Layout = Layout;

export default IndexPage;
