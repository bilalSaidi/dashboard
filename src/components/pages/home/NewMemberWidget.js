import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
const NEWMEMBERWIDGET = styled.div`
  flex: 1;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-right: 2%;
`;
const TITLEWIDJET = styled.h3`
  padding: 10px;
  text-transform: capitalize;
  font-weight: 400;
`;

const MEMBERS = styled.div`
  display: flex;
  flex-direction: column;
`;
const IMG = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const MEMBERHOLDER = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5px;
`;

const MEMBERINFO = styled.div`
  text-align: center;
`;
const MEMBERNAME = styled.span`
  display: block;
  font-size: 18px;
  text-transform: capitalize;
  color: gray;
  font-weight: bold;
`;
const MEMBERTITLE = styled.span`
  display: block;
  font-size: 17px;
  text-transform: capitalize;
  color: gray;
`;

const BTNDISPLAY = styled.button`
  border-radius: 5px;
  padding: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  transition: all 0.5s ease-out;
`;

const BTNTEXT = styled.span`
  text-transform: capitalize;
  display: inline-block;
  margin-left: 8px;
`;
const NewMemberWidget = () => {
  return (
    <NEWMEMBERWIDGET>
      <TITLEWIDJET>new memeber</TITLEWIDJET>
      <MEMBERS>
        <Member
          source_img={"/assets/profile/peronal_photo.jpg"}
          name={"bilal saidi"}
          title={"web developer"}
        />
        <Member
          source_img={"/assets/profile/peronal_photo.jpg"}
          name={"obida saidi"}
          title={"officer "}
        />
        <Member
          source_img={"/assets/profile/peronal_photo.jpg"}
          name={"yahia boucetta"}
          title={"officer military "}
        />
        <Member
          source_img={"/assets/profile/peronal_photo.jpg"}
          name={"achraf mohamdi"}
          title={"electrical engenieer "}
        />
      </MEMBERS>
    </NEWMEMBERWIDGET>
  );
};

const Member = ({ source_img, name, title }) => {
  return (
    <MEMBERHOLDER>
      <IMG src={source_img} />

      <MEMBERINFO>
        <MEMBERNAME> {name}</MEMBERNAME>
        <MEMBERTITLE> {title}</MEMBERTITLE>
      </MEMBERINFO>

      <BTNDISPLAY>
        <VisibilityIcon />
        <BTNTEXT>display</BTNTEXT>
      </BTNDISPLAY>
    </MEMBERHOLDER>
  );
};
export default NewMemberWidget;
