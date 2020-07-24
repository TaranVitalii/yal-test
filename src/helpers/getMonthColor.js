import { colors } from "../components/Theme";

const getMonthColor = (users) => {
  const usersCount = users.length;

  if (usersCount >= 0 && usersCount <= 2) return colors.gray;
  if (usersCount >= 3 && usersCount <= 6) return colors.navyBlue;
  if (usersCount >= 7 && usersCount <= 10) return colors.green;
  if (usersCount >= 11) return colors.red;
};

export default getMonthColor;
