import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CurrencyInput from 'react-currency-input-field';
import { Controller } from 'react-hook-form';
import type { AmountProps } from '../../lib/types/amount.types';

function AmountControl({ control, defaultAmount }: AmountProps) {
  const [isBlur, setIsBlur] = useState<boolean>(false);

  return (
    <Controller
      name='amount'
      control={control}
      rules={{
        required: {
          message: 'El monto es requerido para el préstamo',
          value: true
        },
        min: {
          message: 'El monto debe ser igual o superior a $1.000.000',
          value: 1000000
        }
      }}
      defaultValue={defaultAmount}
      render={({ field: { onChange, value, ...rest }, fieldState: { invalid } }) => (
        <Form.Control
          as={CurrencyInput}
          type='text'
          placeholder='Monto'
          defaultValue={defaultAmount}
          allowDecimals={false}
          allowNegativeValue={false}
          maxLength={12}
          step={1}
          prefix='$'
          isInvalid={invalid}
          isValid={!invalid && !!value}
          onValueChange={amount => !isBlur && onChange(amount ? parseInt(amount, 10) : undefined)}
          onFocusCapture={() => setIsBlur(false)}
          onBlurCapture={() => setIsBlur(true)}
          {...rest} />
      )} />
  );
}

export default AmountControl;
