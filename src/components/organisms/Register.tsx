import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Register() {
  return (
    <Container className='register'>
      <div className="register__wrap">
        <h2 className='text-secondary-emphasis text-start'>Registrarse</h2>
        <Form noValidate autoComplete='off' spellCheck='false'>
          <Form.Group className='mb-3' controlId='document-number'>
            <Form.Label>Documento de identificación</Form.Label>
            <Form.Control type='text' placeholder='Documento de identificación'/>
          </Form.Group>
          <Form.Group className='mb-3' controlId='username'>
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control type='text' placeholder='Nombre de usuario'/>
          </Form.Group>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Correo</Form.Label>
            <Form.Control type='text' placeholder='Correo electrónico'/>
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type='password' placeholder='Contraseña'/>
          </Form.Group>
          <Form.Group className='mb-3' controlId='confirm-password'>
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control type='password' placeholder='Confirmar contraseña'/>
          </Form.Group>
          <Form.Group className='mb-3' controlId='firstname'>
            <Form.Label>Nombres</Form.Label>
            <Form.Control type='text' placeholder='Nombres'/>
          </Form.Group>
          <Form.Group className='mb-3' controlId='lastname'>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type='text' placeholder='Apellidos'/>
          </Form.Group>
          <Button type='submit' variant='danger' size='lg'>Registrarse</Button>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
