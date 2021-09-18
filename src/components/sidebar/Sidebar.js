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
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarContainer">
        {/* Start Side Bar Menu */}
        <div className="sideBarMenu">
          <h4 className="headerMenu">dashboard</h4>
          <ul className="itemsMenu">
            <li className="itemMenu">
              <HomeOutlinedIcon />
              <span className="itemName">home</span>
            </li>
            <li className="itemMenu">
              <TimelineOutlinedIcon />
              <span className="itemName">analytics</span>
            </li>
            <li className="itemMenu">
              <TrendingUpOutlinedIcon />
              <span className="itemName">sales</span>
            </li>
          </ul>
        </div>
        {/* End Side Bar Menu */}
        {/* Start Side Bar Menu */}
        <div className="sideBarMenu">
          <h4 className="headerMenu">quick menu</h4>
          <ul className="itemsMenu">
            <li className="itemMenu">
              <PeopleAltOutlinedIcon />
              <span className="itemName">users</span>
            </li>
            <li className="itemMenu">
              <AddBusinessOutlinedIcon />
              <span className="itemName">products</span>
            </li>
            <li className="itemMenu">
              <AttachMoneyOutlinedIcon />
              <span className="itemName">transictions</span>
            </li>
            <li className="itemMenu">
              <AssignmentOutlinedIcon />
              <span className="itemName">reports</span>
            </li>
          </ul>
        </div>
        {/* End Side Bar Menu */}
        {/* Start Side Bar Menu */}
        <div className="sideBarMenu">
          <h4 className="headerMenu">notifications</h4>
          <ul className="itemsMenu">
            <li className="itemMenu">
              <MailOutlinedIcon />
              <span className="itemName">mail</span>
            </li>
            <li className="itemMenu">
              <FeedbackOutlinedIcon />
              <span className="itemName">feedback</span>
            </li>
            <li className="itemMenu">
              <ChatBubbleOutlineOutlinedIcon />
              <span className="itemName">messages</span>
            </li>
          </ul>
        </div>
        {/* End Side Bar Menu */}
        {/* Start Side Bar Menu */}
        <div className="sideBarMenu">
          <h4 className="headerMenu">staff</h4>
          <ul className="itemsMenu">
            <li className="itemMenu">
              <BusinessCenterOutlinedIcon />
              <span className="itemName">manage</span>
            </li>
            <li className="itemMenu">
              <TimelineOutlinedIcon />
              <span className="itemName">analytics</span>
            </li>
            <li className="itemMenu">
              <ReportGmailerrorredOutlinedIcon />
              <span className="itemName">reports</span>
            </li>
          </ul>
        </div>
        {/* End Side Bar Menu */}
      </div>
    </div>
  );
};

export default Sidebar;
