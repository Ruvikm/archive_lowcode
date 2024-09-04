import { DatePicker as AntdDatePicker } from 'antd'
import type { DatePickerProps , TimeRangePickerProps } from 'antd'
import dayjs from 'dayjs'

const DatePicker = (props: DatePickerProps) => {
  return (
    <AntdDatePicker
      {...props}
      defaultValue={props.defaultValue ? dayjs(props.defaultValue) : undefined}
      value={props.value ? dayjs(props.value) : undefined}
    />
  )
}

const RangePicker = (props: TimeRangePickerProps) => {
  const defaultValue = props?.defaultValue?.length && props.defaultValue.filter((item) => item)
  const value = props?.defaultValue?.length && props.defaultValue.filter((item) => item)
  return (
    <AntdDatePicker.RangePicker
      {...props}
      defaultValue={defaultValue?.length ? [dayjs(defaultValue[0]), dayjs(defaultValue[1])] : undefined}
      value={value?.length ? [dayjs(value[0]), dayjs(value[1])] : undefined}
    />
  )
}


DatePicker.RangePicker = RangePicker

export default DatePicker

export { DatePicker }
