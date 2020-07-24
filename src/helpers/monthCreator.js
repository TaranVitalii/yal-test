import getMonthOfDob from "./getMonthOfDob";

const monthCreator = (users, month) => {
  const usersBornInOneMonth = users.filter((item) => {
    const userMonth = getMonthOfDob(item.dob);

    return userMonth === month;
  });

  return usersBornInOneMonth;
};

export default monthCreator;
