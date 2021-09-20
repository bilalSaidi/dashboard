import React from "react";
import Badge from "@material-ui/core/Badge";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";
const Tobpar = () => {
  return (
    <div className="Tobpar">
      <div className="Tobbarwrapper">
        <div className="rightTopbar">
          <span className="logo">admin dashboard</span>
        </div>
        <div className="leftTopbar">
          <div className="listicons">
            <div className="icon">
              <Badge badgeContent={4} color="error">
                <NotificationsNone />
              </Badge>
            </div>
            <div className="icon">
              <Language />
            </div>
            <div className="icon">
              <Settings />
            </div>
          </div>
          <div className="imageAdmin">
            <img
              src={require("../../assets/profile/peronal_photo.jpg").default}
              alt="admin user panel  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tobpar;
