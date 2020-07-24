import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Month from "./Month";
import fetchUsers from "../services/fetchUsers";

import { monthList } from "../models";

const MonthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers()
      .then((res) => setUsers(res))
      .catch((e) => setUsers([]));
  }, []);

  return (
    <MonthWrapper>
      {monthList.map((month, index) => (
        <Month monthName={month} users={users} key={`${month}_${index}`} />
      ))}
    </MonthWrapper>
  );
};

export default Dashboard;
