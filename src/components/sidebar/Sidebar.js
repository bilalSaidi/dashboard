import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/Home";
import TimelineOutlinedIcon from "@mui/icons-material/Timeline";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SIDEBAR = styled.div`
  height: calc(100vh - 70px);
  background-color: rgb(251, 251, 255);

  position: sticky;
  top: 70px;
  overflow-y: hidden;
  &:hover {
    overflow-y: scroll;
  }
`;
const SIDEBARCONTAINER = styled.div`
  padding: 5px 0;
`;
const SIDEBARMENU = styled.div`
  margin-bottom: 5px;
`;
const HEADERMENU = styled.h4`
  margin: 0 7px 7px;
  text-transform: capitalize;
  color: rgba(17, 19, 16, 0.48);
`;
const ITEMSMENU = styled.ul`
  margin: 0;
  padding: 0;
`;
const ITEMMENU = styled.li`
  margin: 7px;
  list-style-type: none;

  padding: 7px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #6495ed2b;
    border-radius: 5px;
  }
`;

const NAVLINK = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const ITEMNAME = styled.span`
  display: inline-block;
  margin-left: 7px;
  text-transform: capitalize;
`;
const Sidebar = () => {
  return (
    <SIDEBAR>
      <SIDEBARCONTAINER>
        {/* Start Side Bar Menu */}
        <SIDEBARMENU>
          <HEADERMENU>dashboard</HEADERMENU>
          <ITEMSMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <HomeOutlinedIcon />
                <ITEMNAME>home</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <TimelineOutlinedIcon />
                <ITEMNAME>analytics</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <TrendingUpOutlinedIcon />
                <ITEMNAME>sales</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
          </ITEMSMENU>
        </SIDEBARMENU>
        {/* End Side Bar Menu */}
        {/* Start Side Bar Menu */}
        <SIDEBARMENU>
          <HEADERMENU>quick menu</HEADERMENU>
          <ITEMSMENU>
            <ITEMMENU>
              <NAVLINK to="/users">
                <PeopleAltOutlinedIcon />
                <ITEMNAME>users</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <AddBusinessOutlinedIcon />
                <ITEMNAME>products</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <AttachMoneyOutlinedIcon />
                <ITEMNAME>transictions</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <AssignmentOutlinedIcon />
                <ITEMNAME>reports</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
          </ITEMSMENU>
        </SIDEBARMENU>
        {/* End Side Bar Menu */}
        {/* Start Side Bar Menu */}
        <SIDEBARMENU>
          <HEADERMENU>notifications</HEADERMENU>
          <ITEMSMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <MailOutlinedIcon />
                <ITEMNAME>mail</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <FeedbackOutlinedIcon />
                <ITEMNAME>feedback</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <ChatBubbleOutlineOutlinedIcon />
                <ITEMNAME>messages</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
          </ITEMSMENU>
        </SIDEBARMENU>
        {/* End Side Bar Menu */}
        {/* Start Side Bar Menu */}
        <SIDEBARMENU>
          <HEADERMENU>staff</HEADERMENU>
          <ITEMSMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <BusinessCenterOutlinedIcon />
                <ITEMNAME>manage</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <TimelineOutlinedIcon />
                <ITEMNAME>analytics</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
            <ITEMMENU>
              <NAVLINK to="/">
                <ReportGmailerrorredOutlinedIcon />
                <ITEMNAME>reports</ITEMNAME>
              </NAVLINK>
            </ITEMMENU>
          </ITEMSMENU>
        </SIDEBARMENU>
        {/* End Side Bar Menu */}
      </SIDEBARCONTAINER>
    </SIDEBAR>
  );
};

export default Sidebar;
