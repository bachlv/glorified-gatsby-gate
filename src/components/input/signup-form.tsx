import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormLabel, Input, Select, Grid, Box, GridItem, useToast } from '@chakra-ui/react';
import { SignupFormData } from '../../declaration';
import DatePicker from './datepicker';
import SuccessfullySubmitForm from "./successfully-submit-form";


function validateEmail(email: string): boolean {
    return /^\S+@\S+$/.test(email);
}
interface Props {
    progress: number;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const SITE_KEY = 'process.env.GATSBY_SITE_KEY';

const SignupForm = (props: Props) => {
    const { progress, setProgress } = props;
    const toast = useToast();
    const { register, setValue, handleSubmit, errors } = useForm<SignupFormData>();
    const [email, setEmail] = React.useState<string>("");
    const [dob, setDate] = React.useState<Date>(null)
    const [isJobListed, setJobListing] = React.useState(true);
    const [isSubmitting, setSubmitting] = React.useState(false);

    React.useEffect(() => { console.log("ok")}, []);

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
            return toast({
                title: "Đăng ký thất bại",
                description: "Bạn chưa điền ngày sinh",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
        if (!validateEmail(email)) {
            return toast({
                title: "Đăng ký thất bại",
                description: "Email không đúng định dạng",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }

        if (job === "Khác") {
            return toast({
                title: "Đăng ký thất bại",
                description: "Khacs",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }

        window.grecaptcha.ready(function () {
            window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(async function (token) {
                // Send form value as well as token to the server
                const response = await fetch('http://api.exam.acme.io/public/registrations', {
                    method: 'POST',
                    credentials: 'omit',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, dob: dob.getTime() / 1000, gender, email, phone, job, token })
                });
                const jsonResponse = await response.json();
                if (jsonResponse.statusCode === 200) {
                    setEmail(email);
                    setProgress(1);
                } else {
                    toast({
                        title: "Đăng ký thất bại",
                        description: `Vui lòng kiểm tra lại thông tin.`,
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                    });
                }
            });
        });


        setSubmitting(false);
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
                                    onClick={(e) => { handleJobDetail(e) }}>
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
                        <Button mt={8} type="submit" data-action='submit' variant="bp" isLoading={isSubmitting} isFullWidth color="#b32c36">Đăng ký</Button>
                    </FormControl>
                </form>
            </Box>
        </>
    );
}

export default SignupForm;
