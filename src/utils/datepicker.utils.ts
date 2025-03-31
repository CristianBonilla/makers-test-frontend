import 'react-datepicker/dist/react-datepicker.css';

import { es } from 'date-fns/locale/es';
import { registerLocale, setDefaultLocale } from 'react-datepicker';

registerLocale('es', es);
setDefaultLocale('es');
