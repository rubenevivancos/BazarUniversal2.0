import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';

import { productSearch } from "../../Redux/Actions/productAction";
import imagen from '../../Images/carrito.png';
import lupaIcon from '../../Images/lupa.png';
//import './homeWithSearchBox.css';

export default function HomeWithSearchBox() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [product, setProduct] = useState("");

    const handleInput = (e) => {
        e.preventDefault()
        setProduct(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(productSearch(product));

        // Crea una nueva ruta con el parámetro de consulta "search"
        const newRoute = `/items?search=${product}`;

        navigate(newRoute);
    }


    return(
        <>
            <Container>
                <Row className="mb-4">
                    <Col>
                        <Image src={imagen} className="img-centered" style={{ width: "300px" }}/>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <h1 className="text-center">Bazar Universal</h1>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Col>
                        <InputGroup className="mb-4">
                            <FormControl
                                placeholder="smartphones, laptops..."
                                aria-label="Búsqueda"
                                aria-describedby="basic-addon2"
                                onChange={handleInput}
                            />
                            <img src={lupaIcon} alt="Lupa" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button variant="primary" onClick={handleSubmit}>
                            Buscar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>


        /* 
        <div className="container">
            <div className="row">
                <div className="food-car"></div>
            </div>
            <div className="row">
                <h1>Bazar Online</h1>
            </div>
            <div className="row">
                <div className="search-container">
                    <input type="text" placeholder="laptops, smartphones, ..." className="search-box" onChange={handleInput}/>
                    <div className="search-icon"></div>
                </div>
            </div>
            <div className="row">
                <button className="search-button" onClick={handleSubmit}>Buscar</button>
            </div>
        </div>
        */
    )
}