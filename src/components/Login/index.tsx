import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Center,
  Flex,
  Text,
  Alert
} from "@chakra-ui/react";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/user/userSlice";

import Loader from "../common/Loader";
import LoginForm from "./loginForm";

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useAppSelector(selectUser);

  useEffect(() => {
    if (data) {
      navigate("/dashboard");
    }
  }, [isLoading]);

  return (
    <>
      <Loader isLoading={isLoading} />

      <Center minH="100vh">
        <Flex
          minW="320px"
          p="20px"
          flexDirection="column"
          gap="20px"
          border="1px solid #319795"
          borderRadius="6px"
        >
          <Text alignSelf="center" fontSize="22px" fontWeight={500}>Login</Text>

          <LoginForm />

          {error &&
            <Alert status='error'>
              User not found!!
            </Alert>}
        </Flex>
      </Center>
    </>
  );
}

export default Login;