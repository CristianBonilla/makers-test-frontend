import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import FontIcon from '../../atoms/FontIcon';
import Scrollbar from '../../atoms/Scrollbar';

function BankLoans() {
  return (
    <Container fluid className='px-1 px-sm-2 px-lg-3'>
      <div className='table__container'>
        <div className='d-flex gap-2 align-items-center bg-danger px-3 py-2'>
          <FontIcon className='text-light' icon={['fas', 'circle-right']} size='lg' />
          <h3 className='text-light my-1 my-sm-0'>Mis Préstamos</h3>
        </div>
        <Scrollbar className='table-responsive' options={{
          overflow: {
            y: 'visible-hidden'
          }
        }}>
          <Table borderless striped hover size='sm'>
            <thead className='thead-dark'>
              <tr className='text-center'>
                <th scope='col'>N°</th>
                <th scope='col'>Monto</th>
                <th scope='col'>Estado</th>
                <th scope='col'>Plazo de pago</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center'>
                <th scope='row'>1</th>
                <td>$1.000.000</td>
                <td>Pendiente</td>
                <td>25 de abril de 2025</td>
              </tr>
            </tbody>
          </Table>
        </Scrollbar>
      </div>
    </Container>
  );
}

export default BankLoans;
