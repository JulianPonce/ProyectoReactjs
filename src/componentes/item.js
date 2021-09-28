import { Link } from "react-router-dom"
import React,{useContext} from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const Item = ({element}) => {

   return(
   <>
<div >
   
 <Row xs={4} md={4} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={element.imagenUrl}/>
        <Card.Body>
          <Card.Title>{element.titulo}</Card.Title>
          <Card.Text>
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