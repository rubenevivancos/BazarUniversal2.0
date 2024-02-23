import { Container, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap';
import CalificacionEstrellas from './stars';



export default function Product({product}) {


    return(
        <Container className="my-4"> {/* Agregamos my-4 para agregar margen arriba y abajo */}
            <Row className="align-items-center">
                {/* Columna para la imagen */}
                <Col xs={12} lg={5} className="mb-4 mb-lg-0">
                    <img src={product.images[0]} alt={product.title} className="img-fluid" />
                </Col>
                {/* Columna para el contenido */}
                <Col xs={12} lg={7}>
                    <h2 className="font-weight-bold">{product.title}</h2>
                    <p>{product.description}</p>
                    <div>
                        <span>{product.price}</span>
                        <CalificacionEstrellas calificacion={product.rating} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}