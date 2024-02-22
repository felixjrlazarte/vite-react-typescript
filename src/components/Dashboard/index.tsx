import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Button
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectUser, logoutUser } from "../../redux/user/userSlice";
import UserForm from "./userForm";
import UserList from "./userList";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users, data } = useAppSelector(selectUser);
  const [addUserModal, setAddUserModal] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, [data]);

  return (
    <Flex
      minW="100%"
      minH="100vh"
      flexDirection="column"
    >
      <Flex justifyContent="space-between" bgColor="#319795" p="20px" mb="30px">
        <Text alignSelf="center" fontSize="22px" color="white" fontWeight={500}>Welcome {data?.firstName}!</Text>
        <Button onClick={handleLogout}>
          Logout
        </Button>
      </Flex>

      <Flex justifyContent="flex-end" p="20px" mb="10px">
        <Button colorScheme="teal" onClick={() => setAddUserModal(true)}>
          <AddIcon  mr="10px" />
          Add User
        </Button>
      </Flex>

      <UserForm isOpen={addUserModal} onClose={() => setAddUserModal(false)}/>
      <UserList users={users} />
    </Flex>
  );
}

export default Dashboard;