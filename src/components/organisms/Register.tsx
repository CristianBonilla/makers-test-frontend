import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserRegisterRequest, UserRegisterRequestExtended } from '../../lib/interfaces/auth.interface';

function Register() {
  const { register, handleSubmit, setFocus, formState: { errors }, watch } = useForm<UserRegisterRequestExtended>({
    mode: 'onChange'
  });
  const passwordRef = useRef<string>(null);
  passwordRef.current = watch('password');
  const roleIdControl = register('roleId');
  const documentNumberControl = register('documentNumber', {
    required: {
      message: 'El documento de identificación es requerido',
      value: true
    },
    minLength: {
      message: 'El documento de identificación debe tener mínimo 3 carácteres',
      value: 3
    },
    pattern: {
      message: 'Solo se permiten valores numéricos',
      value: /^\d*$/
    }
  });
  const mobileControl = register('mobile', {
    required: {
      message: 'El número telefónico es requerido',
      value: true
    },
    pattern: {
      message: 'El número telefónico no cumple con el formato (+57 3003484559)',
      value: /^\+\d{1,3}\s?\d{10}$/
    }
  });
  const usernameControl = register('username', {
    required: {
      message: 'El nombre de usuario es requerido',
      value: true
    },
    minLength: {
      message: 'El nombre de usuario debe tener mínimo 5 carácteres',
      value: 5
    },
    maxLength: {
      message: 'El nombre de usuario debe tener máximo 20 carácteres',
      value: 20
    },
    validate: {
      letters: username => /[A-Za-z]/.test(username) || 'El nombre de usuario debe tener al menos una letra',
      numbers: username => /\d/.test(username) || 'El nombre de usuario debe tener al menos un número',
      noBlankSpaces: username => /^\S+$/.test(username) || 'El nombre de usuario no debe tener espacios en blanco',
      characters: username => /[^A-Za-z\d]/.test(username) || 'El nombre de usuario debe tener al menos un símbolo especial'
    }
  });
  const passwordControl = register('password', {
    required: {
      message: 'La contraseña es requerida',
      value: true
    },
    minLength: {
      message: 'La contraseña debe tener mínimo 5 carácteres',
      value: 5
    },
    validate: {
      uppercase: password => /[A-Z]/.test(password) || 'La contraseña debe tener al menos una letra mayúsculas',
      lowercase: password => /[a-z]/.test(password) || 'La contraseña debe tener al menos una letra minúsculas',
      numbers: username => /\d/.test(username) || 'La contraseña debe tener al menos un número',
      noBlankSpaces: username => /^\S+$/.test(username) || 'La contraseña no debe tener espacios en blanco',
      characters: username => /[^A-Za-z\d]/.test(username) || 'La contraseña debe tener al menos un símbolo especial'
    }
  });
  const confirmPasswordControl = register('confirmPassword', {
    validate(password) {
      if (errors.password || !passwordRef.current) {
        return true;
      }

      return password === passwordRef.current || 'Las contraseñas no coinciden';
    }
  });
  const emailControl = register('email', {
    required: {
      message: 'El correo es requerido',
      value: true
    },
    maxLength: {
      message: 'El correo debe tener máximo 100 carácteres',
      value: 100
    },
    pattern: {
      message: 'El correo debe ser válido',
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  });
  const firstnameControl = register('firstname', {
    required: {
      message: 'Los nombres son requeridos',
      value: true
    },
    minLength: {
      message: 'Los nombres debe tener mínimo 3 carácteres',
      value: 3
    },
    maxLength: {
      message: 'Los nombres debe tener máximo 50 carácteres',
      value: 50
    },
    pattern: {
      message: 'Los nombres solo deben tener letras y espacios en blanco',
      value: /^[A-Za-z\s]+$/
    }
  });
  const lastnameControl = register('lastname', {
    required: {
      message: 'Los apellidos son requeridos',
      value: true
    },
    minLength: {
      message: 'Los apellidos debe tener mínimo 3 carácteres',
      value: 3
    },
    maxLength: {
      message: 'Los apellidos debe tener máximo 50 carácteres',
      value: 50
    },
    pattern: {
      message: 'Los apellidos solo deben tener letras y espacios en blanco',
      value: /^[A-Za-z\s]+$/
    }
  });
  const onRegister: SubmitHandler<UserRegisterRequest> = data => {
    console.log(data);
  };
  useEffect(() => {
    setFocus('documentNumber');
  }, [setFocus]);

  return (
    <Container className='register'>
      <div className="register__wrap">
        <h2 className='text-secondary-emphasis text-start'>Registrarse</h2>
        <Form noValidate autoComplete='off' spellCheck='false' onSubmit={handleSubmit(onRegister)}>
          <Form.Control {...roleIdControl} type='hidden' />
          <Form.Group className='mb-3' controlId='document-number'>
            <Form.Label>Documento de identificación</Form.Label>
            <Form.Control
              {...documentNumberControl}
              type='text'
              placeholder='Documento de identificación'
              isInvalid={!!errors.documentNumber} />
            <Form.Control.Feedback type='invalid'>{ errors.documentNumber?.message }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='mobile'>
            <Form.Label>Número telefónico</Form.Label>
            <Form.Control
              {...mobileControl}
              type='text'
              placeholder='Número telefónico'
              isInvalid={!!errors.mobile} />
            <Form.Control.Feedback type='invalid'>{ errors.mobile?.message }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='username'>
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              {...usernameControl}
              type='text'
              placeholder='Nombre de usuario'
              isInvalid={!!errors.username} />
            <Form.Control.Feedback type='invalid'>{ errors.username?.message }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              {...passwordControl}
              type='password'
              placeholder='Contraseña'
              isInvalid={!!errors.password} />
            <Form.Control.Feedback type='invalid'>{ errors.password?.message }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='confirm-password'>
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              {...confirmPasswordControl}
              type='password'
              placeholder='Confirmar contraseña'
              isInvalid={!!errors.confirmPassword} />
            <Form.Control.Feedback type='invalid'>{ errors.confirmPassword?.message }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Correo</Form.Label>
            <Form.Control
              {...emailControl}
              type='text'
              placeholder='Correo electrónico'
              isInvalid={!!errors.email} />
            <Form.Control.Feedback type='invalid'>{ errors.email?.message }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='firstname'>
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              {...firstnameControl}
              type='text'
              placeholder='Nombres'
              isInvalid={!!errors.firstname} />
            <Form.Control.Feedback type='invalid'>{ errors.firstname?.message }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='lastname'>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              {...lastnameControl}
              type='text'
              placeholder='Apellidos'
              isInvalid={!!errors.lastname} />
            <Form.Control.Feedback type='invalid'>{ errors.lastname?.message }</Form.Control.Feedback>
          </Form.Group>
          <Button type='submit' variant='danger' size='lg'>Registrarse</Button>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
