import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthType } from '../../lib/enums/auth.enum';
import Scrollbar from '../atoms/Scrollbar';
import Login from './Login';
import Register from './Register';

function Auth() {
  const [auth, setAuth] = useState(AuthType.Login);
  const loginElement = (
    <div className='auth__panel--login'>
      <h2>¿Tienes una cuenta?</h2>
      <p>Accede e interactua con el panel administrativo para solicitar un préstamo.</p>
      <Button variant='outline-light' onClick={() => setAuth(AuthType.Login)}>Iniciar Sesión</Button>
    </div>
  );
  const registerElement = (
    <div className='auth__panel--register'>
      <h2>¿No tienes una cuenta?</h2>
      <p>Has una solicitud de préstamo y nosotros te lo aprobamos.</p>
      <Button variant='outline-light' onClick={() => setAuth(AuthType.Register)}>Registrarse</Button>
    </div>
  );

  return (
    <div className='auth'>
      <div className="auth__panel">
        {auth === AuthType.Register ? loginElement : registerElement}
        <Scrollbar className={`auth__panel--container ${ auth === AuthType.Register ? 'auth__panel--right-log' : '' }`.trim()}>
          {auth === AuthType.Register ? <Register /> : <Login />}
        </Scrollbar>
      </div>
    </div>
  );
}

export default Auth;
