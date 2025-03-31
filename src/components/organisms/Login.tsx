import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginRequest } from '../../lib/interfaces/auth.interface';

function Login() {
  const { register, handleSubmit, setFocus, formState: { errors } } = useForm<LoginRequest>({
    mode: 'onChange'
  });
  const usernameOrEmailField = register('usernameOrEmail', {
    required: {
      message: 'El nombre de usuario o email es requerido',
      value: true
    }
  });
  const passwordField = register('password', {
    required: {
      message: 'La contraseña es requerida',
      value: true
    }
  });
  const onLogin: SubmitHandler<LoginRequest> = data => {
    console.log(data);
  };
  useEffect(() => {
    setFocus('usernameOrEmail');
  }, [setFocus]);

  return (
    <Container className='login'>
      <div className='login__wrap'>
        <h2 className='text-secondary-emphasis text-start'>Iniciar Sesión</h2>
        <p className='text-body-tertiary'>Ingrese sus credenciales para acceder</p>
        <Form noValidate autoComplete='off' spellCheck='false' onSubmit={handleSubmit(onLogin)}>
          <Form.Group className='mb-3' controlId='username-or-email'>
            <Form.Label>Usuario o Email</Form.Label>
            <Form.Control {...usernameOrEmailField} type='text' placeholder='Usuario o Email' isInvalid={!!errors.usernameOrEmail} />
            <Form.Control.Feedback type='invalid'>{ errors.usernameOrEmail?.message }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control {...passwordField} type='password' placeholder='Contraseña' isInvalid={!!errors.password} />
            <Form.Control.Feedback type='invalid'>{ errors.password?.message }</Form.Control.Feedback>
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
