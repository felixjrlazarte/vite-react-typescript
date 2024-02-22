import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useAppDispatch } from "../../redux/hooks";
import { deleteUser } from "../../redux/user/userSlice";
import { UserInterface } from "../../redux/user/userSlice";

type UserListProps = {
  users: UserInterface[]
}

const UserList = ({
  users
}: UserListProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteUser = (username: string) => {
    dispatch(deleteUser(username));
  }

  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th isNumeric>#</Th>
            <Th>Branch ID</Th>
            <Th>Username</Th>
            <Th>Name</Th>
            <Th>Position</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={user.userName}>
              <Td isNumeric>{index + 1}</Td>
              <Td>{user.branchId}</Td>
              <Td>{user.userName}</Td>
              <Td>{`${user.firstName} ${user.lastName}`}</Td>
              <Td>{user.position}</Td>
              <Td>
                <Button variant="outline" onClick={() => handleDeleteUser(user.userName)}>
                  <DeleteIcon />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default UserList;