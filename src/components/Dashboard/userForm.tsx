import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Input,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { addUser } from "../../redux/user/userSlice";
import { FormValues } from "./user";

type UserFormProps = {
  isOpen: boolean,
  onClose: () => void
}

const UserForm = ({
  isOpen,
  onClose
}: UserFormProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({});

  const onSubmit = handleSubmit((data) => {
    dispatch(addUser(data));
    reset();
    onClose();
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={onSubmit}>
            <Stack direction="column" spacing={7} align='center'>
              <FormControl isInvalid={errors.branchId ? true : false}>
                <Input
                  {...register("branchId", { required: true })}
                  placeholder='Branch ID'
                />
                {errors?.branchId && <FormErrorMessage fontSize="12px">branch ID is required.</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={errors.userName ? true : false}>
                <Input
                  {...register("userName", { required: true })}
                  placeholder='Username'
                />
                {errors?.userName && <FormErrorMessage fontSize="12px">username is required.</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={errors.firstName ? true : false}>
                <Input
                  {...register("firstName", { required: true })}
                  placeholder='First Name'
                />
                {errors?.userName && <FormErrorMessage fontSize="12px">firstname is required.</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={errors.middleName ? true : false}>
                <Input
                  {...register("middleName", { required: true })}
                  placeholder='Middle Name'
                />
                {errors?.userName && <FormErrorMessage fontSize="12px">middlename is required.</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={errors.lastName ? true : false}>
                <Input
                  {...register("lastName", { required: true })}
                  placeholder='Last Name'
                />
                {errors?.userName && <FormErrorMessage fontSize="12px">lastname is required.</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={errors.position ? true : false}>
                <Input
                  {...register("position", { required: true })}
                  placeholder='Position'
                />
                {errors?.userName && <FormErrorMessage fontSize="12px">position is required.</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={errors.password ? true : false}>
                <Input
                  {...register("password", { required: true })}
                  placeholder='Password' type="password"
                />
                {errors?.password && <FormErrorMessage fontSize="12px">password is required.</FormErrorMessage>}
              </FormControl>

              <Stack direction="row" w="full" mb="20px">
                <Button w="full" colorScheme='teal' variant="outline" onClick={() => reset()}>
                  Reset
                </Button>
                <Button w="full" type="submit" colorScheme='teal'>
                  Save
                </Button>
              </Stack>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default UserForm;