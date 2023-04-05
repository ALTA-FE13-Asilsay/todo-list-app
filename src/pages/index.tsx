import { FC, useState, useEffect } from "react";

import Layout from "@/components/Layout";
import { useTitle } from "@/utils/hooks";

const Home: FC = () => {
  useTitle("Homepage");

  return (
    <Layout>
      <div className="div">
        <p> Home</p>
      </div>
    </Layout>
  );
};

export default Home;
