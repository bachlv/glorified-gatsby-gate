import * as React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"

interface Props {
  email: string;
};

const SuccessfullySubmitForm = (props: Props) => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Đăng ký thành công
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Chúng tôi đã ghi nhận {props.email} vào hệ thống
      </AlertDescription>
    </Alert>
  );
}

export default SuccessfullySubmitForm;
