import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormLabel, Input, Select, Grid, Box, GridItem, useToast  } from '@chakra-ui/react';
import { SignupFormData } from '../../declaration';
import DatePicker from './datepicker';
import SuccessfullySubmitForm from "./successfully-submit-form";


const SignupForm = () => {
    const toast = useToast();
    const { register, setValue, handleSubmit, errors } = useForm<SignupFormData>();
    const [email, setEmail] = React.useState<string>("");
    const [dob, setDate] = React.useState<Date>(null)
    const [progress, setProgress] = React.useState<number>(0);

    const onSubmit = handleSubmit(async ({ name, gender, email, phone, job }) => {
        if (!dob) {
            toast({
                title: "Đăng ký thất bại",
                description: "Bạn chưa điền ngày sinh",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        const requestOptions = {
            method: 'POST',
            credentials: 'omit',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, dob: dob.getTime() / 1000, gender, email, phone, job })
        };
        const response = await fetch('http://api.exam.acme.io/public/registrations', requestOptions);
        const jsonResponse = await response.json();
        if (jsonResponse.statusCode === 200) {
            setEmail(email);
            setProgress(1);
        } else {
            toast({
                title: "Đăng ký thất bại",
                description: `Email ${email} đã được đăng ký`,
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    });

    if (progress === 1) return <SuccessfullySubmitForm email={email} />

    if (progress === 0) return (
        <Box px={[8]} py={4}>
            <form onSubmit={onSubmit}>
                <FormControl>
                    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                        <GridItem colSpan={5}>
                            <FormLabel>Họ và tên</FormLabel>
                            <Input isRequired type="text" name="name" ref={register} focusBorderColor="black"/>
                        </GridItem>
                        <GridItem colSpan={3}>
                            <FormLabel htmlFor="published-date">Ngày sinh</FormLabel>
                            <DatePicker
                                id="published-date"
                                selectedDate={dob}
                                onChange={(e) => setDate(e)}
                                isClearable
                            />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel>Giới tính</FormLabel>
                            <Select isRequired placeholder="Chọn..." name="gender" ref={register} focusBorderColor="black">
                                <option>Nam</option>
                                <option>Nữ</option>
                                <option>Khác</option>
                            </Select>
                        </GridItem>
                        <GridItem colSpan={5}>
                            <FormLabel>Email</FormLabel>
                            <Input isRequired type="text" name="email" ref={register} focusBorderColor="black" />
                        </GridItem>
                        <GridItem colSpan={5}>
                            <FormLabel>Số điện thoại</FormLabel>
                            <Input isRequired type="tel" name="phone" ref={register()} focusBorderColor="black" />
                        </GridItem>
                        <GridItem colSpan={5}>
                            <FormLabel>Nghề nghiệp</FormLabel>
                            <Select isRequired placeholder="Chọn..." name="job" ref={register} focusBorderColor="black" >
                                <option>Sinh viên</option>
                                <option>Kỹ sư</option>
                                <option>Lập trình viên</option>
                                <option>Chuyên viên bảo mật</option>
                                <option>Khác</option>
                            </Select>
                        </GridItem>
                    </Grid>
                    <Button mt={8} type="submit" variant="bp" isFullWidth>Đăng ký</Button>
                </FormControl>
            </form>
        </Box>
    );
}

export default SignupForm;
