import styled from "styled-components";
import CardStats from "../../Widgets/CardStats";
import UserList from "./UserList";
const CARDHOLDER = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Users = () => {
  return (
    <>
      <CARDHOLDER>
        <CardStats
          title={"Total Users"}
          number={"1500"}
          rate={0.4}
          valuerate={"up"}
          subtitle={"compared to last month"}
        />
        <CardStats
          title={"Active Users"}
          number={"200"}
          rate={0.5}
          valuerate={"down"}
          subtitle={"compared to last month"}
        />
        <CardStats
          title={"New Join"}
          number={"100"}
          rate={1}
          valuerate={"up"}
          subtitle={"compared to last month"}
        />
        <CardStats
          title={"Total Vists"}
          number={"250K"}
          rate={2}
          valuerate={"up"}
          subtitle={"compared to last month"}
        />
      </CARDHOLDER>
      <UserList />
    </>
  );
};

export default Users;
