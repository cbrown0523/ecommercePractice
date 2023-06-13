import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
function ItemCard({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      {item.image && <Card.Img variant="top" src={item.image} />}
      <Card.Body>
        {item.name && <Card.Title>Name : {item.name}</Card.Title>}
        {item.description && (
          <Card.Text>Description : {item.description}</Card.Text>
        )}

        <Link to={`/product/${item.id}`} variant="primary">
          View Product
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
