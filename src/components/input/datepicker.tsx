import React, { HTMLAttributes } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import vi from "date-fns/locale/vi";

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';

const weekdays = [...Array(7).keys()].map(i => vi.localize.day(i, { width: 'narrow' }))
vi.localize.day = (n) => weekdays[n];
registerLocale("vi", vi);

interface Props {
    isClearable?: boolean;
    onChange: (date: Date) => any;
    selectedDate: Date | undefined;
    showPopperArrow?: boolean;
}

const DatePicker = ({
    selectedDate,
    onChange,
    isClearable = false,
    showPopperArrow = false,
    ...props
}: Props & HTMLAttributes<HTMLElement>) => {
    return (
        <ReactDatePicker
            selected={selectedDate}
            onChange={onChange}
            isClearable={isClearable}
            showPopperArrow={showPopperArrow}
            dateFormat="dd/MM/yyyy"
            locale="vi"
            maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 16))}
        />
    );
};

export default DatePicker;