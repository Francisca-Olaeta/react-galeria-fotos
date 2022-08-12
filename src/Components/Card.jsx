import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from "react-bootstrap/Badge";

function CustomCard({title, description, img, ifNew}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={img} />
      <Card.Body>
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Más información <Badge className={ifNew != 'true' ? 'notNew' : null} pill bg="light" text="dark">Nuevo</Badge></Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;