import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import CurrencyInput from 'react-currency-input-field';
import FontIcon from '../../atoms/FontIcon';
import PaymentTermDate from '../../atoms/PaymentTermDate';

function Application() {
  return (
    <Container fluid className='px-1 px-sm-2 px-lg-3'>
      <Card style={{ maxWidth: '25rem', width: '100%' }}>
        <Card.Body className='p-4'>
          <Card.Title as='h3'>Solicitar Préstamo</Card.Title>
          <Card.Subtitle className='mb-3 text-body-tertiary'>Ingrese el monto que desea solicitar</Card.Subtitle>
          <Form noValidate autoComplete='off' spellCheck='false'>
            <Form.Group className='mb-3' controlId='amount'>
              <Form.Label>Monto</Form.Label>
              <Form.Control
                as={CurrencyInput}
                type='text'
                placeholder='Monto'
                defaultValue={1000000}
                allowDecimals={false}
                allowNegativeValue={false}
                maxLength={12}
                step={1}
                prefix='$' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='paymentTerm'>
              <Form.Label>Plazo de pago</Form.Label>
              <PaymentTermDate />
            </Form.Group>
            <div className="d-flex justify-content-end w-100">
              <Button className='d-flex gap-2' type='submit' variant='danger'>
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
