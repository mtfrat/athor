import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getFirestore } from "../../services/getFirestore"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoria} = useParams()

    useEffect(() =>{

        // Hago la conexion con firestore
        const db = getFirestore()

        // Compruebo si categoria tiene algun valor
        const dbQuery = categoria ?
                            db.collection('items').where('categoria','==',categoria)
                        :
                            db.colection('items')

        // Recibe la conexión item de firebase y me trae todo lo que filtramos anteriormente
        dbQuery.get()
        .then(dataDb => setProductos(dataDb.docs.map(pro => ({id:pro.id, ...pro.data()}))))
        .finally(()=>setLoading(false))

    },[categoria]) //Agrego dependencia que detecte el cambio y dispare el useEffect

    return (
        <div style={{minHeight:"80vh"}}>
            {loading ?
                    <h2>Cargando...</h2>
                :
                <div>
                    <h1 className="mt-3 mb-3">{categoria.charAt(0).toUpperCase() + categoria.slice(1)} disponibles</h1>
                    <div style={{ display: 'flex',flexDirection:'row'}}>
                        <ItemList items = {productos}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemListContainer