import { Card } from "react-bootstrap"
import Button from "@restart/ui/esm/Button"
import { Link } from "react-router-dom"

//Muestro los items listados
const Item = ({producto}) => {

    return (
        <Card style={{ width: '30rem'}}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.marca} {producto.modelo}</Card.Title>
                <Card.Text>
                {producto.año}
                </Card.Text>
                <Card.Text>
                {producto.precio}
                </Card.Text>
                <Link to={`/detalle/${producto.id}`}>
                    <Button className="btn btn-dark" variant="primary">Comprar</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Item

