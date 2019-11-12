import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment'

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

export default function DatePickerComponent() {
    return (
        <RangePicker
            format={dateFormat}
        />
    )
}
