import styled from "styled-components";

const TRANSACTIONWIDGET = styled.div`
  flex: 2;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const TITLEWIDJET = styled.h3`
  padding: 10px;
  text-transform: capitalize;
  font-weight: 400;
`;
const TABLE = styled.table`
  width: 100%;
`;
const THEAD = styled.thead`
  background-color: gray;
  width: 100%;
`;
const TABLEROW = styled.tr``;
const ROWHEADER = styled.th`
  padding: 10px;
  color: white;
  text-transform: capitalize;
`;
const TBODY = styled.tbody`
  background-color: rgba(0, 0, 0, 0.1);
`;

const ROWDATA = styled.td`
  text-transform: capitalize;
  text-align: center;
`;

/*
#4caf50 approved
#f44336ad decline
#607d8bcc pending
*/
const BUTTON = styled.button`
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  text-transform: capitalize;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.color || "gray"};
`;
const TransactionWidget = () => {
  return (
    <TRANSACTIONWIDGET>
      <TITLEWIDJET>latets sales</TITLEWIDJET>
      <TABLE>
        <THEAD>
          <TABLEROW>
            <ROWHEADER>customer</ROWHEADER>
            <ROWHEADER>date</ROWHEADER>
            <ROWHEADER>amount</ROWHEADER>
            <ROWHEADER>status</ROWHEADER>
          </TABLEROW>
        </THEAD>
        <TBODY>
          <TABLEROW>
            <ROWDATA>bilal saidi</ROWDATA>
            <ROWDATA>3-4-2022</ROWDATA>
            <ROWDATA>150.85$</ROWDATA>
            <ROWDATA>
              <BUTTON color="#4caf50">approved</BUTTON>
            </ROWDATA>
          </TABLEROW>
          <TABLEROW>
            <ROWDATA>Yahia Boucetta</ROWDATA>
            <ROWDATA>3-4-2022</ROWDATA>
            <ROWDATA>20.48$</ROWDATA>
            <ROWDATA>
              <BUTTON color="#f44336ad">decline</BUTTON>
            </ROWDATA>
          </TABLEROW>
          <TABLEROW>
            <ROWDATA>Achraf Mohamdi</ROWDATA>
            <ROWDATA>3-4-2022</ROWDATA>
            <ROWDATA>2000.52$</ROWDATA>
            <ROWDATA>
              <BUTTON color="#607d8bcc">pending</BUTTON>
            </ROWDATA>
          </TABLEROW>

          <TABLEROW>
            <ROWDATA>Achraf Mohamdi</ROWDATA>
            <ROWDATA>3-4-2022</ROWDATA>
            <ROWDATA>2000.52$</ROWDATA>
            <ROWDATA>
              <BUTTON color="#607d8bcc">pending</BUTTON>
            </ROWDATA>
          </TABLEROW>
          <TABLEROW>
            <ROWDATA>Achraf Mohamdi</ROWDATA>
            <ROWDATA>3-4-2022</ROWDATA>
            <ROWDATA>2000.52$</ROWDATA>
            <ROWDATA>
              <BUTTON color="#f44336ad">decline</BUTTON>
            </ROWDATA>
          </TABLEROW>
          <TABLEROW>
            <ROWDATA>Achraf Mohamdi</ROWDATA>
            <ROWDATA>3-4-2022</ROWDATA>
            <ROWDATA>2000.52$</ROWDATA>
            <ROWDATA>
              <BUTTON color="#4caf50">approved</BUTTON>
            </ROWDATA>
          </TABLEROW>
          <TABLEROW>
            <ROWDATA>obida saidi</ROWDATA>
            <ROWDATA>3-4-2022</ROWDATA>
            <ROWDATA>2000.52$</ROWDATA>
            <ROWDATA>
              <BUTTON color="#4caf50">approved</BUTTON>
            </ROWDATA>
          </TABLEROW>
          <TABLEROW>
            <ROWDATA>Achraf Mohamdi</ROWDATA>
            <ROWDATA>3-4-2022</ROWDATA>
            <ROWDATA>2000.52$</ROWDATA>
            <ROWDATA>
              <BUTTON color="#4caf50">approved</BUTTON>
            </ROWDATA>
          </TABLEROW>
        </TBODY>
      </TABLE>
    </TRANSACTIONWIDGET>
  );
};

export default TransactionWidget;
