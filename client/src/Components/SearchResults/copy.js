import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Product from "../Product/product.js";
import imagen from '../../Images/carrito.png';
import lupaIcon from '../../Images/lupa.png';



export default function SearchResults() {

    const [product, setProduct] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        setProduct(e.target.value);        
    }

    const listProducts = useSelector((state) => state.productReducer.listProduct);
    const productToSearch = useSelector((state) => state.productReducer.productToSearch);
    const categoriesWithCount = useSelector((state) => state.productReducer.categoriesWithCount);

    function generateColor(category) {
        let color = "#";
        switch (category) {
            case "smartphones":
                color = "#FFC0CB"; //Rosado claro
                break;
            case "laptops":
                color = "#4285F4"; //Celeste
                break;
            case "fragrances":
                color = "#90EE90"; //Verde claro
                break;
            case "skincare":
                color = "#FFFF00"; //Amarillo
                break;
            case "groceries":
                color = "#800080"; //Morado
                break;
            case "home-decoration":
                color = "#D2B48C"; //Beige
                break;
            default:
              color = "#B0E0E6"; //Azul polvo
        }
        console.log("El color es --> " + color);
        return color;
      }

    if(listProducts.length){
        return(
            <>
                <Container fluid style={{ maxHeight: '90vh', maxWidth: '90vh', overflowY: 'auto' }}>
                    <Row className="mb-4">
                        <Col style={{ border: "2px solid black" }}>
                            <InputGroup>
                                <Image src={imagen} style={{ width: "50px" }}/>
                                <InputGroup.Text> </InputGroup.Text>
                                <FormControl
                                    placeholder="smartphones, laptops..."
                                    aria-label="Búsqueda"
                                    aria-describedby="basic-addon2"
                                    onChange={handleInput}
                                />
                                <Image src={lupaIcon} alt="Lupa"/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="text-left" style={{ border: "2px solid black" }}>
                            <div>Resultados de la busqueda de " {productToSearch} ": {listProducts.length}</div>
                        </Col>
                    </Row>
                    <Row className="mb-4 text-left">                        
                        <Col style={{ border: "2px solid black" }} className="d-flex"> {/*d-flex: hace que la columna modifique su altura segun lo que contenga */}
                            {categoriesWithCount.map((cat) => (
                                <span key={cat.category} className="me-2 p-1" style={{backgroundColor: generateColor(cat.category)}}>{cat.category} - {cat.count}</span>
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center" style={{ border: "2px solid black" }}>
                            <div>
                                { listProducts.map( product => <Link to={"/items/"+product.id} key={product.id}><Product product={product} /></Link>) }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

/*
            <div>
                <div>
                    <div>
                        <input type="text" placeholder="laptops, smartphones, ..."/>
                        <div></div>
                    </div>
                </div>
                <div>Resultados de la busqueda de " {productToSearch} ": {listProducts.length}</div>
                <div className="category-list">
                    {categoriesWithCount.map((cat) => (
                        <div key={cat.category}>{cat.category} - {cat.count}</div>
                    ))}
                </div>
                <div>
                    { listProducts.map( product => <Link to={"/items/"+product.id} key={product.id}><Product product={product} /></Link>) }
                </div>
            </div>
*/