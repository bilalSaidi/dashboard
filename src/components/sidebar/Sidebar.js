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
import { BrowserRouter as Router, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarContainer">
        <Router>
          {/* Start Side Bar Menu */}
          <div className="sideBarMenu">
            <h4 className="headerMenu">dashboard</h4>
            <ul className="itemsMenu">
              <li className="itemMenu">
                <Link to="/">
                  <HomeOutlinedIcon />
                  <span className="itemName">home</span>
                </Link>
              </li>
              <li className="itemMenu">
                <Link to="/analytics">
                  <TimelineOutlinedIcon />
                  <span className="itemName">analytics</span>
                </Link>
              </li>
              <li className="itemMenu">
                <Link to="/saless">
                  <TrendingUpOutlinedIcon />
                  <span className="itemName">sales</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* End Side Bar Menu */}
          {/* Start Side Bar Menu */}
          <div className="sideBarMenu">
            <h4 className="headerMenu">quick menu</h4>
            <ul className="itemsMenu">
              <li className="itemMenu">
                <Link to="/users">
                  <PeopleAltOutlinedIcon />
                  <span className="itemName">users</span>
                </Link>
              </li>
              <li className="itemMenu">
                <Link to="/products">
                  <AddBusinessOutlinedIcon />
                  <span className="itemName">products</span>
                </Link>
              </li>
              <li className="itemMenu">
                <Link to="/transictions">
                  <AttachMoneyOutlinedIcon />
                  <span className="itemName">transictions</span>
                </Link>
              </li>
              <li className="itemMenu">
                <Link to="/reports">
                  <AssignmentOutlinedIcon />
                  <span className="itemName">reports</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* End Side Bar Menu */}
          {/* Start Side Bar Menu */}
          <div className="sideBarMenu">
            <h4 className="headerMenu">notifications</h4>
            <ul className="itemsMenu">
              <li className="itemMenu">
                <Link to="/mail">
                  <MailOutlinedIcon />
                  <span className="itemName">mail</span>
                </Link>
              </li>
              <li className="itemMenu">
                <Link to="/feedback">
                  <FeedbackOutlinedIcon />
                  <span className="itemName">feedback</span>
                </Link>
              </li>
              <li className="itemMenu">
                <Link to="/messages">
                  <ChatBubbleOutlineOutlinedIcon />
                  <span className="itemName">messages</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* End Side Bar Menu */}
          {/* Start Side Bar Menu */}
          <div className="sideBarMenu">
            <h4 className="headerMenu">staff</h4>
            <ul className="itemsMenu">
              <li className="itemMenu">
                <Link to="/manage">
                  <BusinessCenterOutlinedIcon />
                  <span className="itemName">manage</span>
                </Link>
              </li>
              <li className="itemMenu">
                <Link to="/analytics">
                  <TimelineOutlinedIcon />

                  <span className="itemName">analytics</span>
                </Link>
              </li>
              <li className="itemMenu">
                <Link to="/reports">
                  <ReportGmailerrorredOutlinedIcon />
                  <span className="itemName">reports</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* End Side Bar Menu */}
        </Router>
      </div>
    </div>
  );
};

export default Sidebar;
