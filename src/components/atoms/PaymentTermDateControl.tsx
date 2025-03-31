import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import type { PaymentTermDateProps } from '../../lib/types/payment-term-date.types';
import FontIcon from './FontIcon';

function PaymentTermDateControl({ control }: PaymentTermDateProps) {
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  return (
    <Controller
      name='paymentTerm'
      control={control}
      defaultValue={minDate}
      render={({ field: { onChange, value, ...rest } }) => (
        <DatePicker
          selected={value as Date}
          dateFormat='d MMMM, yyyy'
          minDate={minDate}
          customInput={<Form.Control type='text' style={{ cursor: 'default' }} />}
          onKeyDown={event => event.preventDefault()}
          showIcon
          icon={<FontIcon icon={['fas', 'calendar-days']} />}
          onChange={date => onChange(date)}
          {...rest} />
      )} />
  );
}

export default PaymentTermDateControl;
