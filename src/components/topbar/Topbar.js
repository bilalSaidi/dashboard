import React from "react";
import Badge from "@material-ui/core/Badge";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import styled from "styled-components";

const TOPBAR = styled.div`
  height: 70px;
  position: sticky;
  top: 0;
  background-color: #fff;
`;
const TOPBARWRAPPER = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const LOGO = styled.span`
  color: darkblue;
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DASHICON = styled(DashboardIcon)`
  cursor: pointer;
  margin-right: 10px;
  color: black;
`;
const LEFTTOPBAR = styled.div`
  display: flex;
  align-items: center;
`;
const LISTICONS = styled.div`
  display: flex;
`;
const ICON = styled.div`
  margin: 0 8px;
  cursor: pointer;
`;
const IMG = styled.img`
  width: 40px;
  height: 40px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;
const Tobpar = () => {
  return (
    <TOPBAR>
      <TOPBARWRAPPER>
        <LOGO>
          <DASHICON></DASHICON>
          admin dashboard
        </LOGO>
        <LEFTTOPBAR>
          <LISTICONS>
            <ICON>
              <Badge badgeContent={4} color="error">
                <NotificationsNone />
              </Badge>
            </ICON>
            <ICON>
              <Language />
            </ICON>
            <ICON>
              <Settings />
            </ICON>
          </LISTICONS>
          <IMG
            src={require("../../assets/profile/peronal_photo.jpg").default}
            alt="admin user panel  "
          />
        </LEFTTOPBAR>
      </TOPBARWRAPPER>
    </TOPBAR>
  );
};

export default Tobpar;
