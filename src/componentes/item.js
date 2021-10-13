import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const Item = ({element}) => {

   return(

<>
 <div  className="cart">
     <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card border="dark"  style={{ width: '14rem' }}>
              <Card.Img  variant="top" className="cartimg" width="120px" height="250px" src={element.imagenUrl}/>
              <Card.Body className="cartaBody">
                <Card.Title>{element.titulo}</Card.Title>
                <Card.Text border="dark"> 
                Precio:{element.precio}$
                </Card.Text>
                <Link to={`/item/${element.id}`}>ver mas</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
  </div>
</>
   )
}

export default Item