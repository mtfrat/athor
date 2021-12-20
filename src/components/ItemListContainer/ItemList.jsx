import Item from "./Item"
import { memo } from "react"

// Con memo si no cambia la cantidad de items, no renderizo la pagina
const ItemList = memo(
    ({items}) => {

        //Listo los items

        return (
            <>
                {
                items.map(producto =>  <Item key={producto.id} producto={producto}/>)
                }
            </>
        )
    }
)

export default ItemList
