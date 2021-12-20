// import Modal from 'react-bootstrap/Modal'
import {useCartContext} from "../../context/CartContext.jsx"
import { getFirestore } from "../../services/getFirestore"
import React,{ useState} from "react"
import Button from "@restart/ui/esm/Button"
import Modal from 'react-bootstrap/Modal'
import { Link } from "react-router-dom"

const ModalCompra = (props) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [validarEmail, setValidarEmail] = useState(true)
    const [orderID, setOrderID] = useState(null)

    const {cartList, borrarCarrito, sumarTotal} = useCartContext()

        // Genero orden

        const generarOrden = (e) =>{
            e.preventDefault()
            const comprador = {name,phone,email}
            const orden = {}
    
            orden.buyer = {comprador}
            orden.total = sumarTotal()
            orden.items = cartList.map(item => {
                const id = item.id
                const marca = item.marca
                const modelo = item.modelo
                const precio = item.precio * item.cantidad
                return{id, marca, modelo, precio}
            })
            
    
            const dbQuery = getFirestore()
            const ordersCollection = dbQuery.collection('orders')
            ordersCollection.add(orden)
            .then((IdDocument)=>{
                setOrderID(IdDocument.id)
            })
        }
    

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Ingresar datos 
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={generarOrden} style={{display:"flex",flexDirection:"column"}}>
                    <label style={{marginBottom:"0.1rem"}}>Nombre:</label>
                    <input 
                    type='text'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    style={{marginBottom:"0.1rem"}}
                    />
                    <label style={{marginBottom:"0.1rem"}}>Email:</label>
                    <input 
                    type='text'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    style={{marginBottom:"0.1rem"}}
                    />
                    <label style={{marginBottom:"0.1rem"}}>Reingresar email:</label>
                    <input 
                    type='text'
                    onChange={(e)=>e.target.value === email ? setValidarEmail(true) : setValidarEmail(false)}
                    style={{marginBottom:"0.1rem"}}
                    />
                    <small>{validarEmail ? null : `Los emails no coinciden`}</small>
                    <label style={{marginBottom:"0.1rem"}}>Telefono:</label>
                    <input 
                    type='text'
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    style={{marginBottom:"0.2rem"}}
                    />
                    <button variant="outline-info" className="btn btn-dark">Comprar</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Link to='/'>
                    <Button onClick={borrarCarrito} className="btn btn-dark" variant="primary">Close</Button>
                </Link>     
            </Modal.Footer>
            <small>{orderID ? `Compra exitosa!` : null}</small>
            <small>{orderID ? `Su orden es:${orderID}` : null}</small>
        </Modal>
    )
}

export default ModalCompra
