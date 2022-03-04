import React from "react";
import CardStats from "./CardStats";
import Chart from "./Chart";
import styled from "styled-components";

const CARDHOLDER = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Home = () => {
  return (
    <>
      <CARDHOLDER>
        <CardStats
          title={"Sales"}
          money={"2,400.50$"}
          rate={2.4}
          valuerate={"up"}
          subtitle={"compared to last week"}
        />
        <CardStats
          title={"Active Users"}
          money={"200"}
          rate={2.4}
          valuerate={"up"}
          subtitle={"compared to last month"}
        />
        <CardStats
          title={"Cost"}
          money={"1,400.50$"}
          rate={0.4}
          valuerate={"down"}
          subtitle={"compared to last week"}
        />

        <CardStats
          title={"Revanue"}
          money={"1,000.50$"}
          rate={1.05}
          valuerate={"up"}
          subtitle={"compared to last week"}
        />
      </CARDHOLDER>
      <Chart />
    </>
  );
};

export default Home;
