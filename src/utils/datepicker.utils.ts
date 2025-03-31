import 'react-datepicker/dist/react-datepicker.css';

import { registerLocale, setDefaultLocale } from 'react-datepicker';
import { es } from 'date-fns/locale/es';

registerLocale('es', es);
setDefaultLocale('es');
