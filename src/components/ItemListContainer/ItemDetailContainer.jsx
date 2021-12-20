import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { getFirestore } from "../../services/getFirestore"

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading,setLoading] = useState(true)
    const {detalleID} = useParams()

    useEffect(() =>{

        // Hago la conexion con firestore
        const db = getFirestore()

        // Compruebo si categoria tiene algun valor
        const dbQuery = detalleID ?
                            db.collection('items').where('id','==',detalleID)
                        :
                            db.colection('items')

        // Recibe la conexión item de firebase y me trae todo lo que filtramos anteriormente
        dbQuery.get()
        .then(dataDb => setProducto(dataDb.docs.map(pro => ({id:pro.id, ...pro.data()}))))
        .finally(()=>setLoading(false))
    },[detalleID]) //Agrego dependencia que detecte el cambio y dispare el useEffect



    return (
        <>
            {loading ?
                    <h2>Cargando...</h2>
                :
                    <div>
                        <ItemDetail item={producto} />
                    </div>
            }
        </>
    )
}
