import React from "react";
import styled from "styled-components";

import { colors } from "./Theme";
import monthCreator from "../helpers/monthCreator";
import getMonthColor from "../helpers/getMonthColor";

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 8;
  border-bottom-right-radius: 8;
  opacity: 0;
`;

const UserItem = styled.div`
  height: 0%;
  text-align: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color:${({ backgroundColor }) =>
    backgroundColor === colors.navyBlue ? colors.white : colors.black}};

`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600px;
  text-align: center;
  color:${({ bgColor }) =>
    bgColor === colors.navyBlue ? colors.white : colors.black}};
`;

const MonthContainer = styled.div`
  display: flex;
  width: 15%;
  height: 50px;
  margin: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
  &:hover {
    display: block;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 100;

    ${UserItem} {
      height: 100%;
    }

    ${UserList} {
      opacity: 1;
    }
  }
`;

const Month = ({ monthName, users }) => {
  const userBornInThisMonth = monthCreator(users, monthName);
  const monthColor = getMonthColor(userBornInThisMonth);

  return (
    <MonthContainer backgroundColor={monthColor}>
      <Title bgColor={monthColor}>{monthName}</Title>
      <UserList>
        {userBornInThisMonth.map((user) => (
          <UserItem key={user.id} backgroundColor={monthColor}>
            {user.firstName} {user.lastName}
          </UserItem>
        ))}
      </UserList>
    </MonthContainer>
  );
};

export default Month;
