import { useContext, createContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (item) => {

        // Guardo en indice el producto que fue agregado anteriormente
        const index = cartList.findIndex(i => i.id === item.id)

        // Si item no esta vacio, es decir, el producto esta en la posicion 0 o superior
        if (index > -1) {
            const cantidadAnterior = cartList[index].cantidad

            cartList.splice(index, 1)

            setCartList([...cartList, { ...item, cantidad: item.cantidad + cantidadAnterior }])

        } else {
            setCartList([...cartList, item])
        }
    }

    const borrarCarrito = () => {
        setCartList([])
    }

    const sumarTotal = () => {
        return cartList.reduce((acumulador, valor) => (acumulador + (valor.cantidad * valor.precio)), 0)
    }

    const totalItems = () => {
        return cartList.reduce((acumulador, item) => acumulador = acumulador + item.cantidad, 0)
    }

    const eliminarUnidad = (id) => {
        setCartList(cartList.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            borrarCarrito,
            sumarTotal,
            eliminarUnidad,
            totalItems,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
