import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BankLoanRequest } from '../../../lib/interfaces/bank-loan.interface';
import AmountControl from '../../atoms/AmountControl';
import FontIcon from '../../atoms/FontIcon';
import PaymentTermDateControl from '../../atoms/PaymentTermDateControl';

function Application() {
  const { control, register, handleSubmit, setFocus, formState: { errors } } = useForm<Partial<BankLoanRequest>>({
    mode: 'onChange'
  });
  const userIdField = register('userId');
  const onSend: SubmitHandler<Partial<BankLoanRequest>> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    setFocus('amount');
  }, [setFocus]);

  return (
    <Container fluid className='px-1 px-sm-2 px-lg-3'>
      <Card style={{ maxWidth: '30rem', width: '100%' }}>
        <Card.Body className='p-4'>
          <Card.Title as='h3'>Solicitar Préstamo</Card.Title>
          <Card.Subtitle className='mb-3 text-body-tertiary'>Ingrese el monto que desea solicitar</Card.Subtitle>
          <Form noValidate autoComplete='off' spellCheck='false' onSubmit={handleSubmit(onSend)}>
            <Form.Control {...userIdField} type='hidden' />
            <Form.Group className='mb-3' controlId='amount'>
              <Form.Label>Monto</Form.Label>
              <AmountControl control={control} />
              <Form.Control.Feedback type='invalid'>{ errors.amount?.message }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId='paymentTerm'>
              <Form.Label>Plazo de pago</Form.Label>
              <PaymentTermDateControl control={control} />
              <Form.Control.Feedback type='invalid'>{ errors.paymentTerm?.message }</Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex justify-content-end w-100">
              <Button type='submit' className='d-flex gap-2' variant='danger'>
                <FontIcon icon={['fas', 'paper-plane']} size='lg' />
                <span>Enviar</span>
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Application;
