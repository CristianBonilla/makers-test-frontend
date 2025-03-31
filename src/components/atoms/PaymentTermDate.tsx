import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import FontIcon from './FontIcon';

function PaymentTermDate() {
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const [date, setDate] = useState<Date>(minDate);

  return (
    <DatePicker
      selected={date}
      dateFormat='d MMMM, yyyy'
      minDate={minDate}
      onChange={date => !!date && setDate(date)}
      customInput={<Form.Control type='text' style={{ cursor: 'default' }} />}
      onKeyDown={event => event.preventDefault()}
      showIcon
      icon={<FontIcon icon={['fas', 'calendar-days']} />} />
  );
}

export default PaymentTermDate;
