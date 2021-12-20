import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {

    const {totalItems} = useCartContext()

    return (
        <div style={{display:'flex'}}>
            <Link to='/carrito'>
            <button style={{width:'40px',borderRadius:'10px', position:'relative',top:'5px'}}>
                <i class="fas fa-shopping-cart"></i>
            </button>
            </Link>
            <div style={{color:'white',position:'relative',top:'7px',left:'5px'}}>
                {totalItems() !==0 && totalItems()}
            </div>
        </div>
    )
}

export default CartWidget