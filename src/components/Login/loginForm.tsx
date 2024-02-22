import {
  Input,
  Button,
  Stack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";

import { loginUser } from "../../redux/user/userActions";
import { FormValues } from "./login";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  const onSubmit = handleSubmit((data) => {
    dispatch(loginUser(data));
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack direction="column" spacing={4} align='center'>
        <FormControl isInvalid={errors.branchID ? true : false}>
          <Input
            {...register("branchID", { required: true })}
            placeholder='Branch ID'
          />
          {errors?.branchID && <FormErrorMessage fontSize="12px">branch ID is required.</FormErrorMessage>}
        </FormControl>

        <FormControl isInvalid={errors.username ? true : false}>
          <Input
            {...register("username", { required: true })}
            placeholder='Username'
          />
          {errors?.username && <FormErrorMessage fontSize="12px">username is required.</FormErrorMessage>}
        </FormControl>

        <FormControl isInvalid={errors.password ? true : false}>
          <Input
            {...register("password", { required: true })}
            placeholder='Password' type="password"
          />
          {errors?.password && <FormErrorMessage fontSize="12px">password is required.</FormErrorMessage>}
        </FormControl>

        <Button w="full" type="submit" colorScheme='teal' data-testid="login-btn">
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;