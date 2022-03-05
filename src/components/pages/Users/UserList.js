import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Link } from "react-router-dom";

const USERLIST = styled.div`
  background-color: rba(0, 0, 0, 0.3);
  margin-top: 15px;
  height: 400px;
`;

const USERROWHOLDER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const USERAVATAR = styled.img`
  object-fit: cover;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;
const USERNAME = styled.span`
  text-transform: capitalize;
`;

const UserList = () => {
  const [user, setUser] = useState([
    {
      id: 1,
      username: "bilal saidi",
      avatar: "/assets/users/pexels-photo-220453.jpeg",
      email: "bilal.saidibatna@gmail.com",
      status: "active",
      totalsales: "150$",
    },
    {
      id: 2,
      username: "hafsa saidi",
      avatar: "/assets/users/pexels-photo-415829.jpeg",
      email: "bilal.saidibatna@gmail.com",
      status: "active",
      totalsales: "2580$",
    },
    {
      id: 3,
      username: "obida saidi",
      avatar: "/assets/users/pexels-photo-1043471.jpeg",
      email: "obida.s@hotmail.fr",
      status: "active",
      totalsales: "22.20$",
    },
    {
      id: 4,
      username: "rahma saidi",
      avatar: "/assets/users/pexels-photo-1542085.jpeg",
      email: "r.saidi@gmail.com",
      status: "active",
      totalsales: "1500$",
    },
  ]);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "USER",
      width: 200,
      renderCell: (data) => {
        return (
          <USERROWHOLDER>
            <USERAVATAR src={data.row.avatar} alt="user avatar" />
            <USERNAME>{data.row.username}</USERNAME>
          </USERROWHOLDER>
        );
      },
    },
    { field: "email", headerName: "EMAIL", width: 200 },
    { field: "status", headerName: "STATUS", width: 100 },
    { field: "totalsales", headerName: "TOTAL SALES", width: 200 },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 300,
      renderCell: (data) => {
        return (
          <Stack direction="row" spacing={2}>
            <Link to={"/user/" + data.row.id}>
              <Button variant="outlined" startIcon={<VisibilityIcon />}>
                View
              </Button>
            </Link>

            <Button
              variant="contained"
              endIcon={<DeleteIcon />}
              color="error"
              onClick={() => UserToBlackList(data.row.id)}
            >
              Black List
            </Button>
          </Stack>
        );
      },
    },
  ];

  const UserToBlackList = (id) => {
    setUser(user.filter((item) => item.id !== id));
  };
  return (
    <USERLIST>
      <DataGrid rows={user} columns={columns} pageSize={100} />
    </USERLIST>
  );
};

export default UserList;
