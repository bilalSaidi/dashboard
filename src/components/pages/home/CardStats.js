import React from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const Card = styled.div`
  background-color: white;
  color: black;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 20px 40px;
  border-top-right-radius: 15px;
`;

const FEATURED = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
`;
const TITLE = styled.span`
  display: block;
  font-size: 27px;
  font-weight: 400;
`;
const MONEY = styled.span`
  font-size: 25px;
  font-weight: bold;
`;
const RATE = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const SUBTITLE = styled.span`
  color: gray;
`;
const VALUERATE = styled.div`
  ${(props) => (props.up ? "color:green" : "color:red")}
`;
const CardStats = ({ title, money, rate, valuerate, subtitle }) => {
  return (
    <Card>
      <TITLE>{title}</TITLE>
      <FEATURED>
        <MONEY>{money}</MONEY>
        <RATE>
          {rate}
          {valuerate === "up" ? (
            <VALUERATE up>
              <ArrowUpwardIcon />
            </VALUERATE>
          ) : (
            <VALUERATE>
              <ArrowDownwardIcon />
            </VALUERATE>
          )}
        </RATE>
      </FEATURED>

      <SUBTITLE>{subtitle}</SUBTITLE>
    </Card>
  );
};

export default CardStats;
