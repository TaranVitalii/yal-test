import moment from "moment";

const getMonthOfDob = (dob) =>
  moment(dob, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format("MMMM");

export default getMonthOfDob;
