import { Spinner, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

type LoaderProps = {
  isLoading: boolean,
  withModal?: boolean
}

const Loader = ({ isLoading, withModal = true }: LoaderProps) => {

  if (!withModal) {
    return (
      <Spinner
        thickness="2px"
        speed="0.65s"
        emptyColor="gray.200"
        color="bg.primary"
        size="lg"
      />
    );
  }

  return (
    <Modal isOpen={isLoading} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent alignSelf="center" alignItems="center" width="auto" p="25px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="bg.primary"
          size="xl"
        />
      </ModalContent>
    </Modal>
  );
};

export default Loader;