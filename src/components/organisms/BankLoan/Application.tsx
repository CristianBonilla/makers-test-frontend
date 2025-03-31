import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FontIcon from '../../atoms/FontIcon';
import PaymentTermDate from '../../atoms/PaymentTermDate';

function Application() {
  return (
    <Container fluid className='px-1 px-sm-2 px-lg-3'>
      <Card style={{ maxWidth: '25rem', width: '100%' }}>
        <Card.Body className='p-4'>
          <Card.Title as='h3'>Solicitar Préstamo</Card.Title>
          <Card.Subtitle className='mb-3 text-muted'>Ingrese el monto que desea solicitar</Card.Subtitle>
          <Form noValidate autoComplete='true' spellCheck='false'>
            <Form.Group className='mb-3' controlId='amount'>
              <Form.Label>Monto</Form.Label>
              <Form.Control type='text' placeholder='Monto' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='paymentTerm'>
              <Form.Label>Plazo de pago</Form.Label>
              <PaymentTermDate />
            </Form.Group>
            <div className="d-flex justify-content-end w-100">
              <Button type='submit' variant='danger'>
                <FontIcon icon={['fas', 'paper-plane']} size='lg' />
                <span style={{ marginLeft: '5px' }}>Enviar</span>
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Application;
