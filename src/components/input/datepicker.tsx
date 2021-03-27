import React, { HTMLAttributes } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';

const monthValues = ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'];
const dayValues = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

registerLocale('vi', {
  localize: {
    month: n => monthValues[n],
    day: n => dayValues[n]
  }, 
  formatLong:{} 
});

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
            dateFormat="dd/MM/yyyy"
            selected={selectedDate}
            onChange={onChange}
            isClearable={isClearable}
            showPopperArrow={showPopperArrow}
            locale="vi"
            maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 16))}
        />
    );
};

export default DatePicker;