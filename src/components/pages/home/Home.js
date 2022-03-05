import React from "react";
import CardStats from "../../Widgets/CardStats";
import Chart from "./Chart";
import styled from "styled-components";
import NewMemberWidget from "./NewMemberWidget";
import TransactionWidget from "./TransactionWidget";
const CARDHOLDER = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WIDJETSHOLDER = styled.div`
  display: flex;
`;
const Home = () => {
  return (
    <>
      <CARDHOLDER>
        <CardStats
          title={"Sales"}
          number={"2,400.50$"}
          rate={2.4}
          valuerate={"up"}
          subtitle={"compared to last week"}
        />
        <CardStats
          title={"Active Users"}
          number={"200"}
          rate={2.4}
          valuerate={"up"}
          subtitle={"compared to last month"}
        />
        <CardStats
          title={"Cost"}
          number={"1,400.50$"}
          rate={0.4}
          valuerate={"down"}
          subtitle={"compared to last week"}
        />

        <CardStats
          title={"Revanue"}
          number={"1,000.50$"}
          rate={1.05}
          valuerate={"up"}
          subtitle={"compared to last week"}
        />
      </CARDHOLDER>
      <Chart />
      <WIDJETSHOLDER>
        <NewMemberWidget />
        <TransactionWidget />
      </WIDJETSHOLDER>
    </>
  );
};

export default Home;
