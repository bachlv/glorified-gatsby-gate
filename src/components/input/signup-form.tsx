import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { SignupFormData } from '../../declaration';
import DatePicker from './datepicker';

const SignupForm = () => {
    const { register, setValue, handleSubmit, errors } = useForm<SignupFormData>();
    const [dob, setDate] = React.useState<Date>(null)
    const onSubmit = handleSubmit(async ({ name, gender, email, phone, job }) => {
        const requestOptions = {
            method: 'POST',
            credentials: 'omit',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, dob: dob.getTime() / 1000, gender, email, phone, job })
        };
        const response = await fetch('http://localhost:5000/public/registrations', requestOptions)
            .then(() => {
                console.log("ok");
            }).catch(() => {
                console.log("error");
            });
    });

    return (
        <form onSubmit={onSubmit}>
            <FormControl>
                <FormLabel>Họ và tên</FormLabel>
                <Input type="text" name="name" ref={register} />
                <FormLabel htmlFor="published-date">Ngày sinh</FormLabel>
                <DatePicker
                    id="published-date"
                    selectedDate={dob}
                    onChange={(e) => setDate(e)}
                    showPopperArrow
                    isClearable
                />
                <FormLabel>Giới tính</FormLabel>
                <Select placeholder="Chọn..." name="gender" ref={register}>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                </Select>
                <FormLabel>Email</FormLabel>
                <Input type="text" name="email" ref={register} />
                <FormLabel>Số điện thoại</FormLabel>
                <Input type="tel" name="phone" ref={register()} />
                <FormLabel>Nghề nghiệp</FormLabel>
                <Select placeholder="Chọn..." name="job" ref={register}>
                    <option>Sinh viên</option>
                    <option>Kỹ sư</option>
                    <option>Lập trình viên</option>
                    <option>Chuyên viên bảo mật</option>
                    <option>Khác</option>
                </Select>
                <Button
                    type="submit"
                >
                    Đăng ký
                </Button>
            </FormControl>
        </form>
    );
}

export default SignupForm;
