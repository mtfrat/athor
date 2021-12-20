import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to='/' 
                    style={{textDecoration:"none",
                    color:"rgba(255,255,255,.55)"
                    }}>Athor</Link></Navbar.Brand>
                <Nav className="justify-content-right">
                    <Link to='/' 
                        style={{textDecoration:"none",
                                color:"rgba(255,255,255,.55)",
                                margin:"0.5rem"
                        }}>Inicio</Link>
                    <Link to='/vehiculos/autos' 
                        style={{textDecoration:"none",
                            color:"rgba(255,255,255,.55)",
                            margin:"0.5rem"
                        }}>Autos</Link>
                    <Link to='/vehiculos/camionetas' 
                        style={{textDecoration:"none",
                            color:"rgba(255,255,255,.55)",
                            margin:"0.5rem"
                        }}>
                            Camionetas
                    </Link>
                    <CartWidget style={{margin:"0.5rem"}}></CartWidget>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar