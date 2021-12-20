import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div>
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-xs-12">
                        <ul style={{listStyle: "none", display:"flex", justifyContent:"space-around"}}>
                            <li>
                                <Link to='/' 
                                    style={{
                                        textDecoration:"none",
                                        color:"rgb(59, 59, 59, 1)",
                                        margin:"0.5rem",
                                        fontSize:"1.5rem"
                                    }}>
                                        Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to='/vehiculos/autos' 
                                        style={{
                                            textDecoration:"none",
                                            color:"rgb(59, 59, 59, 1)",
                                            margin:"0.5rem",
                                            fontSize:"1.5rem"
                                        }}>
                                            Autos
                                </Link>
                            </li>
                            <li>
                                <Link to='/vehiculos/camionetas' 
                                    style={{
                                        textDecoration:"none",
                                        color:"rgb(59, 59, 59, 1)",
                                        margin:"0.5rem",
                                        fontSize:"1.5rem"
                                    }}>
                                        Camionetas
                                </Link>
                            </li>
                            <li>
                            <Link to='/carrito' 
                                    style={{
                                        textDecoration:"none",
                                        color:"rgb(59, 59, 59, 1)",
                                        margin:"0.5rem",
                                        fontSize:"1.5rem"
                                    }}>
                                        Carrito
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
