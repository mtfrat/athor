import { Card} from "react-bootstrap";
import {useCartContext} from "../../context/CartContext.jsx"
import Button from "@restart/ui/esm/Button"
import { Link } from "react-router-dom"
import { useState} from "react"
import ModalCompra from "../ModalCompra/ModalCompra"
import { memo } from "react"

export const Carrito = memo(
    ()=> {

        const [showModal, setShowModal] = useState(false)
        const {cartList, borrarCarrito, sumarTotal, eliminarUnidad} = useCartContext()
    
        return (
            <div style={{minHeight:"80vh"}}>
            {
                cartList !== undefined &&
                    cartList.length === 0?
                    <div>
                        <h1>Carrito vacio</h1>
                        <Link to='/vehiculos/autos'>
                            <Button className="btn btn-dark" variant="primary">
                                Volver a tienda
                            </Button>
                        </Link>                      
                    </div>
                        
                    :
                        <div>
                            <h1>Productos en el carrito:</h1>
                            {cartList.map((prod) => <Card key={prod.id} style={{
                                    width: '30rem',
                                    display:'block',
                                    marginTop:'100px',
                                    marginRight:'auto',
                                    marginBottom:'0px',
                                    marginLeft:'auto'}}>
                                    <Card.Img variant="top" src={prod.imagen} />
                                    <Card.Body>
                                        <Card.Title>{prod.marca} {prod.modelo}</Card.Title>
                                        <Card.Text>
                                            Año: {prod.año}
                                        </Card.Text>
                                        <Card.Text>
                                            Precio: {prod.precio}
                                        </Card.Text>
                                        <Card.Text>
                                            Cantidad: {prod.cantidad}
                                        </Card.Text>
                                    </Card.Body>
                                    <Button onClick={()=>eliminarUnidad(prod.id)}className="btn btn-dark" variant="primary">
                                        <i class="fas fa-trash"></i>
                                    </Button>
                                </Card>)
                            }
                            <div>Total: {sumarTotal()}</div>
                            <button onClick={borrarCarrito} className="btn btn-dark" variant="primary" style={{marginRight: "0.5rem"}}>
                                Vaciar carrito
                            </button>
                            <button className="btn btn-dark" variant="primary" onClick={()=>setShowModal(true)} style={{marginLeft: "0.5rem"}}>
                                Finalizar compra
                            </button>
                            <ModalCompra show={showModal} onHide={()=>setShowModal(false)}/>
                        </div>
            }        
            </div>
        )
    }
)
