import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
function ItemCard({ item }) {
  return ( 
  <Link to={`/product/${item.id}`} variant="primary">
    
    <Card style={{ width: "18rem" }}>
      {item.image && <Card.Img variant="top" src={item.image} />}
      <Card.Body>
       
        {item.name && <Card.Title>Name : {item.name}</Card.Title>}
        {item.price && <Card.Title>Price : ${item.price}</Card.Title>}
        {item.description && (
          <Card.Text>Description : {item.description}</Card.Text>
        )}

        {item.label && item.label.map(product =>{
          return <h5>
          <Badge bg="secondary">{product}</Badge>
        </h5>
          })}
      </Card.Body>
    </Card></Link>
  );
}

export default ItemCard;
