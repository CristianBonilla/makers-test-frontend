import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import FontIcon from '../../atoms/FontIcon';

function Manage() {
  return (
    <Container fluid className='px-1 px-sm-2 px-lg-3'>
      <h3>Gestionar Solicitudes de Préstamos</h3>
      <CardGroup>
        <Card style={{ maxWidth: '28rem', width: '100%' }}>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item>
              <strong>Usuario</strong>
              <br />
              <p className='text-body-secondary text-capitalize mb-0'>cristian bonilla</p>
              <i className='text-muted'>chis__boni &mdash; cristian10camilo95@gmail.com</i>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col sm>
                  <strong>Monto</strong>
                  <br />
                  <i className='text-muted'>$1.000.000</i>
                </Col>
                <Col sm>
                  <strong>Estado</strong>
                  <br />
                  <i className='text-muted'>Pendiente</i>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <Card.Footer>
            <div className='d-flex gap-1 align-items-start align-items-sm-center justify-content-sm-between flex-column flex-sm-row'>
              <small className='text-muted'>
                <i className='fw-semibold'>Plazo</i> 25 de agosto de 2025
              </small>
              <ButtonGroup>
                <Button type='button' className='d-flex gap-2' variant='success'>
                  <FontIcon icon={['fas', 'circle-check']} />
                  <span>Aprobar</span>
                </Button>
                <Button type='button' className='d-flex gap-2' variant='dark'>
                  <FontIcon icon={['fas', 'rectangle-xmark']} />
                  <span>Rechazar</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default Manage;
