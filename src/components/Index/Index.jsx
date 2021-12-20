import Carousel from 'react-bootstrap/Carousel'

const Index = () => {
    return (
        <div style={{minHeight:"80vh"}}>
            <Carousel fade>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn-5bee2593f911c801a8827077.closte.com/wp-content/uploads/2019/08/gatopardo-toyota-supra-destacada.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 style={{color:"white",fontSize:"3rem"}}>
                        Bienvenidos!
                    </h3>
                    <p style={{color:"white",fontSize:"1.5rem"}}>Tienda de vehiculos a escala coleccionables</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.carsol.mx/static/agency-go-virtual/Chevrolet/Camaro/2021/chevrolet-camaro-banner.jpg"
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn-5bf8e9d2f911c817dccd934a.closte.com/wp-content/uploads/2018/10/alfa_romeo_stelvio_02_SP.jpg"
                    alt="Third slide"
                />
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Index
