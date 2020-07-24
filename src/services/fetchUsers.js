const url = "https://yalantis-react-school-api.yalantis.com/api/task0/users";

const fetchUsers = async () => {
  const response = await fetch(url);

  const users = await response.json();

  return users;
};

export default fetchUsers;
