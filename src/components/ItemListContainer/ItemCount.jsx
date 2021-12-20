import { useState} from "react"

const ItemCount = ({stock, initial,compra}) => {

    // Inicializo cuenta
    const [count, setCount] = useState(initial)

    // Funcion para agregar items
    const suma = () =>{
        count < stock ? setCount(count+1) : setCount(count)
    }

    // Funcion para quitar items
    const resta = () =>{
        count > 1 ? setCount(count-1) : setCount(count)
    }

    // Verifico con un booleano si es suma o resta
    const handleBotones = (verificador) => {
        verificador ? suma() : resta()
    }

    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <button className="btn btn-dark" variant="primary" onClick={()=>handleBotones(false)}>
                    -
                </button>
                <p>{count}</p>
                <button className="btn btn-dark" variant="primary" onClick={()=>handleBotones(true)}>
                    +
                </button>
            </div>
            <button onClick={()=>compra(count)} className="btn btn-dark" variant="primary">
                    Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount
