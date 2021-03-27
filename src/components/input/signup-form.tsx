import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormLabel, Input, Select, Grid, Box, GridItem, useToast } from '@chakra-ui/react';
import { SignupFormData } from '../../declaration';
import DatePicker from './datepicker';
import SuccessfullySubmitForm from "./successfully-submit-form";

type RegisterResponse = {
    statusCode: number;
    data: string;
    error: string;
}

function validateEmail(email: string): boolean {
    return /^\S+@\S+$/.test(email);
}
interface Props {
    progress: number;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const SignupForm = (props: Props) => {
    const { progress, setProgress } = props;
    const toast = useToast();
    const { register, setValue, handleSubmit, errors } = useForm<SignupFormData>();
    const [email, setEmail] = React.useState<string>("");
    const [dob, setDate] = React.useState<Date>(null)
    const [isJobListed, setJobListing] = React.useState(true);
    const [isSubmitting, setSubmitting] = React.useState(false);

    const handleJobDetail = (e) => {
        if (e.target.value == 'Khác') {
            setJobListing(false);
            setValue('job', '');
        }
        else {
            setJobListing(true);
            setValue('job', e.target.value);
        };
    }

    const onSubmit = handleSubmit(async ({ name, gender, email, phone, job }) => {
        setSubmitting(true);

        if (!dob) {
            setSubmitting(false);
            return toast({
                title: "Đăng ký thất bại",
                description: "Bạn chưa điền ngày sinh",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
        if (!validateEmail(email)) {
            setSubmitting(false);
            return toast({
                title: "Đăng ký thất bại",
                description: "Email không đúng định dạng",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }

        window.grecaptcha.ready(function () {
            window.grecaptcha.execute(process.env.GATSBY_CAPTCHA_KEY, { action: 'register' }).then(async function (token) {
                // Send form value as well as token to the server
                const response = await fetch(process.env.GATSBY_API_URL, {
                    method: 'POST',
                    credentials: 'omit',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, dob: dob.getTime() / 1000, gender, email, phone, job, token })
                });
                setSubmitting(false);
                const jsonResponse = await response.json() as RegisterResponse;
                if (jsonResponse.statusCode === 200) {
                    setEmail(email);
                    setProgress(1);
                } else {
                    const msg = jsonResponse.error.includes("duplicate") ? `Email ${email} đã tồn tại trong hệ thống` : "Vui lòng kiểm tra lại thông tin";
                    toast({
                        title: "Đăng ký thất bại",
                        description: msg,
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                    });
                }
            });
        });

    });

    if (progress === 1) return <SuccessfullySubmitForm email={email} />

    if (progress === 0) return (
        <>
            <Box px={[8]} py={4}>
                <form onSubmit={onSubmit}>
                    <FormControl>
                        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                            <GridItem colSpan={5}>
                                <FormLabel fontWeight="bold" fontSize="sm">Họ và tên</FormLabel>
                                <Input isRequired type="text" id="name" name="name" ref={register} focusBorderColor="white" />
                            </GridItem>
                            <GridItem colSpan={3}>
                                <FormLabel fontWeight="bold" fontSize="sm" htmlFor="published-date">Ngày sinh</FormLabel>
                                <DatePicker
                                    id="published-date"
                                    selectedDate={dob}
                                    onChange={(e) => setDate(e)}
                                    isClearable
                                />
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormLabel fontWeight="bold" fontSize="sm">Giới tính</FormLabel>
                                <Select isRequired id="gender" name="gender" ref={register} focusBorderColor="white" defaultValue="">
                                    <option disabled></option>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                    <option>Khác</option>
                                </Select>
                            </GridItem>
                            <GridItem colSpan={5}>
                                <FormLabel fontWeight="bold" fontSize="sm">Email</FormLabel>
                                <Input isRequired id="email" type="text" name="email" ref={register} focusBorderColor="white" />
                            </GridItem>
                            <GridItem colSpan={5}>
                                <FormLabel fontWeight="bold" fontSize="sm">Số điện thoại</FormLabel>
                                <Input isRequired id="phone" type="tel" name="phone" ref={register()} focusBorderColor="white" />
                            </GridItem>
                            <GridItem colSpan={isJobListed ? 5 : 2}>
                                <FormLabel fontWeight="bold" fontSize="sm">Nghề nghiệp</FormLabel>
                                <Select isRequired id="job" defaultValue=""
                                    name="job" ref={register} focusBorderColor="white"
                                    onChange={(e) => { handleJobDetail(e) }}>
                                    <option disabled></option>
                                    <option>Sinh viên</option>
                                    <option>Lập trình viên</option>
                                    <option>Chuyên viên bảo mật</option>
                                    <option>Kỹ sư bảo mật</option>
                                    <option>Khác</option>
                                </Select>
                            </GridItem>
                            <GridItem colSpan={3} hidden={isJobListed}>
                                <FormLabel fontWeight="bold" fontSize="sm" opacity={0}>Nghề nghiệp</FormLabel>
                                <Input isRequired={!isJobListed} id="job-other" type="tel" name="job" ref={register()} focusBorderColor="white" />
                            </GridItem>
                        </Grid>
                        <Button mt={8} type="submit" variant="bp" isLoading={isSubmitting} isFullWidth color="acmeRed">Đăng ký</Button>
                    </FormControl>
                </form>
            </Box>
        </>
    );
}

export default SignupForm;
