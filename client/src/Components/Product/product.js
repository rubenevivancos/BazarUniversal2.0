import { Container, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap';



export default function Product({product}) {

    // Función para renderizar las estrellas según la calificación
    const renderStars = () => {
        let stars = [];

        let integerRating = Math.floor(product.rating); // Parte entera de la calificación

        // Obtenemos la parte decimal restando la parte entera al número original
        let decimal = product.rating - integerRating;
        // Multiplicamos por 100 para obtener un número entero (eliminando el punto decimal)
        let decimalPart = decimal * 100;
        decimalPart = Math.floor(decimalPart); //Obtenemos la parte entera


        for (let i = 0; i < 5; i++) {
            if (i < integerRating) {
                stars.push(<span key={i}><span key={i} className="star-active">&#9733;</span><br key={i+1}/><br key={i+2}/></span>);
            } else {
                let decimalWidth = `${decimalPart}%`;
                stars.push(
                    <span key={i+1}>
                        <span key={i} className="star-active" style={{ width: decimalWidth }}>
                            &#9733;
                        </span><br key={i+1}/><br key={i+2}/>
                    </span>
                );
                break;
            }
        }
        return stars;
    };

    return(
        <Container>
            <Row>
                <Col>
                    <img src={product.images[0]} alt={product.title} width="150" height="150"/>
                </Col>
                <Col>
                    <h2 className="font-weight-bold">{product.title}</h2>
                    <span>{product.description}</span>
                    <div>
                        <span>{product.price}</span>
                        <span>
                            {renderStars()}
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}