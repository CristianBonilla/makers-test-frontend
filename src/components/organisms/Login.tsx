import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Container className='login'>
      <div className='login__wrap'>
        <h2 className='text-secondary-emphasis text-start'>Iniciar Sesión</h2>
        <p className='text-body-tertiary'>Ingrese sus credenciales para acceder</p>
        <Form noValidate autoComplete='off' spellCheck='false'>
          <Form.Group className='mb-3' controlId='username-or-email'>
            <Form.Label>Usuario o Email</Form.Label>
            <Form.Control type='text' placeholder='Usuario o Email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type='password' placeholder='Contraseña' />
          </Form.Group>
          <div className='d-flex align-items-start align-items-sm-center flex-column flex-sm-row justify-content-sm-between w-100'>
            <a id='forgot-password' className='forgot-password mb-2 mb-sm-0' href="" onClick={event => event.preventDefault()}>
              Olvidaste la contraseña?
            </a>
            <Button type='submit' variant='danger' size='lg'>Iniciar Sesión</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
